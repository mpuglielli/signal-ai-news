require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const path = require('path');
const { refreshAll, getArticles, getFeatured } = require('./aggregator');
const g2Categories = require('./g2-categories');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── API Routes ────────────────────────────────────────────────────

// All articles, optional ?category=general|saas|thought-leadership&limit=&offset=
app.get('/api/articles', (req, res) => {
  const { category, limit, offset } = req.query;
  res.json(getArticles({ category, limit: parseInt(limit) || 40, offset: parseInt(offset) || 0 }));
});

// Featured articles for hero section
app.get('/api/featured', (req, res) => {
  const n = parseInt(req.query.n) || 5;
  res.json({ articles: getFeatured(n) });
});

// Manual refresh trigger (protect in production)
app.post('/api/refresh', async (req, res) => {
  await refreshAll();
  res.json({ ok: true, message: 'Feeds refreshed' });
});

// G2 AI category intelligence
app.get('/api/g2/categories', (req, res) => {
  res.json({ categories: g2Categories, source: 'G2.com', fetchedAt: new Date().toISOString() });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// ── Scheduling — Monday & Thursday at 7:00 AM CT ─────────────────
// Cron: "0 13 * * 1,4" = 07:00 CT (UTC-6) on Mon (1) and Thu (4)
cron.schedule('0 13 * * 1,4', async () => {
  console.log('[cron] Scheduled refresh triggered');
  await refreshAll();
});

// ── Boot ──────────────────────────────────────────────────────────
(async () => {
  await refreshAll(); // Initial fetch on startup
  app.listen(PORT, () => {
    console.log(`\n🟢  G2 AI News running at http://localhost:${PORT}\n`);
  });
})();
