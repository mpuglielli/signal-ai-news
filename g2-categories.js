// G2 AI Category Intelligence
// Auto-refreshed by scheduled task — every 2 weeks
// Last fetched: 2026-08-01

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
      { name: 'Notion',       slug: 'notion',       stars: 4.6, reviews: 13624, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'ClickUp',      slug: 'clickup',      stars: 4.6, reviews: 13546, g2_url: 'https://www.g2.com/products/clickup/reviews' },
      { name: 'Retell AI',    slug: 'retell-ai',    stars: 4.8, reviews: 2638,  g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
      { name: 'Insider One',  slug: 'insider-one',  stars: 4.8, reviews: 1414,  g2_url: 'https://www.g2.com/products/insider-one/reviews' },
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
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13624, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5011,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'Synthesia',  slug: 'synthesia',  stars: 4.6, reviews: 2778,  g2_url: 'https://www.g2.com/products/synthesia/reviews' },
      { name: 'ChatGPT',    slug: 'chatgpt',    stars: 4.6, reviews: 2770,  g2_url: 'https://www.g2.com/products/chatgpt/reviews' },
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
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1354, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 660,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'Botpress',                         slug: 'botpress',                         stars: 4.5, reviews: 507,  g2_url: 'https://www.g2.com/products/botpress/reviews' },
      { name: 'AWS Bedrock',                      slug: 'aws-bedrock',                      stars: 4.3, reviews: 76,   g2_url: 'https://www.g2.com/products/aws-bedrock/reviews' },
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
      { name: 'Grammarly',  slug: 'grammarly',  stars: 4.7, reviews: 14051, g2_url: 'https://www.g2.com/products/grammarly/reviews' },
      { name: 'Notion',     slug: 'notion',     stars: 4.6, reviews: 13624, g2_url: 'https://www.g2.com/products/notion/reviews' },
      { name: 'Simplified', slug: 'simplified', stars: 4.6, reviews: 5011,  g2_url: 'https://www.g2.com/products/simplified/reviews' },
      { name: 'Writesonic', slug: 'writesonic', stars: 4.7, reviews: 2119,  g2_url: 'https://www.g2.com/products/writesonic/reviews' },
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
      { name: 'JumpCloud',    slug: 'jumpcloud',    stars: 4.5, reviews: 4045, g2_url: 'https://www.g2.com/products/jumpcloud/reviews' },
      { name: 'Drata',        slug: 'drata',        stars: 4.7, reviews: 1334, g2_url: 'https://www.g2.com/products/drata/reviews' },
      { name: 'Coder',        slug: 'coder',        stars: 4.3, reviews: 207,  g2_url: 'https://www.g2.com/products/coder/reviews' },
      { name: 'Cortex Cloud', slug: 'cortex-cloud', stars: 4.1, reviews: 127,  g2_url: 'https://www.g2.com/products/cortex-cloud/reviews' },
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
      { name: 'Databricks',                       slug: 'databricks',                       stars: 4.6, reviews: 1354, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Snowflake',                        slug: 'snowflake',                        stars: 4.5, reviews: 761,  g2_url: 'https://www.g2.com/products/snowflake/reviews' },
      { name: 'Gemini Enterprise Agent Platform', slug: 'gemini-enterprise-agent-platform', stars: 4.3, reviews: 660,  g2_url: 'https://www.g2.com/products/gemini-enterprise-agent-platform/reviews' },
      { name: 'Saturn Cloud',                     slug: 'saturn-cloud-saturn-cloud',        stars: 4.8, reviews: 321,  g2_url: 'https://www.g2.com/products/saturn-cloud-saturn-cloud/reviews' },
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
      { name: 'HubSpot Marketing Hub', slug: 'hubspot-marketing-hub', stars: 4.4, reviews: 14889, g2_url: 'https://www.g2.com/products/hubspot-marketing-hub/reviews' },
      { name: 'SOCi',                  slug: 'soci',                  stars: 4.5, reviews: 4658,  g2_url: 'https://www.g2.com/products/soci/reviews' },
      { name: 'VEED',                  slug: 'veed',                  stars: 4.6, reviews: 2158,  g2_url: 'https://www.g2.com/products/veed/reviews' },
      { name: 'Insider One',           slug: 'insider-one',           stars: 4.8, reviews: 1414,  g2_url: 'https://www.g2.com/products/insider-one/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
];

// ── What's Changed — diff vs previous refresh ─────────────────────
// Updated by g2-category-refresh scheduled task each cycle
const changelog = {
  refreshDate: '2026-08-01',
  previousRefreshDate: '2026-07-15',
  entries: [
    {
      category: 'AI Marketing Agents',
      change: 'Major reshuffle — ActiveCampaign and Attentive out, SOCi debuts at #2',
      detail: 'SOCi (4,658 reviews) vaulted to #2 as ActiveCampaign (14,709) and Attentive (1,456) exited the category entirely — signals a category redefinition toward local/multi-location AI agents over traditional email automation.',
      direction: 'up',
    },
    {
      category: 'Agentic AI',
      change: 'Notion enters at #1, Rippling drops out',
      detail: 'Notion (13,624 reviews) debuted at #1 in Agentic AI as Rippling exited — reflecting Notion\'s aggressive repositioning as an agentic workspace and broadening the category beyond pure HR/IT automation.',
      direction: 'up',
    },
    {
      category: 'Agentic AI',
      change: 'Insider One enters top 4, Salesforce Agentforce drops out',
      detail: 'Insider One (1,414 reviews) entered at #4, displacing Salesforce Agentforce — multi-channel customer engagement platforms are claiming agentic AI mindshare as the category expands beyond standalone agent tools.',
      direction: 'up',
    },
    {
      category: 'Generative AI Infrastructure',
      change: 'Saturn Cloud exits, AWS Bedrock enters at #4',
      detail: 'Saturn Cloud dropped out of the Generative AI Infrastructure category this cycle; AWS Bedrock (76 reviews) enters at #4 — AWS\'s managed foundation model service is gaining category recognition as enterprise teams standardize on cloud-native AI infra.',
      direction: 'up',
    },
    {
      category: 'Generative AI',
      change: 'Notion review surge (+1,477)',
      detail: 'Notion jumped from 12,147 to 13,624 reviews (+1,477) in Generative AI — the single largest review volume gain this cycle, occurring simultaneously across Agentic AI and AI Writing Assistant, indicating a coordinated review push and growing enterprise adoption.',
      direction: 'up',
    },
    {
      category: 'Agentic AI',
      change: 'ClickUp review volume gains',
      detail: 'ClickUp gained +446 reviews (13,100 → 13,546) this cycle — consistent with its Converged AI Workspace positioning and ongoing momentum heading into the second half of 2026.',
      direction: 'up',
    },
  ],
};

module.exports = { categories, changelog };
