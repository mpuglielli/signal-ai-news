/* ═══════════════════════════════════════════════════
   SIGNAL — Frontend App
   ═══════════════════════════════════════════════════ */

const API = '';
let allArticles = [];
let offset = 0;
const PAGE_SIZE = 16;
let currentCategory = 'all';

// ── Utilities ─────────────────────────────────────────────────────

function relativeTime(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hrs = Math.floor(diff / 36e5);
  if (hrs < 1) return 'Just now';
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function issueNumber() {
  const epoch = new Date('2025-01-06');
  const now = new Date();
  const days = Math.floor((now - epoch) / 86400000);
  const weeks = Math.floor(days / 7);
  const issueSuffix = now.getDay() >= 4 ? 1 : 0;
  return String(weeks * 2 + issueSuffix + 1).padStart(3, '0');
}

function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// Map category to CSS class for coloured tag
function categoryClass(cat) {
  if (cat === 'general') return 'general';
  if (cat === 'saas') return 'saas';
  return 'thought-leadership';
}

// Sources known to be paywalled
const PAYWALL_SOURCES = new Set([
  'stratechery', 'the pragmatic engineer', 'mit technology review',
  'bloomberg', 'the information', 'wall street journal', 'wsj',
  'financial times', 'ft', 'the atlantic',
]);

function isPaywalled(source) {
  return PAYWALL_SOURCES.has((source || '').toLowerCase().trim());
}

// ── Read time estimate ────────────────────────────────────────────
// RSS summaries are 30–80 words — a poor proxy for article length.
// We improve accuracy by calibrating the multiplier based on source type:
//   Long-form (analysis, deep-dives): ~1,500–3,000 word articles
//   News briefs (TechCrunch, VentureBeat, press releases): ~400–700 words

const LONG_FORM_SOURCES = new Set([
  'stratechery', 'benedict evans', 'the pragmatic engineer',
  'mit technology review', 'wired ai', 'wired',
  'a16z', 'sequoia capital', 'the algorithmic bridge', 'ai snake oil',
]);

function readTime(summary, source, category) {
  const words = Math.max(25, (summary || '').trim().split(/\s+/).filter(Boolean).length);
  const src = (source || '').toLowerCase();

  const isLongForm = category === 'thought-leadership' ||
    [...LONG_FORM_SOURCES].some(s => src.includes(s));

  // Multiplier: how many times longer is the full article vs the summary?
  // Long-form summaries ≈ 3–6% of article → use 30×
  // News summaries ≈ 8–15% of article → use 12×
  const multiplier = isLongForm ? 30 : 12;
  const estimatedWords = words * multiplier;
  const rawMins = estimatedWords / 220; // 220 wpm average

  const mins = isLongForm
    ? Math.max(5, Math.round(rawMins))   // floor 5 min for long-form
    : Math.max(2, Math.round(rawMins));  // floor 2 min for news

  return `${Math.min(mins, 20)} min read`;
}

// ── Card builder — NO images, NO index number ─────────────────────

function cardType(index) {
  if (index % 9 === 5) return 'type-accent';
  if (index % 6 === 0) return 'type-text';
  return '';
}

function buildCard(article, index, overrideType = null) {
  const type = overrideType !== null ? overrideType : cardType(index);
  const card = document.createElement('article');
  card.className = `article-card${type ? ' ' + type : ''}`;
  card.addEventListener('click', () => window.open(article.url, '_blank', 'noopener'));

  const paywallTag = isPaywalled(article.source)
    ? `<span class="card-tag-paywall" title="This source may require a subscription">Paywall</span>`
    : '';

  card.innerHTML = `
    <div class="card-source-row">
      <span class="article-source">${safeText(article.source)}</span>
      <span class="card-tag ${categoryClass(article.category)}">${safeText(article.category.replace(/-/g, ' '))}</span>
      ${paywallTag}
    </div>
    <h3 class="card-headline">${safeText(article.title)}</h3>
    <p class="card-summary">${safeText(article.summary)}</p>
    <div class="card-footer">
      <span class="card-date">${relativeTime(article.publishedAt)}</span>
      <span class="card-read-time">${readTime(article.summary, article.source, article.category)}</span>
      <span class="card-read">Read →</span>
    </div>
  `;
  return card;
}

// ── Cover — pure typography, no image ────────────────────────────

function renderCover(featured) {
  if (!featured.length) return;

  const hero = featured[0];
  const rest = featured.slice(1, 5);

  document.getElementById('cover-source').textContent = hero.source;
  document.getElementById('cover-headline').textContent = hero.title;
  document.getElementById('cover-deck').textContent = hero.summary;
  document.getElementById('cover-link').href = hero.url;

  const sec = document.getElementById('cover-secondary');
  sec.innerHTML = '';
  rest.forEach((a) => {
    const card = document.createElement('article');
    card.className = 'secondary-card';
    card.innerHTML = `
      <span class="article-source">${safeText(a.source)}</span>
      <h3 class="secondary-headline">${safeText(a.title)}</h3>
      <span class="secondary-meta">${relativeTime(a.publishedAt)}</span>
    `;
    card.addEventListener('click', () => window.open(a.url, '_blank', 'noopener'));
    sec.appendChild(card);
  });

  document.getElementById('stamp-issue').textContent = `№ ${issueNumber()}`;
  document.getElementById('stamp-date').textContent =
    new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

// ── Masthead ──────────────────────────────────────────────────────

function setEditionLabel(lastUpdated) {
  const el = document.getElementById('edition-label');
  if (lastUpdated) {
    const d = new Date(lastUpdated);
    el.textContent = `Updated ${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} · Mon & Thu`;
  } else {
    el.textContent = 'Monday & Thursday Edition';
  }
}

// ── Ticker ────────────────────────────────────────────────────────

function buildTicker(articles) {
  const track = document.getElementById('ticker-track');
  const items = articles.slice(0, 20).map((a) =>
    `<span class="ticker-item">${safeText(a.title)}</span><span class="ticker-label"> · SIG2NAL · </span>`
  // Note: ticker uses plain text — G2 orange only applies in the wordmark SVG context
  ).join('');
  track.innerHTML = items + items;
}

// ── Articles grid ─────────────────────────────────────────────────

function renderGrid(articles, append = false) {
  const grid = document.getElementById('articles-grid');
  if (!append) grid.innerHTML = '';
  articles.forEach((a, i) => {
    const card = buildCard(a, append ? grid.children.length + i : i);
    grid.appendChild(card);
  });
}

// ── Voices — thought leader chips + their articles ────────────────

const VOICES = [
  { name: 'Aaron Levie',    title: 'CEO, Box',                    linkedin: 'https://www.linkedin.com/in/aaronlevie/' },
  { name: 'Satya Nadella',  title: 'CEO, Microsoft',              linkedin: 'https://www.linkedin.com/in/satyanadella/' },
  { name: 'Marc Benioff',   title: 'CEO, Salesforce',             linkedin: 'https://www.linkedin.com/in/marcbenioff/' },
  { name: 'Dharmesh Shah',  title: 'CTO, HubSpot',                linkedin: 'https://www.linkedin.com/in/dharmesh/' },
  { name: 'Ali Ghodsi',     title: 'CEO, Databricks',             linkedin: 'https://www.linkedin.com/in/alighodsi/' },
  { name: 'Martin Casado',  title: 'General Partner, a16z',       linkedin: 'https://www.linkedin.com/in/martincasado/' },
  { name: 'Sarah Guo',      title: 'Founder, Conviction',         linkedin: 'https://www.linkedin.com/in/sarahguo/' },
  { name: 'Jason Lemkin',   title: 'Founder, SaaStr',             linkedin: 'https://www.linkedin.com/in/jasonmlemkin/' },
  { name: 'Tomasz Tunguz',  title: 'GP, Theory Ventures',         linkedin: 'https://www.linkedin.com/in/tomasztunguz/' },
  { name: 'Jared Spataro',  title: 'CVP AI at Work, Microsoft',   linkedin: 'https://www.linkedin.com/in/jaredspataro/' },
];

let activeVoice = null;

function renderVoicesRoster(articles) {
  const roster = document.getElementById('voices-roster');
  const grid = document.getElementById('voices-grid');
  if (!roster || !grid) return;

  // Build chips
  VOICES.forEach(v => {
    const chip = document.createElement('a');
    chip.className = 'voice-chip';
    chip.href = v.linkedin;
    chip.target = '_blank';
    chip.rel = 'noopener';
    chip.innerHTML = `
      <div>
        <div class="voice-chip-name">${safeText(v.name)}</div>
        <div class="voice-chip-title">${safeText(v.title)}</div>
      </div>
    `;

    // Click filters grid to this person's articles
    chip.addEventListener('click', (e) => {
      if (e.ctrlKey || e.metaKey) return; // allow open-in-new-tab
      e.preventDefault();
      if (activeVoice === v.name) {
        // Deselect — show all voices articles
        activeVoice = null;
        document.querySelectorAll('.voice-chip').forEach(c => c.classList.remove('active'));
        showVoicesArticles(articles, null);
      } else {
        activeVoice = v.name;
        document.querySelectorAll('.voice-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        showVoicesArticles(articles, v.name);
      }
    });

    roster.appendChild(chip);
  });

  showVoicesArticles(articles, null);
}

function showVoicesArticles(allArticles, personName) {
  const grid = document.getElementById('voices-grid');
  if (!grid) return;
  const voiceArticles = allArticles.filter(a => a.tags && a.tags.includes('voices'));
  const filtered = personName
    ? voiceArticles.filter(a => a.source === personName)
    : voiceArticles;

  if (!filtered.length) {
    grid.innerHTML = '<p style="grid-column:span 12;padding:32px 0;color:var(--muted);font-family:var(--font-mono);font-size:11px;letter-spacing:0.1em;text-transform:uppercase;">No articles yet — Google Alerts delivers as stories are published.</p>';
    return;
  }
  grid.innerHTML = '';
  filtered.slice(0, 8).forEach((a, i) => grid.appendChild(buildCard(a, i)));
}

// ── Perspectives — same articles-grid as Latest Intelligence ──────

function renderPerspectives(articles) {
  const grid = document.getElementById('perspectives-row');
  if (!grid) return;
  const items = articles.filter((a) => a.category === 'thought-leadership').slice(0, 8);
  if (!items.length) { document.getElementById('perspectives-section').style.display = 'none'; return; }
  grid.innerHTML = '';
  items.forEach((a, i) => grid.appendChild(buildCard(a, i)));
}

// ── B2B SaaS — same articles-grid as Latest Intelligence ──────────

function renderSaas(articles) {
  const grid = document.getElementById('saas-grid');
  if (!grid) return;
  const items = articles.filter((a) => a.category === 'saas').slice(0, 8);
  if (!items.length) { document.getElementById('saas-section').style.display = 'none'; return; }
  grid.innerHTML = '';
  items.forEach((a, i) => grid.appendChild(buildCard(a, i)));
}

// ── Filters ───────────────────────────────────────────────────────

function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.dataset.cat;
      offset = 0;
      const filtered = currentCategory === 'all'
        ? allArticles
        : allArticles.filter((a) => a.category === currentCategory || a.tags.includes(currentCategory));
      renderGrid(filtered.slice(0, PAGE_SIZE));
      offset = PAGE_SIZE;
    });
  });

  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      const matchingBtn = document.querySelector(`.filter-btn[data-cat="${link.dataset.category}"]`);
      if (matchingBtn) matchingBtn.click();
      document.getElementById('main-content').scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// ── Load more ─────────────────────────────────────────────────────

