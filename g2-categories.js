// G2 AI Category Intelligence
// Sourced live from G2 MCP — refresh by calling POST /api/g2/refresh
// Last fetched: auto-set on server boot

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
      { name: 'Retell AI',            slug: 'retell-ai',            stars: 4.8, reviews: 2370, g2_url: 'https://www.g2.com/products/retell-ai/reviews' },
      { name: 'Salesforce Agentforce',slug: 'salesforce-agentforce', stars: 4.3, reviews: 1111, g2_url: 'https://www.g2.com/products/salesforce-agentforce/reviews' },
      { name: 'Synthflow',            slug: 'synthflow',            stars: 4.5, reviews: 1015, g2_url: 'https://www.g2.com/products/synthflow/reviews' },
      { name: 'ClickUp',              slug: 'clickup',              stars: 4.6, reviews: 12440, g2_url: 'https://www.g2.com/products/clickup/reviews' },
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
      { name: 'HeyGen',    slug: 'heygen',    stars: 4.8, reviews: 1760, g2_url: 'https://www.g2.com/products/heygen/reviews' },
      { name: 'ChatGPT',   slug: 'chatgpt',   stars: 4.6, reviews: 2566, g2_url: 'https://www.g2.com/products/chatgpt/reviews' },
      { name: 'Synthesia', slug: 'synthesia', stars: 4.6, reviews: 2748, g2_url: 'https://www.g2.com/products/synthesia/reviews' },
      { name: 'Notion',    slug: 'notion',    stars: 4.6, reviews: 11909, g2_url: 'https://www.g2.com/products/notion/reviews' },
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
      { name: 'Saturn Cloud', slug: 'saturn-cloud-saturn-cloud', stars: 4.8, reviews: 320,  g2_url: 'https://www.g2.com/products/saturn-cloud-saturn-cloud/reviews' },
      { name: 'Databricks',   slug: 'databricks',               stars: 4.6, reviews: 784,  g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Botpress',     slug: 'botpress',                 stars: 4.5, reviews: 494,  g2_url: 'https://www.g2.com/products/botpress/reviews' },
      { name: 'AWS Bedrock',  slug: 'aws-bedrock',              stars: 4.3, reviews: 69,   g2_url: 'https://www.g2.com/products/aws-bedrock/reviews' },
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
      { name: 'Jasper',         slug: 'jasper-ai',       stars: 4.7, reviews: 1234, g2_url: 'https://www.g2.com/products/jasper-ai/reviews' },
      { name: 'Grammarly',      slug: 'grammarly',       stars: 4.7, reviews: 9800, g2_url: 'https://www.g2.com/products/grammarly/reviews' },
      { name: 'Copy.ai',        slug: 'copy-ai',         stars: 4.7, reviews: 189,  g2_url: 'https://www.g2.com/products/copy-ai/reviews' },
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
      { name: 'IBM OpenScale', slug: 'watson-openscale', stars: 4.3, reviews: 58,  g2_url: 'https://www.g2.com/products/watson-openscale/reviews' },
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
      { name: 'Weights & Biases', slug: 'weights-biases',         stars: 4.8, reviews: 290, g2_url: 'https://www.g2.com/products/weights-biases/reviews' },
      { name: 'Databricks',       slug: 'databricks',             stars: 4.6, reviews: 784, g2_url: 'https://www.g2.com/products/databricks/reviews' },
      { name: 'Azure ML',         slug: 'azure-machine-learning', stars: 4.4, reviews: 180, g2_url: 'https://www.g2.com/products/azure-machine-learning/reviews' },
    ],
    updated_at: new Date().toISOString(),
  },
];

module.exports = categories;
