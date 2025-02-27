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
  tagline: 'さなすのによる考察置き場',
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
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          blogSidebarTitle: 'ブログ',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          truncateMarker:  /<!--\s*(more)\s*-->/,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
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
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'サイトロゴ',
          src: 'img/logo-light.png',
          srcDark: 'img/logo-dark.png'
        },
        items: [
          //{
          //  type: 'docSidebar',
          //  sidebarId: 'anadenSidebar',
          //  position: 'left',
          //  label: 'アナデン',
          //},
          //{
          //  type: 'docSidebar',
          //  sidebarId: 'zzzSidebar',
          //  position: 'left',
          //  label: 'ゼンゼロ',
          //},
          {to: '/blog', label: 'ブログ', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
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
                label: 'X',
                href: 'https://x.com/sanasuno',
              },
              {
                label: 'メール',
                href: 'mailto:sanasunozzz@gmail.com',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} さなすの.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["ja"],
      }
    ]
  ]
};

export default config;
