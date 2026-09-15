// G2 AI Category Intelligence
// Auto-refreshed by scheduled task — every 2 weeks
// Last fetched: 2026-09-15

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
      { name: 'BambooHR',    slug: 'bamboohr',    stars: 4.4, reviews: 6719, g2_url: 'https://www.g2.com/products/bamboohr/reviews' },
      { name: 'Paylocity',   slug: 'paylocity',   stars: 4.4, reviews: 6251, g2_url: 'https://www.g2.com/products/paylocity/reviews' },
      { name: 'Retell AI',   slug: 'retell-ai',   stars: 4.8, reviews: 2638, g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
      { name: 'HiBob HRIS',  slug: 'hibob-hris',  stars: 4.5, reviews: 2636, g2_url: 'https://www.g2.com/products/hibob-hris/reviews' },
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
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13839, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5009,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'ChatGPT',    slug: 'chatgpt',    stars: 4.6, reviews: 2996,  g2_url: 'https://www.g2.com/products/chatgpt/reviews' },
      { name: 'Synthesia',  slug: 'synthesia',  stars: 4.6, reviews: 2806,  g2_url: 'https://www.g2.com/products/synthesia/reviews' },
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
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1362, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Fullstory',                        slug: 'fullstory',                        stars: 4.5, reviews: 1052, g2_url: 'https://www.g2.com/products/fullstory/reviews' },
      { name: 'Workato',                          slug: 'workato',                           stars: 4.7, reviews: 776,  g2_url: 'https://www.g2.com/products/workato/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 738,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
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
      { name: 'Zoom Workplace',                    slug: 'zoom-workplace',                    stars: 4.5, reviews: 56608, g2_url: 'https://www.g2.com/products/zoom-workplace/reviews' },
      { name: 'ClickUp',                            slug: 'clickup',                            stars: 4.6, reviews: 14219, g2_url: 'https://www.g2.com/products/clickup/reviews' },
      { name: 'Grammarly',                          slug: 'grammarly',                          stars: 4.7, reviews: 14073, g2_url: 'https://www.g2.com/products/grammarly/reviews' },
      { name: 'Intuit Mailchimp Email Marketing',   slug: 'intuit-mailchimp-email-marketing',   stars: 4.3, reviews: 12987, g2_url: 'https://www.g2.com/products/intuit-mailchimp-email-marketing/reviews' },
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
      { name: 'JumpCloud', slug: 'jumpcloud', stars: 4.5, reviews: 4091, g2_url: 'https://www.g2.com/products/jumpcloud/reviews' },
      { name: 'Zapier',    slug: 'zapier',    stars: 4.5, reviews: 2087, g2_url: 'https://www.g2.com/products/zapier/reviews' },
      { name: 'Drata',     slug: 'drata',     stars: 4.7, reviews: 1393, g2_url: 'https://www.g2.com/products/drata/reviews' },
      { name: 'Five9 Intelligent Cloud Contact Center Platform', slug: 'five9-intelligent-cloud-contact-center-platform', stars: 4.1, reviews: 625, g2_url: 'https://www.g2.com/products/five9-intelligent-cloud-contact-center-platform/reviews' },
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
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1362, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Snowflake',                        slug: 'snowflake',                        stars: 4.6, reviews: 762,  g2_url: 'https://www.g2.com/products/snowflake/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 738,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'SAP HANA Cloud',                   slug: 'sap-hana-cloud-2025-10-01',         stars: 4.3, reviews: 620,  g2_url: 'https://www.g2.com/products/sap-hana-cloud-2025-10-01/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'Agentic GTM Platforms',
    slug: 'agentic-gtm-platforms',
    g2_url: 'https://www.g2.com/categories/agentic-gtm-platforms',
    signal: 'emerging',
    signal_label: 'New Category',
    description: 'AI agents that plan, coordinate, and execute go-to-market work end-to-end — from account research and outbound engagement to pipeline progression — extending agentic AI into revenue operations.',
    product_count_label: '10+ products',
    top_products: [
      { name: 'GTM Workspace - Powered by ZoomInfo', slug: 'gtm-workspace-powered-by-zoominfo', stars: 4.5, reviews: 9143, g2_url: 'https://www.g2.com/products/gtm-workspace-powered-by-zoominfo/reviews' },
      { name: 'Demandbase One',                      slug: 'demandbase-one',                      stars: 4.4, reviews: 1988, g2_url: 'https://www.g2.com/products/demandbase-one/reviews' },
      { name: 'Consensus',                           slug: 'consensus',                           stars: 4.7, reviews: 1854, g2_url: 'https://www.g2.com/products/consensus/reviews' },
      { name: '6sense Sales Intelligence',           slug: '6sense-sales',                        stars: 4.0, reviews: 1071, g2_url: 'https://www.g2.com/products/6sense-sales/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
];

// ── What's Changed — diff vs previous refresh ─────────────────────
// Updated by g2-category-refresh scheduled task each cycle
const changelog = {
  refreshDate: '2026-09-15',
  previousRefreshDate: '2026-08-15',
  entries: [
    {
      category: 'Agentic GTM Platforms',
      change: 'New category debuts, replacing MCP Server Infrastructure Platforms in the watchlist',
      detail: 'G2 stood up a dedicated Agentic GTM Platforms category covering AI agents that orchestrate go-to-market work end-to-end — early leader GTM Workspace by ZoomInfo (9,143 reviews) tops Demandbase One (1,988) and Consensus (1,854), signaling G2 is now tracking agentic revenue orchestration as its own market alongside Agentic AI broadly.',
      direction: 'new',
    },
    {
      category: 'Agentic AI',
      change: 'Notion and ClickUp drop out of top 4 as HR platforms surge in',
      detail: 'BambooHR (6,719 reviews) and Paylocity (6,251) now lead Agentic AI, with HiBob HRIS (2,636) also entering the top 4 — Notion and ClickUp, last cycle\'s top two, no longer appear at all, a sign G2 has re-weighted this category toward agentic HR and workforce platforms. Retell AI (2,638) held its spot.',
      direction: 'down',
    },
    {
      category: 'AI Writing Assistant',
      change: 'Zoom Workplace debuts at #1, unseating the prior top 3',
      detail: 'Zoom Workplace (56,608 reviews) and ClickUp (14,219) now outrank Grammarly (14,073) in AI Writing Assistant, and Mailchimp (12,987) also breaks into the top 4 — Notion, Simplified, and Writesonic all drop out, suggesting G2 is folding broader productivity and marketing suites into this category.',
      direction: 'up',
    },
    {
      category: 'AI Governance Tools',
      change: 'Zapier enters top 4, Coder and Cortex Cloud drop out',
      detail: 'Zapier (2,087 reviews) jumps into the #2 spot in AI Governance Tools, pushing Coder (208) and Cortex Cloud (128) out of the top 4, while Five9 (625) also enters — JumpCloud (4,091, +27) and Drata (1,393, +56) held their top-two positions.',
      direction: 'up',
    },
    {
      category: 'Generative AI Infrastructure',
      change: 'Fullstory and Workato enter top 4, Botpress and Langchain drop out',
      detail: 'Fullstory (1,052 reviews) and Workato (776) newly rank among Generative AI Infrastructure\'s top products, displacing Botpress (512) and Langchain (137) — a sign G2 is broadening this category beyond model-serving infrastructure to analytics and integration platforms with generative AI features.',
      direction: 'up',
    },
    {
      category: 'MLOps Platforms',
      change: 'SAP HANA Cloud enters top 4, Saturn Cloud drops out',
      detail: 'SAP HANA Cloud (620 reviews) breaks into MLOps Platforms\' top 4 this cycle, displacing Saturn Cloud (321) — the top three (Databricks, Snowflake, Gemini Enterprise Agent Platform) held steady with only minor review-count shifts.',
      direction: 'up',
    },
    {
      category: 'Generative AI',
      change: 'No ranking changes — steady growth across the board',
      detail: 'Top 4 (Notion, Simplified, ChatGPT, Synthesia) held their positions with modest review gains — the most stable category in this cycle\'s data.',
      direction: 'stable',
    },
  ],
};

module.exports = { categories, changelog };
