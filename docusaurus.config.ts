import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: "g0rnn's Blog",
  tagline: 'Dinosaurs are cool',
  favicon: 'img/super-capybara-man1.png',
  future: { v4: true },

  url: 'https://g0rnn.github.io',
  baseUrl: '/',
  organizationName: 'g0rnn',
  projectName: 'g0rnn.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: { defaultLocale: 'ko', locales: ['en','ko'] },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          routeBasePath: '/',
          showReadingTime: true,
          feedOptions: { type: ['rss','atom'], xslt: true },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: { customCss: './src/css/custom.css' },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      { quality: 70, max: 1030, min: 640, steps: 2, disableInDev: false },
    ],
    // medium-zoom 플러그인
    'docusaurus-plugin-image-zoom',

    // Google Analytics 4 (GA4)
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-C8J1C26M0C', // ← 여기 GA4 측정 ID 넣기
        anonymizeIP: false,       // (선택) 사용자 IP 익명화
      },
    ],
  ],

  themeConfig: {
    image: 'img/super-capybara-man.png',
    navbar: {
      title: 'gornn',
      logo: { alt: 'My Site Logo', src: 'img/super-capybara-man.png' },
      items: [
        { to: '/', label: 'Blog', position: 'left' },
        { href: 'https://github.com/g0rnn', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        { title: 'Community', items: [] },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: '/' },
            { label: 'GitHub', href: 'https://github.com/g0rnn' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash','java','properties'],
    },

    zoom: {
      selector: '.markdown :not(em) > img', // 필요 시 좁혀서 사용
      background: { light: 'rgb(255,255,255)', dark: 'rgb(50,50,50)' },
      // 아래는 medium-zoom 고유 설정(여백 등)
      // https://github.com/francoischalifour/medium-zoom#usage
      config: { margin: 24, scrollOffset: 0 },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;