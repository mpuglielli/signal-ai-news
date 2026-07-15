// G2 AI Category Intelligence
// Auto-refreshed by scheduled task — every 2 weeks
// Last fetched: 2026-07-15

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
      { name: 'ClickUp',               slug: 'clickup',               stars: 4.6, reviews: 13100, g2_url: 'https://www.g2.com/products/clickup/reviews' },
      { name: 'Rippling',              slug: 'rippling',              stars: 4.8, reviews: 13067, g2_url: 'https://www.g2.com/products/rippling/reviews' },
      { name: 'Retell AI',             slug: 'retell-ai',             stars: 4.8, reviews: 2640,  g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
      { name: 'Salesforce Agentforce', slug: 'salesforce-agentforce', stars: 4.3, reviews: 1200,  g2_url: 'https://www.g2.com/products/salesforce-agentforce/reviews' },
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
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 12147, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5010,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'Synthesia',  slug: 'synthesia',  stars: 4.6, reviews: 2769,  g2_url: 'https://www.g2.com/products/synthesia/reviews' },
      { name: 'ChatGPT',    slug: 'chatgpt',    stars: 4.6, reviews: 2729,  g2_url: 'https://www.g2.com/products/chatgpt/reviews' },
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
    product_count_label: '50+ products',
    top_products: [
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1346, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 660,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'Botpress',                         slug: 'botpress',                         stars: 4.5, reviews: 504,  g2_url: 'https://www.g2.com/products/botpress/reviews' },
      { name: 'Saturn Cloud',                     slug: 'saturn-cloud-saturn-cloud',        stars: 4.8, reviews: 320,  g2_url: 'https://www.g2.com/products/saturn-cloud-saturn-cloud/reviews' },
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
    product_count_label: '150+ products',
    top_products: [
      { name: 'Grammarly',  slug: 'grammarly',  stars: 4.7, reviews: 14000, g2_url: 'https://www.g2.com/products/grammarly/reviews' },
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 12147, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5010,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'Writesonic', slug: 'writesonic', stars: 4.7, reviews: 2116,  g2_url: 'https://www.g2.com/products/writesonic/reviews' },
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
    product_count_label: '25+ products',
    top_products: [
      { name: 'JumpCloud',  slug: 'jumpcloud',  stars: 4.5, reviews: 4019, g2_url: 'https://www.g2.com/products/jumpcloud/reviews' },
      { name: 'Drata',      slug: 'drata',      stars: 4.7, reviews: 1331, g2_url: 'https://www.g2.com/products/drata/reviews' },
      { name: 'Coder',      slug: 'coder',      stars: 4.3, reviews: 200,  g2_url: 'https://www.g2.com/products/coder/reviews' },
      { name: 'Cortex Cloud', slug: 'cortex-cloud', stars: 4.1, reviews: 124, g2_url: 'https://www.g2.com/products/cortex-cloud/reviews' },
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
    product_count_label: '60+ products',
    top_products: [
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1346, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Snowflake',                        slug: 'snowflake',                        stars: 4.5, reviews: 756,  g2_url: 'https://www.g2.com/products/snowflake/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 660,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'Saturn Cloud',                     slug: 'saturn-cloud-saturn-cloud',        stars: 4.8, reviews: 320,  g2_url: 'https://www.g2.com/products/saturn-cloud-saturn-cloud/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'AI Marketing Agents',
    slug: 'ai-marketing-agents',
    g2_url: 'https://www.g2.com/categories/ai-marketing-agents',
    signal: 'emerging',
    signal_label: 'New Category',
    description: 'Autonomous AI agents that plan, execute, and optimize marketing campaigns across email, SMS, and digital channels — reducing campaign ops to a goal and a click.',
    product_count_label: '5+ products',
    top_products: [
      { name: 'HubSpot Marketing Hub', slug: 'hubspot-marketing-hub', stars: 4.4, reviews: 14855, g2_url: 'https://www.g2.com/products/hubspot-marketing-hub/reviews' },
      { name: 'ActiveCampaign',        slug: 'activecampaign',        stars: 4.4, reviews: 14709, g2_url: 'https://www.g2.com/products/activecampaign/reviews' },
      { name: 'VEED',                  slug: 'veed',                  stars: 4.6, reviews: 2147,  g2_url: 'https://www.g2.com/products/veed/reviews' },
      { name: 'Attentive',             slug: 'attentive',             stars: 4.5, reviews: 1456,  g2_url: 'https://www.g2.com/products/attentive/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
];

// ── What's Changed — diff vs previous refresh ─────────────────────
// Updated by g2-category-refresh scheduled task each cycle
const changelog = {
  refreshDate: '2026-07-15',
  previousRefreshDate: '2026-06-15',
  entries: [
    {
      category: 'Agentic AI',
      change: 'New entrant in top 4',
      detail: 'Rippling (13,067 reviews) debuted at #2, displacing HubSpot Service Hub — Rippling\'s expansion into agentic AI for HR/IT workflows signals enterprise work automation is broadening beyond pure-play agents.',
      direction: 'up',
    },
    {
      category: 'Generative AI Infrastructure',
      change: 'Major review surge',
      detail: 'Databricks exploded from 805 to 1,346 reviews (+541) — by far the biggest volume gain this cycle, cementing it as the default enterprise AI infrastructure platform.',
      direction: 'up',
    },
    {
      category: 'AI Governance Tools',
      change: 'New entrant in top 4',
      detail: 'Drata (1,331 reviews) debuted at #2, displacing Securiti (91) — compliance automation platform Drata is absorbing AI governance mindshare as enterprises treat trust management and audit readiness as a core AI governance requirement.',
      direction: 'up',
    },
    {
      category: 'AI Marketing Agents',
      change: 'Major reshuffle — Agentforce Marketing out',
      detail: 'Agentforce Marketing dropped from the category entirely; VEED (2,147 reviews) enters at #3 — video AI is claiming a seat in marketing agent stacks as autonomous video-first workflows go mainstream.',
      direction: 'up',
    },
    {
      category: 'Agentic AI',
      change: 'Review volume gains',
      detail: 'ClickUp gained +470 reviews (13,100 total) and Retell AI gained +145 (2,640 total) — consistent momentum in work and voice agent categories heading into H2 2026.',
      direction: 'up',
    },
  ],
};

module.exports = { categories, changelog };
