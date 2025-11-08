# 📚 Astro Docs Minimal

[![npm version](https://badge.fury.io/js/astro-docs-minimal.svg)](https://www.npmjs.com/package/astro-docs-minimal)
[![npm downloads](https://img.shields.io/npm/dm/astro-docs-minimal.svg)](https://www.npmjs.com/package/astro-docs-minimal)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> A minimal, beautiful, and blazing-fast documentation system for Astro

## 🎯 Features

- ✨ **Clean Design** - Minimal and professional documentation layout
- 🔍 **Built-in Search** - Powered by Pagefind for lightning-fast static search
- 📱 **Responsive** - Mobile-friendly sidebar navigation
- ⚡ **Fast** - Static site generation for optimal performance  
- 🎨 **Customizable** - Easy configuration via `docs-config.ts`
- 📝 **MDX Support** - Write interactive documentation with components
- 🚀 **Zero Config** - Works out of the box with sensible defaults

## 📦 Installation

```bash
npm install astro-docs-minimal
# or
pnpm add astro-docs-minimal
# or
yarn add astro-docs-minimal
```

## 🚀 Quick Start

1. **Install the package**

2. **Configure your navigation** in `src/lib/docs-config.ts`:

```typescript
export const docsConfig = {
  title: 'My Project Docs',
  description: 'Documentation for my awesome project',
  navigation: [
    {
      section: 'Getting Started',
      links: [
        { title: 'Introduction', href: '/docs/introduction' },
        { title: 'Installation', href: '/docs/installation' },
      ],
    },
  ],
};
```

3. **Create your docs pages** in `src/pages/docs/`:

```astro
---
// src/pages/docs/introduction.mdx
layout: ../../layouts/DocsLayout.astro
title: Introduction
description: Get started with our project
---

# Introduction

Welcome to the documentation!
```

4. **Build and deploy**:

```bash
npm run build
```

## 📖 Documentation Structure

```
src/
├── layouts/
│   └── DocsLayout.astro       # Main docs layout
├── components/
│   └── DocsSearch.astro        # Search component
├── lib/
│   ├── docs-config.ts          # Navigation config
│   └── docs-navigation.ts      # Navigation data
├── pages/docs/
│   ├── introduction.mdx        # Your docs pages
│   └── ...
└── styles/
    └── global.css              # Global styles
```

## ⚙️ Configuration

Customize your docs in `src/lib/docs-config.ts`:

```typescript
export interface DocsConfig {
  title: string;                // Site title
  description: string;          // Site description
  logo?: string;                // Optional logo path
  navigation: NavSection[];     // Sidebar navigation
  searchPlaceholder?: string;   // Search input placeholder
  colors?: {                    // Custom accent colors
    accent?: string;
    accentHover?: string;
    accentLight?: string;
    accentText?: string;
  };
}
```

## 🎨 Customization

### Custom Colors

Override the default yellow theme by updating the `colors` object in your config:

```typescript
colors: {
  accent: '#3b82f6',        // blue-500
  accentHover: '#2563eb',   // blue-600  
  accentLight: '#dbeafe',   // blue-100
  accentText: '#1e40af',    // blue-800
}
```

### Custom Styles

Add your own styles in `src/styles/global.css` or override Tailwind classes.

## 🔍 Search

Search is powered by [Pagefind](https://pagefind.app/) and works automatically after building your site.

**Build with search**:
```bash
npm run build && npx pagefind --site dist
```

## 📝 Writing Documentation

### MDX Pages

Use `.mdx` files to include React components in your docs:

```mdx
---
layout: ../../layouts/DocsLayout.astro
title: Interactive Example
---

import MyComponent from '../../components/MyComponent';

# Interactive Docs

<MyComponent />
```

### Markdown Features

Supports GitHub Flavored Markdown with:
- Tables
- Task lists
- Code blocks with syntax highlighting
- Autolinked headings

## 🚀 Deployment

Build for production:

```bash
npm run build
```

Deploy the `dist/` directory to any static hosting:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📄 License

MIT

## 🙏 Credits

Built with:
- [Astro](https://astro.build/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pagefind](https://pagefind.app/)

---

Made with ❤️ for the Astro community
