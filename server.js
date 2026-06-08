require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const fetch = require('node-fetch');
const { refreshAll, getArticles, getFeatured } = require('./aggregator');
const g2Categories = require('./g2-categories');

const app = express();
const ESSAYS_FILE = path.join(__dirname, 'essays.json');

// ── GitHub REST API commit helper ─────────────────────────────────
// Commits a single file to the repo — no git CLI needed.
async function commitToGitHub(filePath, content, message) {
  const token = process.env.GITHUB_TOKEN;
  const repo  = process.env.GITHUB_REPO; // e.g. "mpuglielli/signal-ai-news"
  if (!token || !repo) {
    console.warn('[github] GITHUB_TOKEN or GITHUB_REPO not set — skipping commit');
    return;
  }
  const apiBase = `https://api.github.com/repos/${repo}/contents/${filePath}`;
  const headers = {
    Authorization: `token ${token}`,
    'Content-Type': 'application/json',
    'User-Agent': 'G2-Signal-Bot',
  };

  // Get current SHA (needed for update)
  let sha;
  try {
    const r = await fetch(apiBase, { headers });
    if (r.ok) {
      const d = await r.json();
      sha = d.sha;
    }
  } catch (_) {}

  const body = { message, content: Buffer.from(content).toString('base64') };
  if (sha) body.sha = sha;

  const resp = await fetch(apiBase, { method: 'PUT', headers, body: JSON.stringify(body) });
  if (resp.ok) {
    console.log(`[github] Committed ${filePath}`);
  } else {
    const err = await resp.text();
    console.warn(`[github] Commit failed for ${filePath}: ${err.slice(0, 200)}`);
  }
}

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

// Internal helper: refresh feeds + commit articles-cache.json to GitHub
async function doRefresh() {
  const articles = await refreshAll();
  // Commit articles-cache.json to GitHub so Vercel never cold-starts blank
  const cacheContent = JSON.stringify({ articles, lastUpdated: new Date().toISOString() }, null, 2);
  await commitToGitHub('articles-cache.json', cacheContent, `Article cache refresh — ${new Date().toISOString().slice(0,10)}`);
  return articles;
}

// POST keeps backward compat; GET enables web_fetch from the scheduled task
app.post('/api/refresh', async (req, res) => {
  const articles = await doRefresh();
  res.json({ ok: true, message: 'Feeds refreshed', count: articles.length });
});

app.get('/api/refresh', async (req, res) => {
  const articles = await doRefresh();
  res.json({ ok: true, message: 'Feeds refreshed', count: articles.length });
});

// ── Auto-digest: generate essay server-side via Claude API ────────
// Requires ANTHROPIC_API_KEY in environment (add to Vercel project settings).
// Triggered by GET /api/auto-digest — no shell POST needed from scheduled task.
app.get('/api/auto-digest', async (req, res) => {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(501).json({ error: 'ANTHROPIC_API_KEY not configured in Vercel env' });
  }

  const { articles } = getArticles({ limit: 80 });
  if (!articles.length) {
    return res.status(503).json({ error: 'No articles loaded — run /api/refresh first' });
  }

  // Build article list for the prompt
  const articleList = articles
    .slice(0, 40)
    .map((a, i) => `[${i+1}] ${a.title} (${a.source}) — ${a.url}`)
    .join('\n');

  const prompt = `You are writing the SIG2NAL digest for B2B SaaS professionals. Based on these recent AI/tech articles, write a 750-word maximum essay synthesizing the most important developments. Format: plain paragraphs separated by double newlines. Inline citations [N]. 3–6 paragraphs, flowing prose, no headers or bullets. Focus on practical implications for enterprise software buyers and sellers.

After the essay, output a JSON block on its own line like:
CITATIONS_JSON:[{"num":1,"title":"...","source":"...","url":"..."}]

Articles:
${articleList}`;

  try {
    const claudeResp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 1500,
        messages: [{ role: 'user', content: prompt }],
      }),
    });

    if (!claudeResp.ok) {
      const err = await claudeResp.text();
      return res.status(502).json({ error: 'Claude API error', detail: err.slice(0, 300) });
    }

    const claudeData = await claudeResp.json();
    const text = claudeData.content?.[0]?.text || '';

    // Split essay and citations
    const citationsMatch = text.match(/CITATIONS_JSON:(\[[\s\S]*\])/);
    const citationsRaw = citationsMatch ? citationsMatch[1] : '[]';
    const essay = text.replace(/CITATIONS_JSON:[\s\S]*$/, '').trim();
    let citations = [];
    try { citations = JSON.parse(citationsRaw); } catch (_) {}

    const entry = {
      id: new Date().toISOString().slice(0, 10),
      generatedAt: new Date().toISOString(),
      wordCount: essay.split(/\s+/).length,
      essay,
      citations,
    };

    // Save to in-memory essays array
    essays = [entry, ...essays.filter(e => e.id !== entry.id)];
    saveEssays(essays);

    // Commit essays.json to GitHub
    await commitToGitHub('essays.json', JSON.stringify(essays, null, 2),
      `Essay refresh — ${entry.id}`);

    console.log(`[auto-digest] Essay generated (${entry.wordCount} words) and committed.`);
    res.json({ ok: true, wordCount: entry.wordCount, essay: entry.essay, citations: entry.citations });
  } catch (err) {
    console.error('[auto-digest] Error:', err.message);
    res.status(500).json({ error: err.message });
  }
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
  // Auto-commit essays.json to GitHub so it survives cold starts
  commitToGitHub('essays.json', JSON.stringify(essays, null, 2),
    `Essay refresh — ${entry.id}`).catch(err => console.warn('[essays] GitHub commit failed:', err.message));
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
