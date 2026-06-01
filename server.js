require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const path = require('path');
const { refreshAll, getArticles, getFeatured } = require('./aggregator');
const g2Categories = require('./g2-categories');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory essay cache — written by the scheduled task every Mon/Thu
let essayCache = null;

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

// Digest page — clean URL
app.get('/digest', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'digest.html'));
});

// AI-written essay — GET returns cached essay, POST stores a new one (called by scheduled task)
app.get('/api/digest-essay', (req, res) => {
  res.json(essayCache || { essay: null, citations: [], generatedAt: null });
});
app.post('/api/digest-essay', (req, res) => {
  const { essay, citations, wordCount, generatedAt } = req.body;
  if (!essay) return res.status(400).json({ error: 'essay field required' });
  essayCache = { essay, citations: citations || [], wordCount, generatedAt: generatedAt || new Date().toISOString() };
  console.log(`[essay] Cached new digest essay (${wordCount || '?'} words)`);
  res.json({ ok: true });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// ── Scheduling — Monday & Thursday at 9:00 AM EST ────────────────
// Cron: "0 14 * * 1,4" = 09:00 EST (UTC-5) on Mon (1) and Thu (4)
// Note: Render runs on UTC. 14:00 UTC = 9:00 AM EST / 10:00 AM EDT
cron.schedule('0 14 * * 1,4', async () => {
  console.log('[cron] Scheduled content refresh triggered (Mon/Thu 9am EST)');
  await refreshAll();
});

// ── Boot ──────────────────────────────────────────────────────────
(async () => {
  await refreshAll(); // Initial fetch on startup
  app.listen(PORT, () => {
    console.log(`\n🟢  G2 AI News running at http://localhost:${PORT}\n`);
  });
})();
