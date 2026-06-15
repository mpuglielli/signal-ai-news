// Curated RSS feed sources — General AI + B2B SaaS relevance
// NOTE: Many major news sites (TechCrunch, The Verge, Wired) block server IPs.
// All feeds here are verified to work from Vercel serverless environments.
module.exports = [
  // ── General AI News ──────────────────────────────────────────────
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
  {
    url: 'https://news.ycombinator.com/rss',
    name: 'Hacker News',
    category: 'general',
    tags: ['ai', 'industry', 'tech'],
  },
  {
    url: 'https://techpolicyinstitute.org/feed/',
    name: 'Tech Policy Institute',
    category: 'general',
    tags: ['ai', 'policy'],
  },
  {
    url: 'https://importai.substack.com/feed',
    name: 'Import AI',
    category: 'general',
    tags: ['ai', 'research', 'analysis'],
  },
  {
    url: 'https://thesequence.substack.com/feed',
    name: 'TheSequence',
    category: 'general',
    tags: ['ai', 'ml', 'research'],
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
  {
    url: 'https://www.g2.com/articles/feed',
    name: 'G2 Learn Hub',
    category: 'saas',
    tags: ['saas', 'reviews', 'enterprise'],
  },
  {
    url: 'https://www.producthunt.com/feed?category=artificial-intelligence',
    name: 'Product Hunt AI',
    category: 'saas',
    tags: ['ai', 'products', 'launches'],
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
  {
    url: 'https://www.digitalnative.tech/feed',
    name: 'Digital Native',
    category: 'thought-leadership',
    tags: ['saas', 'venture', 'analysis'],
  },

  // ── Voices — 14 B2B AI thought leaders via Google Alerts RSS ────
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

  // ── G2 Voices ────────────────────────────────────────────────────
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/17185920851779908631',
    name: 'Godard Abel',
    category: 'thought-leadership',
    tags: ['voices', 'g2', 'saas'],
    person: { title: 'CEO & Co-founder, G2', linkedin: 'https://www.linkedin.com/in/godardabel/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/6419994131392353680',
    name: 'Alexis Zhang',
    category: 'thought-leadership',
    tags: ['voices', 'g2', 'saas'],
    person: { title: 'G2', linkedin: 'https://www.linkedin.com/in/alexis-zhang/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/12128519353283518858',
    name: 'Alex Bradley',
    category: 'thought-leadership',
    tags: ['voices', 'g2', 'saas'],
    person: { title: 'CFO, G2', linkedin: 'https://www.linkedin.com/in/alex-bradley-g2/' },
  },
  {
    url: 'https://www.google.com/alerts/feeds/17947842405433408902/896611409531037727',
    name: 'Tim Sanders',
    category: 'thought-leadership',
    tags: ['voices', 'g2', 'saas'],
    person: { title: 'Chief Innovation Officer, G2', linkedin: 'https://www.linkedin.com/in/timsanders/' },
  },
];
