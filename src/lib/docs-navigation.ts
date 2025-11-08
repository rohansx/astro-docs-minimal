/**
 * Documentation Navigation Structure
 * Simple configuration for docs sidebar
 */

export interface DocLink {
  title: string;
  href: string;
}

export interface DocSection {
  section: string;
  links: DocLink[];
}

export const docsNavigation: DocSection[] = [
  {
    section: 'Getting Started',
    links: [
      { title: 'Introduction', href: '/docs/getting-started/introduction' },
      { title: 'Quick Start Guide', href: '/docs/getting-started/quick-start' },
      { title: 'How It Works', href: '/docs/getting-started/how-it-works' },
    ],
  },
  {
    section: 'User Guide',
    links: [
      { title: 'What is an AI Persona?', href: '/docs/user-guide/what-is-ai-persona' },
      { title: 'Add Your Knowledge', href: '/docs/user-guide/add-knowledge' },
      { title: 'Chat with Your Persona', href: '/docs/user-guide/chat-with-persona' },
      { title: 'Managing Your Persona', href: '/docs/user-guide/managing-persona' },
      { title: 'Sharing Your Persona', href: '/docs/user-guide/sharing-persona' },
    ],
  },
  {
    section: 'Advanced Guides',
    links: [
      { title: 'Creating Custom Clones', href: '/docs/guides/creating-clone' },
      { title: 'Conversation Strategies', href: '/docs/guides/talking-to-experts' },
      { title: 'Best Practices', href: '/docs/guides/best-practices' },
    ],
  },
  {
    section: 'Features',
    links: [
      { title: 'Expert Clones', href: '/docs/features/expert-clones' },
      { title: 'AI Conversations', href: '/docs/features/ai-conversations' },
      { title: 'Pricing Plans', href: '/docs/features/pricing' },
    ],
  },
  {
    section: 'Reference',
    links: [{ title: 'FAQ', href: '/docs/reference/faq' }],
  },
];
