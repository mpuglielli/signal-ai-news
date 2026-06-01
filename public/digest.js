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

async function init() {
  document.getElementById('essay-date').textContent =
    new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  try {
    const res = await fetch(`${API}/api/digest-essay`);
    const data = await res.json();

    if (!data.essay) {
      // No essay yet — placeholder already shown in HTML
      return;
    }

    // Update date from when essay was actually generated
    document.getElementById('essay-date').textContent = relativeDate(data.generatedAt);

    if (data.wordCount) {
      document.getElementById('essay-word-count').textContent = `${data.wordCount} words`;
    }

    // Render essay body
    const body = document.getElementById('essay-body');
    body.innerHTML = renderParagraphs(data.essay);

    // Render footnotes
    if (data.citations && data.citations.length) {
      const footnotesEl = document.getElementById('essay-footnotes');
      document.getElementById('footnote-list').innerHTML = renderFootnotes(data.citations);
      footnotesEl.style.display = '';
    }

    // Smooth scroll for citation clicks
    document.querySelectorAll('.cite').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.getElementById(link.getAttribute('href').slice(1));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

  } catch (err) {
    console.error('[digest]', err);
    document.getElementById('essay-placeholder').innerHTML = `
      <div class="essay-placeholder-title">Could not load essay.</div>
      <div class="essay-placeholder-text">Check that the server is running.</div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', init);
