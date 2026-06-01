require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const { refreshAll, getArticles, getFeatured } = require('./aggregator');
const g2Categories = require('./g2-categories');

const app = express();
const ESSAYS_FILE = path.join(__dirname, 'essays.json');

// ── Essay persistence ─────────────────────────────────────────────
function loadEssays() {
  try {
    if (fs.existsSync(ESSAYS_FILE)) {
      const raw = fs.readFileSync(ESSAYS_FILE, 'utf8');
      const data = JSON.parse(raw);
      console.log(`[essays] Loaded ${data.length} essay(s) from disk.`);
      return data;
    }
  } catch (err) {
    console.warn('[essays] Could not load essays.json:', err.message);
  }
  return [];
}

function saveEssays(essays) {
  try {
    fs.writeFileSync(ESSAYS_FILE, JSON.stringify(essays, null, 2), 'utf8');
  } catch (err) {
    // On Vercel, filesystem is read-only except /tmp — essays are committed to git by scheduled task
    console.warn('[essays] Could not write essays.json (ok on Vercel — scheduled task commits to git)');
  }
}

let essays = loadEssays();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── API Routes ────────────────────────────────────────────────────

app.get('/api/articles', (req, res) => {
  const { category, limit, offset } = req.query;
  res.json(getArticles({ category, limit: parseInt(limit) || 40, offset: parseInt(offset) || 0 }));
});

app.get('/api/featured', (req, res) => {
  const n = parseInt(req.query.n) || 5;
  res.json({ articles: getFeatured(n) });
});

app.post('/api/refresh', async (req, res) => {
  await refreshAll();
  res.json({ ok: true, message: 'Feeds refreshed' });
});

app.get('/api/g2/categories', (req, res) => {
  res.json({ categories: g2Categories, source: 'G2.com', fetchedAt: new Date().toISOString() });
});

app.get('/digest', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'digest.html'));
});

app.get('/api/digest-essay', (req, res) => {
  res.json(essays[0] || { essay: null, citations: [], generatedAt: null });
});

app.get('/api/digest-essays', (req, res) => {
  res.json({ essays, total: essays.length });
});

app.post('/api/digest-essay', (req, res) => {
  const { essay, citations, wordCount, generatedAt } = req.body;
  if (!essay) return res.status(400).json({ error: 'essay field required' });
  const entry = {
    id: (generatedAt || new Date().toISOString()).slice(0, 10),
    generatedAt: generatedAt || new Date().toISOString(),
    wordCount: wordCount || essay.split(/\s+/).length,
    essay,
    citations: citations || [],
  };
  essays = [entry, ...essays.filter(e => e.id !== entry.id)];
  saveEssays(essays);
  console.log(`[essays] New essay saved (${entry.wordCount} words, ${essays.length} total)`);
  res.json({ ok: true, total: essays.length });
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// ── Boot: fetch articles on startup ──────────────────────────────
// On Vercel, this runs once per cold start.
// On Render/local, it runs once on server start.
// Scheduling is handled externally by the Cowork scheduled task (Mon/Thu 9am EST).
refreshAll().catch(err => console.warn('[startup] refreshAll failed:', err.message));

// ── Local dev: listen directly. Vercel: export the app. ──────────
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`\n🟢  SIG2NAL running at http://localhost:${PORT}\n`);
  });
}

module.exports = app;
