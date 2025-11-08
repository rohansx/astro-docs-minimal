/**
 * Astro Docs Minimal - Configuration
 * Customize your documentation site
 */

export interface NavLink {
  title: string;
  href: string;
}

export interface NavSection {
  section: string;
  links: NavLink[];
}

export interface DocsConfig {
  title: string;
  description: string;
  logo?: string;
  navigation: NavSection[];
  searchPlaceholder?: string;
  colors?: {
    accent?: string;
    accentHover?: string;
    accentLight?: string;
    accentText?: string;
  };
}

// Default configuration - override in your project
export const docsConfig: DocsConfig = {
  title: 'Astro Docs Minimal',
  description: 'A minimal, beautiful documentation system for Astro',
  navigation: [
    {
      section: 'Getting Started',
      links: [
        { title: 'Introduction', href: '/docs/introduction' },
        { title: 'Installation', href: '/docs/installation' },
      ],
    },
    {
      section: 'Guides',
      links: [
        { title: 'Configuration', href: '/docs/configuration' },
        { title: 'Customization', href: '/docs/customization' },
      ],
    },
  ],
  searchPlaceholder: 'Search documentation...',
  colors: {
    accent: '#fbbf24', // yellow-400
    accentHover: '#f59e0b', // yellow-500
    accentLight: '#fef3c7', // yellow-100
    accentText: '#78350f', // yellow-900
  },
};
