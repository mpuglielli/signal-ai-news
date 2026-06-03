// Curated RSS feed sources — General AI + B2B SaaS relevance
module.exports = [
  // ── General AI News ──────────────────────────────────────────────
  {
    url: 'https://techcrunch.com/category/artificial-intelligence/feed/',
    name: 'TechCrunch AI',
    category: 'general',
    tags: ['ai', 'industry'],
  },
  {
    url: 'https://www.theverge.com/ai-artificial-intelligence/rss/index.xml',
    name: 'The Verge · AI',
    category: 'general',
    tags: ['ai', 'industry'],
  },
  {
    url: 'https://www.wired.com/feed/category/artificial-intelligence/latest/rss',
    name: 'Wired AI',
    category: 'general',
    tags: ['ai', 'longform'],
  },
  {
    url: 'https://feeds.feedburner.com/venturebeat/SZYF',
    name: 'VentureBeat AI',
    category: 'general',
    tags: ['ai', 'enterprise'],
  },
  {
    url: 'https://www.technologyreview.com/feed/',
    name: 'MIT Technology Review',
    category: 'general',
    tags: ['ai', 'research'],
  },
  {
    url: 'https://openai.com/blog/rss.xml',
    name: 'OpenAI Blog',
    category: 'general',
    tags: ['ai', 'research', 'models'],
  },
  {
    url: 'https://www.anthropic.com/rss.xml',
    name: 'Anthropic',
    category: 'general',
    tags: ['ai', 'research', 'safety'],
  },
  {
    url: 'https://deepmind.google/blog/rss.xml',
    name: 'Google DeepMind',
    category: 'general',
    tags: ['ai', 'research'],
  },
  {
    url: 'https://huggingface.co/blog/feed.xml',
    name: 'Hugging Face Blog',
    category: 'general',
    tags: ['ai', 'open-source', 'models'],
  },

  // ── B2B SaaS + Enterprise AI ─────────────────────────────────────
  {
    url: 'https://a16z.com/feed/',
    name: 'a16z',
    category: 'saas',
    tags: ['saas', 'venture', 'enterprise'],
  },
  {
    url: 'https://www.sequoiacap.com/articles/feed/',
    name: 'Sequoia Capital',
    category: 'saas',
    tags: ['saas', 'venture'],
  },
  {
    url: 'https://newsletter.pragmaticengineer.com/feed',
    name: 'The Pragmatic Engineer',
    category: 'saas',
    tags: ['engineering', 'saas', 'ai'],
  },
  {
    url: 'https://www.salesforce.com/news/feed/',
    name: 'Salesforce News',
    category: 'saas',
    tags: ['crm', 'enterprise', 'ai'],
  },
  {
    url: 'https://blogs.microsoft.com/feed/',
    name: 'Microsoft Blog',
    category: 'saas',
    tags: ['enterprise', 'copilot', 'ai'],
  },
  {
    url: 'https://aws.amazon.com/blogs/machine-learning/feed/',
    name: 'AWS Machine Learning',
    category: 'saas',
    tags: ['cloud', 'mlops', 'enterprise'],
  },
  {
    url: 'https://cloud.google.com/blog/rss',
    name: 'Google Cloud Blog',
    category: 'saas',
    tags: ['cloud', 'enterprise', 'ai'],
  },

  // ── Thought Leadership ───────────────────────────────────────────
  {
    url: 'https://www.ben-evans.com/benedictevans?format=rss',
    name: 'Benedict Evans',
    category: 'thought-leadership',
    tags: ['analysis', 'saas', 'trends'],
  },
  {
    url: 'https://stratechery.com/rss/',
    name: 'Stratechery',
    category: 'thought-leadership',
    tags: ['analysis', 'strategy', 'ai'],
  },
  {
    url: 'https://thealgorithmicbridge.substack.com/feed',
    name: 'The Algorithmic Bridge',
    category: 'thought-leadership',
    tags: ['ai', 'analysis'],
  },
  {
    url: 'https://aisnakeoil.substack.com/feed',
    name: 'AI Snake Oil',
    category: 'thought-leadership',
    tags: ['ai', 'critical', 'research'],
  },

  // ── Voices — 10 B2B AI thought leaders via Google Alerts RSS ─────
  // Articles where these leaders are quoted or featured in press
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/11420644825276395031',
    name: 'Aaron Levie',
    category: 'thought-leadership',
    tags: ['voices', 'enterprise', 'ai'],
    person: { title: 'CEO, Box', linkedin: 'https://www.linkedin.com/in/aaronlevie/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/15630360149096602030',
    name: 'Satya Nadella',
    category: 'thought-leadership',
    tags: ['voices', 'enterprise', 'ai'],
    person: { title: 'CEO, Microsoft', linkedin: 'https://www.linkedin.com/in/satyanadella/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/5553979773547800491',
    name: 'Marc Benioff',
    category: 'thought-leadership',
    tags: ['voices', 'saas', 'ai'],
    person: { title: 'CEO, Salesforce', linkedin: 'https://www.linkedin.com/in/marcbenioff/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/15456967284342296964',
    name: 'Dharmesh Shah',
    category: 'thought-leadership',
    tags: ['voices', 'saas', 'ai'],
    person: { title: 'CTO & Co-founder, HubSpot', linkedin: 'https://www.linkedin.com/in/dharmesh/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/5728254484166161457',
    name: 'Ali Ghodsi',
    category: 'thought-leadership',
    tags: ['voices', 'enterprise', 'ai'],
    person: { title: 'CEO, Databricks', linkedin: 'https://www.linkedin.com/in/alighodsi/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/1418450802563166410',
    name: 'Martin Casado',
    category: 'thought-leadership',
    tags: ['voices', 'venture', 'ai'],
    person: { title: 'General Partner, a16z', linkedin: 'https://www.linkedin.com/in/martincasado/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/17770858355634662557',
    name: 'Sarah Guo',
    category: 'thought-leadership',
    tags: ['voices', 'venture', 'ai'],
    person: { title: 'Founder, Conviction', linkedin: 'https://www.linkedin.com/in/sarahguo/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/18172800094687101202',
    name: 'Jason Lemkin',
    category: 'thought-leadership',
    tags: ['voices', 'saas', 'ai'],
    person: { title: 'Founder, SaaStr', linkedin: 'https://www.linkedin.com/in/jasonmlemkin/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/11724807712939128951',
    name: 'Tomasz Tunguz',
    category: 'thought-leadership',
    tags: ['voices', 'venture', 'saas'],
    person: { title: 'General Partner, Theory Ventures', linkedin: 'https://www.linkedin.com/in/tomasztunguz/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/4054056827332510215',
    name: 'Jared Spataro',
    category: 'thought-leadership',
    tags: ['voices', 'enterprise', 'ai'],
    person: { title: 'CVP AI at Work, Microsoft', linkedin: 'https://www.linkedin.com/in/jaredspataro/' },
  },
];
