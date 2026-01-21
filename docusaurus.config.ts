import type {Config} from '@docusaurus/types';
import type {Options} from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const config: Config = {
  title: 'JS Code Snippets',
  tagline: '자바스크립트 팁을 빠르게 찾는 위키',
  favicon: 'img/logo.svg',

  // GitHub Pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  url: 'https://num2k.github.io', // Your website URL
  baseUrl: '/js-code-snippets/', // Base URL for your project
  organizationName: 'num2k', // Usually your GitHub org/user name.
  projectName: 'js-code-snippets', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: '/', // docs at root
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://github.com/num2k/js-code-snippets/edit/main/',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        pages: {
          path: 'src/pages',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } as Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'ko'],
        highlightSearchTermsOnTargetPage: true,
        docsRouteBasePath: '/',
      },
    ],
  ],

  themeConfig: {
    image: 'img/og-image.svg',
    navbar: {
      title: 'JS Code Snippets',
      logo: {
        alt: 'JS Code Snippets Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/num2k/js-code-snippets',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
  },
};

export default config;