function setupLoadMore() {
  document.getElementById('load-more').addEventListener('click', () => {
    const filtered = currentCategory === 'all'
      ? allArticles
      : allArticles.filter((a) => a.category === currentCategory || a.tags.includes(currentCategory));
    const next = filtered.slice(offset, offset + PAGE_SIZE);
    if (!next.length) {
      document.getElementById('load-more').textContent = 'All caught up';
      document.getElementById('load-more').disabled = true;
      return;
    }
    renderGrid(next, true);
    offset += PAGE_SIZE;
  });
}

// ── Footer ────────────────────────────────────────────────────────

function setFooterDate(lastUpdated) {
  const el = document.getElementById('last-updated-footer');
  if (lastUpdated) el.textContent = `Last updated: ${new Date(lastUpdated).toLocaleString()}`;
}

// ── G2 Category Intelligence ──────────────────────────────────────

function starsHtml(rating) {
  let html = '';
  for (let i = 0; i < 5; i++) {
    html += `<span class="g2-star${i >= Math.round(rating) ? ' empty' : ''}"></span>`;
  }
  return `<div class="g2-stars">${html}</div>`;
}

function formatReviews(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k reviews` : `${n} reviews`;
}

function buildG2Card(cat, index) {
  const card = document.createElement('div');
  card.className = 'g2-card';
  const maxProducts = index === 0 ? 4 : 3;
  const productsHtml = (cat.top_products || []).slice(0, maxProducts).map((p) => `
    <a class="g2-product-item" href="${p.g2_url}" target="_blank" rel="noopener">
      ${starsHtml(p.stars)}
      <span class="g2-product-name">${safeText(p.name)}</span>
      <span class="g2-product-rating">${p.stars}</span>
      <span class="g2-product-reviews">${formatReviews(p.reviews)}</span>
    </a>
  `).join('');

  card.innerHTML = `
    <div class="g2-card-header">
      <h3 class="g2-card-name">${safeText(cat.name)}</h3>
      <span class="g2-signal ${cat.signal}">${safeText(cat.signal_label)}</span>
    </div>
    <p class="g2-card-desc">${safeText(cat.description)}</p>
    <div class="g2-card-products">${productsHtml || '<span style="font-family:var(--font-mono);font-size:11px;color:var(--muted)">Emerging — data coming soon</span>'}</div>
    <div class="g2-card-footer">
      <span class="g2-card-count">${cat.product_count_label}</span>
      <a class="g2-view-link" href="${cat.g2_url}" target="_blank" rel="noopener">View on G2 →</a>
    </div>
  `;
  return card;
}

function renderG2Summary(categories) {
  const el = document.getElementById('g2-summary');
  if (!el) return;

  const totalCats = categories.length;
  // Sum up product counts from labels like "35+ products" → extract number
  const totalProductsMin = categories.reduce((sum, c) => {
    const n = parseInt((c.product_count_label || '').replace(/[^0-9]/g, ''), 10) || 0;
    return sum + n;
  }, 0);

  const hot     = categories.filter(c => c.signal === 'hot');
  const growing = categories.filter(c => c.signal === 'growing');
  const newCats = categories.filter(c => c.signal_label === 'New Category');

  const hotLabel     = hot.map(c => c.name).join(', ') || '—';
  const growingLabel = growing.map(c => c.name).join(', ') || '—';
  const newLabel     = newCats.length
    ? newCats.map(c => c.name).join(', ')
    : 'No new categories this cycle';

  el.innerHTML = `
    <div class="g2-summary-stat">
      <span class="g2-summary-label">AI Categories Tracked</span>
      <span class="g2-summary-value">${totalCats}</span>
      <span class="g2-summary-sub">Across G2's software marketplace, covering the full AI stack</span>
    </div>
    <div class="g2-summary-stat">
      <span class="g2-summary-label">Products Indexed</span>
      <span class="g2-summary-value">${totalProductsMin.toLocaleString()}+</span>
      <span class="g2-summary-sub">Reviewed AI products mapped to category and buyer intent data</span>
    </div>
    <div class="g2-summary-stat">
      <span class="g2-summary-label">Data Freshness</span>
      <span class="g2-summary-value" style="font-size:clamp(18px,2vw,28px);letter-spacing:-0.01em">Bi-Weekly</span>
      <span class="g2-summary-sub">Refreshed every 1st &amp; 15th via live G2 API — next update June 15</span>
    </div>
    <div class="g2-summary-narrative">
      <div class="g2-narrative-item">
        <div class="g2-narrative-label">Hottest right now</div>
        <div class="g2-narrative-text"><strong>${safeText(hotLabel)}</strong> — highest buyer intent signals and fastest-growing product listings on G2 this cycle.</div>
      </div>
      <div class="g2-narrative-item">
        <div class="g2-narrative-label">Growing categories</div>
        <div class="g2-narrative-text"><strong>${safeText(growingLabel)}</strong> — sustained review velocity and enterprise buyer activity increasing quarter-over-quarter.</div>
      </div>
      <div class="g2-narrative-item">
        <div class="g2-narrative-label">New this cycle</div>
        <div class="g2-narrative-text">${safeText(newLabel)}${newCats.length ? ' — a newly established G2 category, reflecting emerging buyer demand.' : '.'}</div>
      </div>
    </div>
  `;
}

async function renderG2Section() {
  const grid = document.getElementById('g2-grid');
  if (!grid) return;
  try {
    const res = await fetch(`${API}/api/g2/categories`);
    const data = await res.json();
    const cats = data.categories || [];
    renderG2Summary(cats);
    grid.innerHTML = '';
    cats.forEach((cat, i) => grid.appendChild(buildG2Card(cat, i)));
  } catch (err) {
    console.warn('[g2] Failed to load categories:', err);
    if (grid) grid.style.display = 'none';
  }
}

// ── Init ──────────────────────────────────────────────────────────

async function init() {
  setupFilters();
  setupLoadMore();
  try {
    const [featuredRes, articlesRes] = await Promise.all([
      fetch(`${API}/api/featured?n=5`).then((r) => r.json()),
      fetch(`${API}/api/articles?limit=80`).then((r) => r.json()),
    ]);
    allArticles = articlesRes.articles || [];

    if (allArticles.length > 0) {
      renderCover(featuredRes.articles || []);
      buildTicker(allArticles);
      renderGrid(allArticles.slice(0, PAGE_SIZE));
      offset = PAGE_SIZE;
      renderVoicesRoster(allArticles);
      renderPerspectives(allArticles);
      renderSaas(allArticles);
    } else {
      // No real content — show nothing rather than fake articles
      document.getElementById('cover').style.display = 'none';
      document.querySelector('.ticker-wrap').style.display = 'none';
      document.getElementById('articles-grid').innerHTML =
        '<p style="grid-column:span 12;padding:60px 0;color:var(--muted);font-family:var(--font-mono);font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">No content loaded — feeds refresh Monday & Thursday at 9am EST.</p>';
      document.getElementById('perspectives-section').style.display = 'none';
      document.getElementById('saas-section').style.display = 'none';
    }
    renderG2Section();
    setEditionLabel(articlesRes.lastUpdated);
    setFooterDate(articlesRes.lastUpdated);
  } catch (err) {
    console.error('[app] Failed to load articles:', err);
    document.getElementById('articles-grid').innerHTML =
      '<p style="grid-column:span 12;padding:40px;color:var(--muted);font-family:var(--font-mono);font-size:13px;letter-spacing:0.05em;">Content unavailable — check back shortly.</p>';
  }
}

document.addEventListener('DOMContentLoaded', init);
