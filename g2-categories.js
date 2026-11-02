// G2 AI Category Intelligence
// Auto-refreshed by scheduled task — every 2 weeks
// Last fetched: 2026-11-01

const categories = [
  {
    name: 'Agentic AI',
    slug: 'agentic-ai',
    g2_url: 'https://www.g2.com/categories/agentic-ai',
    signal: 'hot',        // hot | growing | emerging | stable
    signal_label: 'Hottest Category',
    description: 'AI systems that autonomously plan, reason, and execute multi-step tasks — the defining shift from passive tools to active digital workers.',
    product_count_label: '35+ products',
    top_products: [
      { name: 'ClickUp',    slug: 'clickup',    stars: 4.6, reviews: 15303, g2_url: 'https://www.g2.com/products/clickup/reviews' },
      { name: 'Paylocity',  slug: 'paylocity',  stars: 4.4, reviews: 6353,  g2_url: 'https://www.g2.com/products/paylocity/reviews' },
      { name: 'HiBob HRIS', slug: 'hibob-hris', stars: 4.5, reviews: 2725,  g2_url: 'https://www.g2.com/products/hibob-hris/reviews' },
      { name: 'Retell AI',  slug: 'retell-ai',  stars: 4.8, reviews: 2642,  g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Generative AI',
    slug: 'generative-ai',
    g2_url: 'https://www.g2.com/categories/generative-ai',
    signal: 'growing',
    signal_label: 'Fastest Growing',
    description: 'Foundation models and applications that generate text, images, video, and code — now powering the core of every B2B SaaS product roadmap.',
    product_count_label: '200+ products',
    top_products: [
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13962, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5010,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'ChatGPT',    slug: 'chatgpt',    stars: 4.6, reviews: 3907,  g2_url: 'https://www.g2.com/products/chatgpt/reviews' },
      { name: 'Synthesia',  slug: 'synthesia',  stars: 4.6, reviews: 2857,  g2_url: 'https://www.g2.com/products/synthesia/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Generative AI Infrastructure',
    slug: 'generative-ai-infrastructure',
    g2_url: 'https://www.g2.com/categories/generative-ai-infrastructure',
    signal: 'emerging',
    signal_label: 'B2B Backbone',
    description: 'The stack powering enterprise AI deployment — model APIs, vector databases, MLOps, and the platforms B2B vendors build on.',
    product_count_label: '480+ products',
    top_products: [
      { name: 'Databricks',      slug: 'databricks',      stars: 4.6, reviews: 1401, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Gemini platform', slug: 'gemini-platform', stars: 4.3, reviews: 753,  g2_url: 'https://www.g2.com/products/gemini-platform/reviews' },
      { name: 'Firecrawl',       slug: 'firecrawl',       stars: 4.6, reviews: 397,  g2_url: 'https://www.g2.com/products/firecrawl/reviews' },
      { name: 'Langchain',       slug: 'langchain',       stars: 4.5, reviews: 153,  g2_url: 'https://www.g2.com/products/langchain/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'AI Writing Assistant',
    slug: 'ai-writing-assistant',
    g2_url: 'https://www.g2.com/categories/ai-writing-assistant',
    signal: 'stable',
    signal_label: 'Market Leader',
    description: 'The first mass-market AI category — now table stakes for B2B SaaS. Differentiation has moved to vertical depth and workflow integration.',
    product_count_label: '1,200+ products',
    top_products: [
      { name: 'Grammarly',  slug: 'grammarly',  stars: 4.7, reviews: 14105, g2_url: 'https://www.g2.com/products/grammarly/reviews' },
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13962, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5010,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'Writesonic', slug: 'writesonic', stars: 4.7, reviews: 2147,  g2_url: 'https://www.g2.com/products/writesonic/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'AI Governance Tools',
    slug: 'ai-governance-tools',
    g2_url: 'https://www.g2.com/categories/ai-governance-tools',
    signal: 'emerging',
    signal_label: 'Watch This Space',
    description: 'Tools for auditing, monitoring, and governing AI systems in enterprise environments — demand accelerating with EU AI Act enforcement.',
    product_count_label: '600+ products',
    top_products: [
      { name: 'JumpCloud',                          slug: 'jumpcloud', stars: 4.5, reviews: 4126, g2_url: 'https://www.g2.com/products/jumpcloud/reviews' },
      { name: 'Drata',                              slug: 'drata',     stars: 4.7, reviews: 1399, g2_url: 'https://www.g2.com/products/drata/reviews' },
      { name: 'Coder',                              slug: 'coder',     stars: 4.2, reviews: 222,  g2_url: 'https://www.g2.com/products/coder/reviews' },
      { name: 'Willow AI Governance Control Plane', slug: 'willow-ai', stars: 4.9, reviews: 99,   g2_url: 'https://www.g2.com/products/willow-ai/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'MLOps Platforms',
    slug: 'mlops-platforms',
    g2_url: 'https://www.g2.com/categories/mlops-platforms',
    signal: 'growing',
    signal_label: 'Enterprise Demand',
    description: 'Operationalizing machine learning at scale — model monitoring, deployment pipelines, and experiment tracking for production AI.',
    product_count_label: '360+ products',
    top_products: [
      { name: 'Databricks',      slug: 'databricks',                stars: 4.6, reviews: 1401, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Snowflake',       slug: 'snowflake',                 stars: 4.6, reviews: 771,  g2_url: 'https://www.g2.com/products/snowflake/reviews' },
      { name: 'Gemini platform', slug: 'gemini-platform',           stars: 4.3, reviews: 753,  g2_url: 'https://www.g2.com/products/gemini-platform/reviews' },
      { name: 'Saturn Cloud',    slug: 'saturn-cloud-saturn-cloud', stars: 4.8, reviews: 320,  g2_url: 'https://www.g2.com/products/saturn-cloud-saturn-cloud/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'AI Content Intelligence Platforms',
    slug: 'ai-content-intelligence-platforms',
    g2_url: 'https://www.g2.com/categories/ai-content-intelligence-platforms',
    signal: 'emerging',
    signal_label: 'New Category',
    description: 'Governed enterprise content platforms that add permission-aware AI retrieval, metadata extraction, and agentic workflows on top of documents and rich media — turning scattered files into trusted business context.',
    product_count_label: '5+ products',
    top_products: [
      { name: 'Google Workspace', slug: 'google-workspace', stars: 4.6, reviews: 48275, g2_url: 'https://www.g2.com/products/google-workspace/reviews' },
      { name: 'Dropbox',          slug: 'dropbox',          stars: 4.4, reviews: 31464, g2_url: 'https://www.g2.com/products/dropbox/reviews' },
      { name: 'Box',              slug: 'box',              stars: 4.2, reviews: 5268,  g2_url: 'https://www.g2.com/products/box/reviews' },
      { name: 'Laserfiche',       slug: 'laserfiche',       stars: 4.7, reviews: 1250,  g2_url: 'https://www.g2.com/products/laserfiche/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
];

// ── What's Changed — diff vs previous refresh ─────────────────────
// Updated by g2-category-refresh scheduled task each cycle
const changelog = {
  refreshDate: '2026-11-01',
  previousRefreshDate: '2026-10-15',
  entries: [
    {
      category: 'AI Content Intelligence Platforms',
      change: 'New category debuts, replacing AI Voice Agent Platform in the watchlist',
      detail: 'G2 launched AI Content Intelligence Platforms for governed content repositories with permission-aware AI retrieval and agentic workflows — Google Workspace (48,275 reviews), Dropbox (31,464) and Box (5,268) lead, giving B2B buyers a shortlist that separates AI-native content governance from basic file sharing.',
      direction: 'new',
    },
    {
      category: 'Generative AI',
      change: 'ChatGPT adds 800+ reviews; top 4 unchanged',
      detail: 'ChatGPT jumped from 3,099 to 3,907 reviews (+808) while Notion (13,962, +87), Simplified (5,010) and Synthesia (2,857) held their slots — a major surge in buyer validation for general-purpose assistants.',
      direction: 'up',
    },
    {
      category: 'Agentic AI',
      change: 'ClickUp extends lead with 340+ new reviews',
      detail: 'ClickUp reached 15,303 reviews (+343) while Paylocity (6,353), HiBob HRIS (2,725) and Retell AI (2,642) held positions 2–4 — work-management platforms keep widening their review-volume lead for Agentic AI buyers.',
      direction: 'up',
    },
    {
      category: 'Generative AI Infrastructure',
      change: 'Firecrawl enters top 4; Botpress drops out',
      detail: 'Firecrawl (397 reviews, 4.6★) debuts at #3 behind Databricks (1,401) and Gemini platform (753, formerly Gemini Enterprise Agent Platform), displacing Botpress (514 last cycle) — web-data infrastructure for AI agents is gaining buyer attention over chatbot builders.',
      direction: 'up',
    },
    {
      category: 'AI Writing Assistant',
      change: 'Notion adds 87 reviews, narrowing gap to Grammarly',
      detail: 'Notion (13,962, +87) closed to within 143 reviews of leader Grammarly (14,105, +25), with Simplified (5,010) and Writesonic (2,147) unchanged — a signal that workspace suites are competing directly with dedicated writing tools.',
      direction: 'up',
    },
  ],
};

module.exports = { categories, changelog };
