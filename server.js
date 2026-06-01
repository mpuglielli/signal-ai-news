require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const path = require('path');
const fs = require('fs');
const { refreshAll, getArticles, getFeatured } = require('./aggregator');
const g2Categories = require('./g2-categories');

const app = express();
const PORT = process.env.PORT || 3000;
const ESSAYS_FILE = path.join(__dirname, 'essays.json');

// ── Essay persistence ─────────────────────────────────────────────
// Load from essays.json on boot; write back on each new submission.
// essays array: newest first.

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
    console.warn('[essays] Could not write essays.json:', err.message);
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

// Latest essay only
app.get('/api/digest-essay', (req, res) => {
  res.json(essays[0] || { essay: null, citations: [], generatedAt: null });
});

// All essays — newest first (for history)
app.get('/api/digest-essays', (req, res) => {
  res.json({ essays, total: essays.length });
});

// Store a new essay (called by scheduled task)
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

  // Prepend newest, avoid exact duplicate IDs
  essays = [entry, ...essays.filter(e => e.id !== entry.id)];
  saveEssays(essays);
  console.log(`[essays] New essay saved (${entry.wordCount} words, ${essays.length} total)`);
  res.json({ ok: true, total: essays.length });
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

// ── Scheduling — Monday & Thursday at 9:00 AM EST ────────────────
cron.schedule('0 14 * * 1,4', async () => {
  console.log('[cron] Scheduled content refresh triggered (Mon/Thu 9am EST)');
  await refreshAll();
});

// ── Boot ──────────────────────────────────────────────────────────
(async () => {
  await refreshAll();
  app.listen(PORT, () => {
    console.log(`\n🟢  G2 AI News running at http://localhost:${PORT}\n`);
  });
})();
