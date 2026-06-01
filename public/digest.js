/* ═══════════════════════════════════════════════════
   SIG2NAL — Digest Page
   Pulls all articles, groups by category, shows full summaries
   ═══════════════════════════════════════════════════ */

const API = '';

const PAYWALL_SOURCES = new Set([
  'stratechery', 'the pragmatic engineer', 'mit technology review',
  'bloomberg', 'the information', 'wall street journal', 'wsj',
  'financial times', 'ft', 'the atlantic',
]);

const CATEGORY_LABELS = {
  'general':            { label: 'AI News',        cls: 'general' },
  'saas':               { label: 'B2B SaaS',       cls: 'saas' },
  'thought-leadership': { label: 'Perspectives',   cls: 'thought-leadership' },
};

const CATEGORY_ORDER = ['general', 'saas', 'thought-leadership'];

function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function relativeTime(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const hrs = Math.floor(diff / 36e5);
  if (hrs < 1) return 'Just now';
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 7) return `${days}d ago`;
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function readTime(summary) {
  const words = (summary || '').trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.min(Math.round((words / 0.15) / 220), 15))} min read`;
}

function isPaywalled(source) {
  return PAYWALL_SOURCES.has((source || '').toLowerCase().trim());
}

function buildArticleRow(article) {
  const paywallBadge = isPaywalled(article.source)
    ? `<span class="digest-paywall">Paywall</span>` : '';

  const row = document.createElement('div');
  row.className = 'digest-article';
  row.addEventListener('click', () => window.open(article.url, '_blank', 'noopener'));

  row.innerHTML = `
    <div class="digest-article-main">
      <span class="digest-article-source">${safeText(article.source)}</span>
      <h3 class="digest-article-headline">${safeText(article.title)}</h3>
      <p class="digest-article-summary">${safeText(article.summary)}</p>
      <div class="digest-article-tags">${paywallBadge}</div>
    </div>
    <div class="digest-article-aside">
      <div>
        <div class="digest-article-date">${relativeTime(article.publishedAt)}</div>
        <div class="digest-article-read-time">${readTime(article.summary)}</div>
      </div>
      <a class="digest-article-link" href="${article.url}" target="_blank" rel="noopener"
         onclick="event.stopPropagation()">Read original →</a>
    </div>
  `;
  return row;
}

function buildSection(category, articles) {
  const meta = CATEGORY_LABELS[category] || { label: category, cls: 'general' };
  const section = document.createElement('div');
  section.className = 'digest-section';

  section.innerHTML = `
    <div class="digest-section-label">
      <span class="digest-label-chip ${meta.cls}">${meta.label}</span>
      <span>${articles.length} ${articles.length === 1 ? 'story' : 'stories'}</span>
    </div>
    <div class="digest-articles" id="section-${category}"></div>
  `;

  const list = section.querySelector(`#section-${category}`);
  articles.forEach(a => list.appendChild(buildArticleRow(a)));
  return section;
}

async function init() {
  // Set date
  document.getElementById('digest-date').textContent =
    new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });

  try {
    const res = await fetch(`${API}/api/articles?limit=100`);
    const data = await res.json();
    const articles = data.articles || [];

    document.getElementById('digest-article-count').textContent =
      `${articles.length} articles`;

    // Group by category
    const grouped = {};
    CATEGORY_ORDER.forEach(c => { grouped[c] = []; });
    articles.forEach(a => {
      const cat = grouped[a.category] !== undefined ? a.category : 'general';
      if (grouped[cat]) grouped[cat].push(a);
    });

    // Render
    const container = document.getElementById('digest-content');
    container.innerHTML = '';

    CATEGORY_ORDER.forEach(cat => {
      if (grouped[cat] && grouped[cat].length) {
        container.appendChild(buildSection(cat, grouped[cat]));
      }
    });

    document.getElementById('digest-loading')?.remove();

  } catch (err) {
    document.getElementById('digest-loading').textContent =
      'Could not load articles — is the server running?';
  }
}

document.addEventListener('DOMContentLoaded', init);
