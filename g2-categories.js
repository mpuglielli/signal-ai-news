// G2 AI Category Intelligence
// Auto-refreshed by scheduled task — every 2 weeks
// Last fetched: 2026-08-15

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
      { name: 'Notion',       slug: 'notion',       stars: 4.6, reviews: 13770, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'ClickUp',      slug: 'clickup',      stars: 4.6, reviews: 13734, g2_url: 'https://www.g2.com/products/clickup/reviews' },
      { name: 'Retell AI',    slug: 'retell-ai',    stars: 4.8, reviews: 2638,  g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
      { name: 'Insider One',  slug: 'insider-one',  stars: 4.8, reviews: 1415,  g2_url: 'https://www.g2.com/products/insider-one/reviews' },
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
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13770, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5011,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'ChatGPT',    slug: 'chatgpt',    stars: 4.6, reviews: 2907,  g2_url: 'https://www.g2.com/products/chatgpt/reviews' },
      { name: 'Synthesia',  slug: 'synthesia',  stars: 4.6, reviews: 2786,  g2_url: 'https://www.g2.com/products/synthesia/reviews' },
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
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1366, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 744,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'Botpress',                         slug: 'botpress',                         stars: 4.5, reviews: 509,  g2_url: 'https://www.g2.com/products/botpress/reviews' },
      { name: 'Langchain',                        slug: 'langchain',                        stars: 4.5, reviews: 108,  g2_url: 'https://www.g2.com/products/langchain/reviews' },
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
      { name: 'Grammarly',  slug: 'grammarly',  stars: 4.7, reviews: 14065, g2_url: 'https://www.g2.com/products/grammarly/reviews' },
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13770, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5011,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'Writesonic', slug: 'writesonic', stars: 4.7, reviews: 2124,  g2_url: 'https://www.g2.com/products/writesonic/reviews' },
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
      { name: 'JumpCloud',    slug: 'jumpcloud',    stars: 4.5, reviews: 4064, g2_url: 'https://www.g2.com/products/jumpcloud/reviews' },
      { name: 'Drata',        slug: 'drata',        stars: 4.7, reviews: 1337, g2_url: 'https://www.g2.com/products/drata/reviews' },
      { name: 'Coder',        slug: 'coder',        stars: 4.3, reviews: 217,  g2_url: 'https://www.g2.com/products/coder/reviews' },
      { name: 'Cortex Cloud', slug: 'cortex-cloud', stars: 4.1, reviews: 128,  g2_url: 'https://www.g2.com/products/cortex-cloud/reviews' },
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
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1366, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Snowflake',                        slug: 'snowflake',                        stars: 4.5, reviews: 763,  g2_url: 'https://www.g2.com/products/snowflake/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 744,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'Saturn Cloud',                     slug: 'saturn-cloud-saturn-cloud',        stars: 4.8, reviews: 321,  g2_url: 'https://www.g2.com/products/saturn-cloud-saturn-cloud/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
  {
    name: 'MCP Server Infrastructure Platforms',
    slug: 'mcp-server-infrastructure-platforms',
    g2_url: 'https://www.g2.com/categories/mcp-server-infrastructure-platforms',
    signal: 'emerging',
    signal_label: 'New Category',
    description: 'Infrastructure to build, host, discover, govern, and secure Model Context Protocol (MCP) servers — the connective tissue letting AI agents reach real business tools and data.',
    product_count_label: '5+ products',
    top_products: [
      { name: 'K2View',                        slug: 'k2view',                        stars: 4.6, reviews: 55, g2_url: 'https://www.g2.com/products/k2view/reviews' },
      { name: 'CData Connectors',              slug: 'cdata-connectors',              stars: 4.2, reviews: 15, g2_url: 'https://www.g2.com/products/cdata-connectors/reviews' },
      { name: 'Composio',                      slug: 'composio',                      stars: 4.9, reviews: 7,  g2_url: 'https://www.g2.com/products/composio/reviews' },
      { name: 'GTM AI - Powered by ZoomInfo',  slug: 'gtm-ai-powered-by-zoominfo',    stars: 5.0, reviews: 1,  g2_url: 'https://www.g2.com/products/gtm-ai-powered-by-zoominfo/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
];

// ── What's Changed — diff vs previous refresh ─────────────────────
// Updated by g2-category-refresh scheduled task each cycle
const changelog = {
  refreshDate: '2026-08-15',
  previousRefreshDate: '2026-08-01',
  entries: [
    {
      category: 'MCP Server Infrastructure Platforms',
      change: 'New category debuts, replacing AI Marketing Agents in the watchlist',
      detail: 'G2 stood up a dedicated MCP Server Infrastructure Platforms category (created 2026-08-15) covering tools that build, host, and govern Model Context Protocol servers — early leader K2View (55 reviews) edges out newcomers Composio and Glama, signaling G2 is now tracking the agent-connectivity layer as its own market.',
      direction: 'new',
    },
    {
      category: 'Generative AI Infrastructure',
      change: 'Langchain enters top 4, AWS Bedrock drops out',
      detail: 'Langchain (108 reviews) entered the top 4 this cycle as AWS Bedrock (76 reviews, unchanged) was displaced — suggests buyers are increasingly reviewing orchestration frameworks alongside raw model-hosting infrastructure.',
      direction: 'up',
    },
    {
      category: 'Generative AI',
      change: 'ChatGPT overtakes Synthesia for the #3 spot',
      detail: 'ChatGPT (2,907 reviews, +137) edged past Synthesia (2,786 reviews, +8) this cycle — a narrow but notable reshuffle in a category where the top two spots (Notion, Simplified) remain locked in.',
      direction: 'up',
    },
    {
      category: 'Agentic AI',
      change: 'Notion and ClickUp both post strong review gains',
      detail: 'Notion added +146 reviews (13,624 → 13,770) and ClickUp added +188 (13,546 → 13,734) in Agentic AI this cycle — both platforms are converging on "converged workspace" positioning, and the gap between #1 and #2 has narrowed to just 36 reviews.',
      direction: 'up',
    },
    {
      category: 'Generative AI Infrastructure',
      change: 'Gemini Enterprise Agent Platform review surge (+84)',
      detail: 'Gemini Enterprise Agent Platform gained +84 reviews (660 → 744) in Generative AI Infrastructure, the same gain reflected in its MLOps Platforms ranking — Google\'s enterprise agent platform is picking up steam across both developer-infra and ops-focused buyer segments.',
      direction: 'up',
    },
    {
      category: 'AI Writing Assistant',
      change: 'No ranking changes — steady growth across the board',
      detail: 'Top 4 (Grammarly, Notion, Simplified, Writesonic) held their positions with modest review gains (+5 to +146 each) — this remains the most stable category in the set, consistent with its "Market Leader" signal.',
      direction: 'stable',
    },
  ],
};

module.exports = { categories, changelog };
