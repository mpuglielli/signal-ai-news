const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');
const feeds = require('./feeds');

const parser = new Parser({
  timeout: 10000,
  headers: { 'User-Agent': 'G2-AI-News/1.0 (+https://g2.com)' },
});

const CACHE_FILE = path.join(__dirname, 'articles-cache.json');

// Load persisted article cache from disk — survives cold starts on Vercel
function loadCachedArticles() {
  try {
    if (fs.existsSync(CACHE_FILE)) {
      const raw = JSON.parse(fs.readFileSync(CACHE_FILE, 'utf8'));
      console.log(`[aggregator] Loaded ${raw.articles?.length || 0} articles from cache file.`);
      return raw;
    }
  } catch (err) {
    console.warn('[aggregator] Could not load articles-cache.json:', err.message);
  }
  return null;
}

function saveCachedArticles(articles, lastUpdated) {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify({ articles, lastUpdated }, null, 2), 'utf8');
  } catch (err) {
    // Vercel filesystem is read-only outside /tmp — not a hard failure
    console.warn('[aggregator] Could not write articles-cache.json (ok on Vercel — scheduled task commits it)');
  }
}

// Seed from file immediately so first request is never empty
const seedCache = loadCachedArticles();
let articleCache = seedCache?.articles || [];
let lastUpdated = seedCache?.lastUpdated || null;

// Returns true if the URL is a specific article path (not just a homepage or bare domain)
function isArticleUrl(url) {
  if (!url || !url.startsWith('http')) return false;
  try {
    const { pathname } = new URL(url);
    // Reject only the root path or single-segment feed paths — never guess
    const isRoot = pathname === '/' || pathname === '';
    const isFeedOnly = /^\/(feed|rss)\/?$/i.test(pathname);
    return !isRoot && !isFeedOnly;
  } catch {
    return false;
  }
}

// Best available direct URL from an RSS item
function extractUrl(item) {
  const candidates = [item.link, item.origlink, item.guid];
  for (const url of candidates) {
    if (isArticleUrl(url)) return url;
  }
  return item.link || ''; // fallback — better to have a URL than nothing
}

async function fetchFeed(feed) {
  try {
    const parsed = await parser.parseURL(feed.url);
    return (parsed.items || []).slice(0, 8)
      .map((item) => {
        const url = extractUrl(item);
        return {
          id: Buffer.from(url || item.guid || '').toString('base64').slice(0, 16),
          title: decodeEntities(stripHtml(item.title || '')),
          summary: decodeEntities(stripHtml(item.contentSnippet || item.content || item.summary || '')).slice(0, 500),
          url,
          image: extractImage(item),
          publishedAt: item.pubDate || item.isoDate || new Date().toISOString(),
          source: feed.name,
          category: feed.category,
          tags: feed.tags,
        };
      })
      .filter((a) => a.url && a.title); // drop items with no usable URL or title
  } catch (err) {
    console.warn(`[aggregator] Failed to fetch ${feed.name}: ${err.message}`);
    return [];
  }
}

function stripHtml(html) {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
}

function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code, 10)))
    .replace(/&[a-zA-Z]+;/g, '');
}

function extractImage(item) {
  // Try media:content, enclosure, or og image in content
  if (item['media:content'] && item['media:content']['$'] && item['media:content']['$'].url) {
    return item['media:content']['$'].url;
  }
  if (item.enclosure && item.enclosure.url && item.enclosure.type?.startsWith('image')) {
    return item.enclosure.url;
  }
  const match = (item.content || item['content:encoded'] || '').match(/<img[^>]+src=["']([^"']+)["']/i);
  if (match) return match[1];
  return null;
}

async function refreshAll() {
  console.log('[aggregator] Refreshing all feeds…');
  const prevCache = [...articleCache]; // save before any overwrite
  const results = await Promise.allSettled(feeds.map(fetchFeed));
  const fresh = results
    .filter((r) => r.status === 'fulfilled')
    .flatMap((r) => r.value);

  // Dedupe by URL
  const seen = new Set();
  const deduped = fresh.filter((a) => {
    if (seen.has(a.url)) return false;
    seen.add(a.url);
    return true;
  });

  // Sort newest first
  deduped.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  if (deduped.length === 0) {
    // All feeds failed — preserve whatever was in cache before this run
    console.log('[aggregator] No live articles from feeds — preserving existing cache.');
    lastUpdated = lastUpdated || new Date().toISOString();
    return articleCache; // unchanged
  }

  // Freshness guard: if the newest article from live feeds is older than 7 days
  // AND the existing cache has newer content, keep the existing cache.
  const newestFresh = new Date(deduped[0].publishedAt).getTime();
  const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
  if (newestFresh < sevenDaysAgo && prevCache.length > 0) {
    const newestCached = new Date(prevCache[0].publishedAt).getTime();
    if (newestCached >= newestFresh) {
      console.log(`[aggregator] Live feeds only returned stale content (newest: ${deduped[0].publishedAt}). Preserving existing cache.`);
      return articleCache;
    }
  }

  articleCache = deduped;
  lastUpdated = new Date().toISOString();
  console.log(`[aggregator] Cached ${articleCache.length} fresh articles. Newest: ${deduped[0]?.publishedAt}`);

  // Persist to disk so next cold start serves real content immediately
  saveCachedArticles(articleCache, lastUpdated);

  return articleCache;
}

function getArticles({ category, limit = 40, offset = 0 } = {}) {
  let items = articleCache;
  if (category && category !== 'all') {
    items = items.filter((a) => a.category === category || a.tags.includes(category));
  }
  return {
    articles: items.slice(offset, offset + limit),
    total: items.length,
    lastUpdated,
  };
}

function getFeatured(n = 5) {
  // Top n articles — prefer ones with images
  const withImage = articleCache.filter((a) => a.image);
  const without = articleCache.filter((a) => !a.image);
  return [...withImage, ...without].slice(0, n);
}

module.exports = { refreshAll, getArticles, getFeatured };
