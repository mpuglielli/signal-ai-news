// G2 AI Category Intelligence
// Auto-refreshed by scheduled task — every 2 weeks
// Last fetched: 2026-10-15

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
      { name: 'ClickUp',    slug: 'clickup',    stars: 4.6, reviews: 14960, g2_url: 'https://www.g2.com/products/clickup/reviews' },
      { name: 'Paylocity',  slug: 'paylocity',  stars: 4.4, reviews: 6308,  g2_url: 'https://www.g2.com/products/paylocity/reviews' },
      { name: 'HiBob HRIS', slug: 'hibob-hris', stars: 4.5, reviews: 2702,  g2_url: 'https://www.g2.com/products/hibob-hris/reviews' },
      { name: 'Retell AI',  slug: 'retell-ai',  stars: 4.8, reviews: 2639,  g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
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
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13875, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5010,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'ChatGPT',    slug: 'chatgpt',    stars: 4.6, reviews: 3099,  g2_url: 'https://www.g2.com/products/chatgpt/reviews' },
      { name: 'Synthesia',  slug: 'synthesia',  stars: 4.6, reviews: 2850,  g2_url: 'https://www.g2.com/products/synthesia/reviews' },
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
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1384, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 736,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'Botpress',                         slug: 'botpress',                         stars: 4.5, reviews: 514,  g2_url: 'https://www.g2.com/products/botpress/reviews' },
      { name: 'Langchain',                        slug: 'langchain',                        stars: 4.5, reviews: 146,  g2_url: 'https://www.g2.com/products/langchain/reviews' },
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
      { name: 'Grammarly',  slug: 'grammarly',  stars: 4.7, reviews: 14080, g2_url: 'https://www.g2.com/products/grammarly/reviews' },
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13875, g2_url: 'https://www.g2.com/products/notion/reviews' },
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
      { name: 'JumpCloud',                          slug: 'jumpcloud', stars: 4.5, reviews: 4118, g2_url: 'https://www.g2.com/products/jumpcloud/reviews' },
      { name: 'Drata',                              slug: 'drata',     stars: 4.7, reviews: 1397, g2_url: 'https://www.g2.com/products/drata/reviews' },
      { name: 'Coder',                              slug: 'coder',     stars: 4.3, reviews: 207,  g2_url: 'https://www.g2.com/products/coder/reviews' },
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
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1384, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Snowflake',                        slug: 'snowflake',                        stars: 4.6, reviews: 763,  g2_url: 'https://www.g2.com/products/snowflake/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 736,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'Saturn Cloud',                     slug: 'saturn-cloud-saturn-cloud',        stars: 4.8, reviews: 320,  g2_url: 'https://www.g2.com/products/saturn-cloud-saturn-cloud/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'AI Voice Agent Platform',
    slug: 'ai-voice-agent-platform',
    g2_url: 'https://www.g2.com/categories/ai-voice-agent-platform',
    signal: 'emerging',
    signal_label: 'New Category',
    description: 'Developer platforms that orchestrate speech-to-text, LLMs, and text-to-speech into real-time voice agents — the infrastructure layer for B2B teams embedding phone and in-app voice AI into their own products.',
    product_count_label: '5+ products',
    top_products: [
      { name: 'Retell AI',  slug: 'retell-ai',   stars: 4.8, reviews: 2639, g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
      { name: 'ElevenLabs', slug: 'elevenlabsio', stars: 4.5, reviews: 1261, g2_url: 'https://www.g2.com/products/elevenlabsio/reviews' },
      { name: 'Deepgram',   slug: 'deepgram',    stars: 4.6, reviews: 482,  g2_url: 'https://www.g2.com/products/deepgram/reviews' },
      { name: 'Amazon Lex', slug: 'amazon-lex',  stars: 4.2, reviews: 43,   g2_url: 'https://www.g2.com/products/amazon-lex/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
];

// ── What's Changed — diff vs previous refresh ─────────────────────
// Updated by g2-category-refresh scheduled task each cycle
const changelog = {
  refreshDate: '2026-10-15',
  previousRefreshDate: '2026-09-15',
  entries: [
    {
      category: 'AI Voice Agent Platform',
      change: 'New category debuts, replacing Agentic GTM Platforms in the watchlist',
      detail: 'G2 launched a dedicated AI Voice Agent Platform category for developer infrastructure that runs real-time STT→LLM→TTS loops — Retell AI (2,639 reviews) leads ElevenLabs (1,261) and Deepgram (482), giving B2B teams building phone or in-app voice agents a distinct shortlist separate from packaged voice assistants.',
      direction: 'new',
    },
    {
      category: 'Agentic AI',
      change: 'ClickUp returns at #1, BambooHR drops out',
      detail: 'ClickUp (14,960 reviews) re-enters the Agentic AI top 4 in first place while BambooHR (6,719 last cycle) falls out; Paylocity (6,308, +57), HiBob HRIS (2,702, +66) and Retell AI (2,639) hold on — a mix of work-management and HR platforms still dominates by review volume.',
      direction: 'up',
    },
    {
      category: 'Generative AI',
      change: 'ChatGPT adds 100+ reviews; top 4 unchanged',
      detail: 'Notion (13,875), Simplified (5,010), ChatGPT (3,099, +103) and Synthesia (2,850, +44) held their slots, with ChatGPT posting the strongest review growth in the category — buyer validation for general-purpose assistants keeps compounding.',
      direction: 'up',
    },
    {
      category: 'AI Writing Assistant',
      change: 'Grammarly reclaims #1; Zoom, ClickUp and Mailchimp drop out',
      detail: 'Grammarly (14,080 reviews) is back on top, followed by Notion (13,875), Simplified (5,010) and Writesonic (2,147), while last cycle\'s broad suites — Zoom Workplace, ClickUp and Mailchimp — no longer appear, putting dedicated writing tools back at the front for buyers.',
      direction: 'up',
    },
    {
      category: 'Generative AI Infrastructure',
      change: 'Botpress and Langchain return; Fullstory and Workato drop out',
      detail: 'Botpress (514 reviews) and Langchain (146) are back in the top 4 behind Databricks (1,384) and Gemini Enterprise Agent Platform (736), displacing Fullstory and Workato — the list again reflects purpose-built agent and LLM infrastructure rather than adjacent analytics/integration tools.',
      direction: 'up',
    },
    {
      category: 'AI Governance Tools',
      change: 'Willow enters top 4; Zapier and Five9 drop out',
      detail: 'Willow AI Governance Control Plane (99 reviews, 4.9★) debuts and Coder (207) returns, replacing Zapier and Five9 — a shift toward dedicated agent-access governance for enterprises managing MCPs and AI tools, behind steady leaders JumpCloud (4,118) and Drata (1,397).',
      direction: 'up',
    },
    {
      category: 'MLOps Platforms',
      change: 'Saturn Cloud returns, SAP HANA Cloud drops out',
      detail: 'Saturn Cloud (320 reviews, 4.8★) is back in the MLOps top 4, replacing SAP HANA Cloud (620), while Databricks (1,384), Snowflake (763) and Gemini Enterprise Agent Platform (736) held steady with minor review shifts.',
      direction: 'down',
    },
  ],
};

module.exports = { categories, changelog };
