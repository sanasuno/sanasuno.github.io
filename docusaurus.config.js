// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'さなすの考察録',
  tagline: 'ゲームの考察など',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sanasuno.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sanasuno', // Usually your GitHub org/user name.
  projectName: 'sanasuno.github.io', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: '記事一覧',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          truncateMarker: /<!--\s*(more)\s*-->/,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-CBV1BRE9Y6',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.jpg',
      navbar: {
        logo: {
          alt: 'サイトロゴ',
          src: 'img/logo-black.png',
          srcDark: 'img/logo-gold.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'conlangSidebar',
            position: 'left',
            label: '人工言語',
          },
          {to: '/blog', label: 'ブログ', position: 'left'},
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'さなすの考察録',
            items: [
              {
                label: '当サイトについて',
                to: '/about',
              },
              {
                label: 'プライバシーポリシー',
                to: '/privacy-policy',
              },
            ],
          },
          {
            title: '連絡先',
            items: [
              {
                label: 'メール',
                href: 'mailto:sanasunozzz@gmail.com',
              },
              {
                label: 'X',
                href: 'https://x.com/sanasuno_game',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@sanasuno',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} さなすの考察録.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      giscus: {
        repo: 'sanasuno/sanasuno.github.io',
        repoId: 'R_kgDOOKiROg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOOKiROs4Cofrm',
        mapping: 'pathname',
        reactionEnabled: '1',
        emitMetadata: '0',
      },
    }),
    plugins: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          language: ["ja"],
          docsRouteBasePath: "/",
        },
      ],
    ],
};

export default config;
