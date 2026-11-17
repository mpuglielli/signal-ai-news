// G2 AI Category Intelligence
// Auto-refreshed by scheduled task — every 2 weeks
// Last fetched: 2026-11-17

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
      { name: 'ClickUp',    slug: 'clickup',    stars: 4.6, reviews: 15732, g2_url: 'https://www.g2.com/products/clickup/reviews' },
      { name: 'Paylocity',  slug: 'paylocity',  stars: 4.4, reviews: 6394,  g2_url: 'https://www.g2.com/products/paylocity/reviews' },
      { name: 'HiBob',      slug: 'hibob-hris', stars: 4.5, reviews: 2753,  g2_url: 'https://www.g2.com/products/hibob-hris/reviews' },
      { name: 'Retell AI',  slug: 'retell-ai',  stars: 4.8, reviews: 2654,  g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
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
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13987, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'ChatGPT',    slug: 'chatgpt',    stars: 4.6, reviews: 5158,  g2_url: 'https://www.g2.com/products/chatgpt/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5011,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'Synthesia',  slug: 'synthesia',  stars: 4.6, reviews: 2862,  g2_url: 'https://www.g2.com/products/synthesia/reviews' },
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
      { name: 'Firecrawl',       slug: 'firecrawl',       stars: 4.7, reviews: 1460, g2_url: 'https://www.g2.com/products/firecrawl/reviews' },
      { name: 'Databricks',      slug: 'databricks',      stars: 4.6, reviews: 1419, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Gemini platform', slug: 'gemini-platform', stars: 4.3, reviews: 904,  g2_url: 'https://www.g2.com/products/gemini-platform/reviews' },
      { name: 'LangChain',       slug: 'langchain',       stars: 4.5, reviews: 154,  g2_url: 'https://www.g2.com/products/langchain/reviews' },
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
      { name: 'Grammarly',  slug: 'grammarly',  stars: 4.7, reviews: 14123, g2_url: 'https://www.g2.com/products/grammarly/reviews' },
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13987, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5011,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'Writesonic', slug: 'writesonic', stars: 4.7, reviews: 2148,  g2_url: 'https://www.g2.com/products/writesonic/reviews' },
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
      { name: 'JumpCloud',                          slug: 'jumpcloud', stars: 4.5, reviews: 4152, g2_url: 'https://www.g2.com/products/jumpcloud/reviews' },
      { name: 'Drata',                              slug: 'drata',     stars: 4.7, reviews: 1400, g2_url: 'https://www.g2.com/products/drata/reviews' },
      { name: 'Willow AI Governance Control Plane', slug: 'willow-ai', stars: 4.9, reviews: 281,  g2_url: 'https://www.g2.com/products/willow-ai/reviews' },
      { name: 'Coder',                              slug: 'coder',     stars: 4.2, reviews: 240,  g2_url: 'https://www.g2.com/products/coder/reviews' },
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
      { name: 'Databricks',      slug: 'databricks',                stars: 4.6, reviews: 1419, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Gemini platform', slug: 'gemini-platform',           stars: 4.3, reviews: 904,  g2_url: 'https://www.g2.com/products/gemini-platform/reviews' },
      { name: 'Snowflake',       slug: 'snowflake',                 stars: 4.6, reviews: 781,  g2_url: 'https://www.g2.com/products/snowflake/reviews' },
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
      { name: 'Google Workspace', slug: 'google-workspace', stars: 4.6, reviews: 48305, g2_url: 'https://www.g2.com/products/google-workspace/reviews' },
      { name: 'Dropbox',          slug: 'dropbox',          stars: 4.4, reviews: 31482, g2_url: 'https://www.g2.com/products/dropbox/reviews' },
      { name: 'Box',              slug: 'box',              stars: 4.2, reviews: 5379,  g2_url: 'https://www.g2.com/products/box/reviews' },
      { name: 'Laserfiche',       slug: 'laserfiche',       stars: 4.7, reviews: 1250,  g2_url: 'https://www.g2.com/products/laserfiche/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
];

// ── What's Changed — diff vs previous refresh ─────────────────────
// Updated by g2-category-refresh scheduled task each cycle
const changelog = {
  refreshDate: '2026-11-17',
  previousRefreshDate: '2026-11-01',
  entries: [
    {
      category: 'Generative AI Infrastructure',
      change: 'Firecrawl surges to #1 with 1,000+ new reviews',
      detail: 'Firecrawl jumped from 397 to 1,460 reviews (+1,063), overtaking Databricks (1,419) and Gemini platform (904, +151) — web-data infrastructure for AI agents is now the most-reviewed layer of the GenAI stack for B2B builders.',
      direction: 'up',
    },
    {
      category: 'Generative AI',
      change: 'ChatGPT passes Simplified to take #2',
      detail: 'ChatGPT added 1,251 reviews (3,907 to 5,158) and moved ahead of Simplified (5,011) behind Notion (13,987), with Synthesia (2,862) holding #4 — general-purpose assistants are now outpacing marketing-suite AI in buyer validation.',
      direction: 'up',
    },
    {
      category: 'Agentic AI',
      change: 'ClickUp adds 429 reviews, widening its lead',
      detail: 'ClickUp reached 15,732 reviews (+429) while Paylocity (6,394), HiBob (2,753) and Retell AI (2,654) held slots 2–4 — work-management platforms keep extending their review-volume lead among Agentic AI buyers.',
      direction: 'up',
    },
    {
      category: 'AI Governance Tools',
      change: 'Willow AI overtakes Coder for #3',
      detail: 'Willow AI Governance Control Plane (281 reviews, 4.9★) nearly tripled from 99 reviews (+182), passing Coder (240) behind JumpCloud (4,152) and Drata (1,400) — purpose-built agent governance is gaining traction against dev-environment and identity incumbents.',
      direction: 'up',
    },
    {
      category: 'MLOps Platforms',
      change: 'Gemini platform climbs past Snowflake to #2',
      detail: 'Gemini platform gained 151 reviews (753 to 904) and moved ahead of Snowflake (781) behind Databricks (1,419), with Saturn Cloud (320) steady at #4 — hyperscaler agent platforms are reshaping the MLOps shortlist for enterprise buyers.',
      direction: 'up',
    },
    {
      category: 'AI Content Intelligence Platforms',
      change: 'Box adds 111 reviews, closing in on 5,400',
      detail: 'Box reached 5,379 reviews (+111) while Google Workspace (48,305) and Dropbox (31,482) held the top two slots and Laserfiche (1,250) stayed at #4 — AI-native content management is picking up buyer validation in this new category.',
      direction: 'up',
    },
  ],
};

module.exports = { categories, changelog };
