/* ═══════════════════════════════════════════════════
   SIGNAL — Frontend App
   ═══════════════════════════════════════════════════ */

const API = ''; // same-origin; change to http://localhost:3000 for dev

let allArticles = [];
let offset = 0;
const PAGE_SIZE = 16;
let currentCategory = 'all';

// ── Utilities ──────────────────────────────────────────────────────

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
  // Deterministic issue number from week count since Jan 2025, Mon+Thu = 2/week
  const epoch = new Date('2025-01-06'); // first Monday
  const now = new Date();
  const days = Math.floor((now - epoch) / 86400000);
  const weeks = Math.floor(days / 7);
  const dayOfWeek = now.getDay(); // 0=Sun,1=Mon,...
  const issueSuffix = (dayOfWeek >= 4) ? 1 : 0; // Thu onwards = second issue
  return String(weeks * 2 + issueSuffix + 1).padStart(3, '0');
}

function cardType(index, article) {
  if (index % 7 === 0) return 'type-text';   // dark typographic
  if (index % 11 === 5) return 'type-accent'; // red accent
  if (article.image) return 'type-image';
  return 'type-text';
}

function safeText(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// ── Card builder ───────────────────────────────────────────────────

function buildCard(article, index, overrideType = null) {
  const type = overrideType || cardType(index, article);
  const card = document.createElement('article');
  card.className = `article-card ${type}`;
  card.addEventListener('click', () => window.open(article.url, '_blank', 'noopener'));

  const imageHtml = (type === 'type-image' && article.image)
    ? `<div class="card-image" style="background-image:url('${article.image}')"></div>`
    : '';

  const bodyOpen  = (type === 'type-image') ? `<div class="card-body">` : '';
  const bodyClose = (type === 'type-image') ? `</div>` : '';

  card.innerHTML = `
    ${imageHtml}
    ${bodyOpen}
      <div class="card-source-row">
        <span class="article-source">${safeText(article.source)}</span>
        <span class="card-tag">${safeText(article.category)}</span>
      </div>
      <h3 class="card-headline">${safeText(article.title)}</h3>
      <p class="card-summary">${safeText(article.summary)}</p>
      <div class="card-footer">
        <span class="card-date">${relativeTime(article.publishedAt)}</span>
        <span class="card-read">Read →</span>
      </div>
    ${bodyClose}
  `;
  return card;
}

// ── Cover / Hero ───────────────────────────────────────────────────

function renderCover(featured) {
  if (!featured.length) return;

  const hero = featured[0];
  const rest = featured.slice(1, 5);

  // Feature
  document.getElementById('cover-source').textContent = hero.source;
  document.getElementById('cover-headline').textContent = hero.title;
  document.getElementById('cover-deck').textContent = hero.summary;
  document.getElementById('cover-link').href = hero.url;

  const imgEl = document.getElementById('cover-image');
  if (hero.image) {
    imgEl.style.backgroundImage = `url('${hero.image}')`;
  } else {
    imgEl.style.background = 'var(--gray-800)';
  }

  // Secondary cards
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

  // Stamp
  const num = issueNumber();
  document.getElementById('stamp-issue').textContent = `№ ${num}`;
  document.getElementById('stamp-date').textContent =
    new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
}

// ── Masthead edition label ─────────────────────────────────────────

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
    `<span class="ticker-item">${safeText(a.title)}</span><span class="ticker-label"> · SIGNAL · </span>`
  ).join('');
  // Duplicate for seamless loop
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

// ── Perspectives section ──────────────────────────────────────────

function renderPerspectives(articles) {
  const row = document.getElementById('perspectives-row');
  row.innerHTML = '';
  const items = articles
    .filter((a) => a.category === 'thought-leadership')
    .slice(0, 3);

  if (!items.length) {
    document.querySelector('.perspectives-section').style.display = 'none';
    return;
  }

  items.forEach((a, i) => {
    const card = document.createElement('article');
    card.className = 'perspective-card';
    card.innerHTML = `
      <span class="article-source">${safeText(a.source)}</span>
      <h3 class="card-headline">${safeText(a.title)}</h3>
      <p class="card-summary">${safeText(a.summary)}</p>
      <div class="card-footer">
        <span class="card-date">${relativeTime(a.publishedAt)}</span>
        <span class="card-read">Read →</span>
      </div>
    `;
    card.addEventListener('click', () => window.open(a.url, '_blank', 'noopener'));
    row.appendChild(card);
  });
}

// ── B2B SaaS magazine layout ──────────────────────────────────────

function renderSaas(articles) {
  const grid = document.getElementById('saas-grid');
  grid.innerHTML = '';

  const items = articles
    .filter((a) => a.category === 'saas')
    .slice(0, 6);

  if (!items.length) {
    document.querySelector('.saas-section').style.display = 'none';
    return;
  }

  items.forEach((a, i) => {
    const type = i === 0 ? 'type-image' : (i === 2 ? 'type-text' : null);
    const card = buildCard(a, i, type);
    grid.appendChild(card);
  });
}

// ── Filter buttons ────────────────────────────────────────────────

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

  // Nav links
  document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const cat = link.dataset.category;
      document.querySelectorAll('.nav-link').forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      const matchingBtn = document.querySelector(`.filter-btn[data-cat="${cat}"]`);
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
  if (lastUpdated) {
    el.textContent = `Last updated: ${new Date(lastUpdated).toLocaleString()}`;
  }
}

// ── Main init ─────────────────────────────────────────────────────

async function init() {
  setupFilters();
  setupLoadMore();

  try {
    const [featuredRes, articlesRes] = await Promise.all([
      fetch(`${API}/api/featured?n=5`).then((r) => r.json()),
      fetch(`${API}/api/articles?limit=80`).then((r) => r.json()),
    ]);

    allArticles = articlesRes.articles || [];

    renderCover(featuredRes.articles || []);
    buildTicker(allArticles);
    renderGrid(allArticles.slice(0, PAGE_SIZE));
    offset = PAGE_SIZE;
    renderPerspectives(allArticles);
    renderSaas(allArticles);
    setEditionLabel(articlesRes.lastUpdated);
    setFooterDate(articlesRes.lastUpdated);

  } catch (err) {
    console.error('[app] Failed to load articles:', err);
    document.getElementById('articles-grid').innerHTML =
      '<p style="grid-column:span 12;padding:40px;color:var(--gray-400);font-family:var(--font-mono);font-size:13px;">Could not connect to the content server. Make sure the server is running: <code>node server.js</code></p>';
  }
}

document.addEventListener('DOMContentLoaded', init);
