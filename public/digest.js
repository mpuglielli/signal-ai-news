/* ═══════════════════════════════════════════════════
   SIG2NAL — Digest / Essay Page
   Fetches AI-written essay from /api/digest-essay
   and renders it with inline citations + footnotes
   ═══════════════════════════════════════════════════ */

const API = '';

function relativeDate(isoStr) {
  if (!isoStr) return '';
  return new Date(isoStr).toLocaleDateString('en-US', {
    weekday: 'long', month: 'long', day: 'numeric', year: 'numeric'
  });
}

// Convert [N] markers in essay text to superscript cite links
function parseCitations(text) {
  return text.replace(/\[(\d+)\]/g, (_, n) =>
    `<a class="cite" href="#fn${n}" id="ref${n}">[${n}]</a>`
  );
}

// Split essay text into paragraphs and wrap in <p> tags
function renderParagraphs(text) {
  return text
    .split(/\n\n+/)
    .filter(p => p.trim())
    .map(p => `<p>${parseCitations(p.trim())}</p>`)
    .join('');
}

function renderFootnotes(citations) {
  return citations.map(c => `
    <div class="footnote-item" id="fn${c.num}">
      <span class="footnote-num">[${c.num}]</span>
      <span>
        <a class="footnote-link" href="${c.url}" target="_blank" rel="noopener">${c.title}</a>
        <span class="footnote-source">— ${c.source}</span>
      </span>
    </div>
  `).join('');
}

// ── History rendering ──────────────────────────────────────────────

function historyEssayHtml(entry) {
  const body = entry.essay.split(/\n\n+/).filter(p => p.trim()).map(p =>
    `<p>${parseCitations(p.trim())}</p>`
  ).join('');

  const fns = (entry.citations || []).map(c => `
    <div class="history-fn-item">
      <span class="history-fn-num">[${c.num}]</span>
      <span>
        <a class="history-fn-link" href="${c.url}" target="_blank" rel="noopener">${c.title}</a>
        <span class="history-fn-src">— ${c.source}</span>
      </span>
    </div>
  `).join('');

  return `
    <div class="history-essay-body">${body}</div>
    ${fns ? `<div class="history-footnotes"><div class="history-footnotes-label">Sources</div>${fns}</div>` : ''}
  `;
}

function renderHistory(allEssays, currentId) {
  const past = allEssays.filter(e => e.id !== currentId);
  if (!past.length) return;

  const historyEl = document.getElementById('essay-history');
  const listEl = document.getElementById('essay-history-list');
  historyEl.style.display = '';

  past.forEach(entry => {
    const d = new Date(entry.generatedAt);
    const dateStr = d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const dayStr = d.toLocaleDateString('en-US', { weekday: 'long' });
    const firstLine = entry.essay.split(/\n\n/)[0].replace(/\[\d+\]/g, '').trim();
    const preview = firstLine.length > 120 ? firstLine.slice(0, 120) + '…' : firstLine;

    const item = document.createElement('div');
    item.className = 'history-item';
    item.innerHTML = `
      <div class="history-date">
        ${dateStr}
        <span class="history-date-sub">${dayStr}</span>
      </div>
      <div class="history-excerpt">${safeText(preview)}</div>
      <div class="history-meta">${entry.wordCount || '?'} words<br>${(entry.citations || []).length} sources</div>
      <div class="history-essay-expand" id="expand-${entry.id}">
        ${historyEssayHtml(entry)}
      </div>
    `;

    // Toggle expand/collapse on click
    item.addEventListener('click', (e) => {
      if (e.target.closest('a')) return; // don't intercept link clicks
      const expand = item.querySelector('.history-essay-expand');
      const isOpen = expand.classList.contains('open');
      // Close all others
      document.querySelectorAll('.history-essay-expand.open').forEach(el => el.classList.remove('open'));
      document.querySelectorAll('.history-item.active').forEach(el => el.classList.remove('active'));
      if (!isOpen) {
        expand.classList.add('open');
        item.classList.add('active');
        item.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });

    listEl.appendChild(item);
  });
}

// ── Main init ─────────────────────────────────────────────────────

async function init() {
  document.getElementById('essay-date').textContent =
    new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  try {
    // Fetch latest essay + full history in parallel
    const [latestRes, historyRes] = await Promise.all([
      fetch(`${API}/api/digest-essay`).then(r => r.json()),
      fetch(`${API}/api/digest-essays`).then(r => r.json()),
    ]);

    const data = latestRes;
    const allEssays = historyRes.essays || [];

    if (!data.essay) {
      return; // placeholder shown in HTML
    }

    // Render current essay
    document.getElementById('essay-date').textContent = relativeDate(data.generatedAt);
    if (data.wordCount) {
      document.getElementById('essay-word-count').textContent = `${data.wordCount} words`;
    }

    const body = document.getElementById('essay-body');
    body.innerHTML = renderParagraphs(data.essay);

    if (data.citations && data.citations.length) {
      document.getElementById('footnote-list').innerHTML = renderFootnotes(data.citations);
      document.getElementById('essay-footnotes').style.display = '';
    }

    // Citation click → smooth scroll to footnote
    document.querySelectorAll('.cite').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('href').slice(1));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    // Render history (all essays except current)
    renderHistory(allEssays, data.id || (data.generatedAt || '').slice(0, 10));

  } catch (err) {
    console.error('[digest]', err);
    document.getElementById('essay-placeholder').innerHTML = `
      <div class="essay-placeholder-title">Could not load essay.</div>
      <div class="essay-placeholder-text">Check that the server is running.</div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', init);
