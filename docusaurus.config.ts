import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Learning Ruby on Rails',
  tagline: 'A comprehensive documentation of my Ruby programming journey',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://jhoshoa.github.io',
  baseUrl: '/learning-ruby-on-rails/',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Ruby on Rails',
      logo: {
        alt: 'Ruby Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'rubySidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ruby/ruby',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://www.ruby-lang.org/',
          label: 'Ruby Lang',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Introduction', to: '/docs/intro'},
            {label: 'Ruby Basics', to: '/docs/ruby-basics/variables'},
            {label: 'Ruby on Rails', to: '/docs/ruby-on-rails/getting-started'},
          ],
        },
        {
          title: 'Resources',
          items: [
            {label: 'Ruby Documentation', href: 'https://ruby-doc.org/'},
            {label: 'Try Ruby', href: 'https://try.ruby-lang.org/'},
            {label: 'RubyGems', href: 'https://rubygems.org/'},
            {label: 'Rails Guides', href: 'https://guides.rubyonrails.org/'},
          ],
        },
        {
          title: 'More',
          items: [
            {label: 'Blog', to: '/blog'},
            {label: 'GitHub', href: 'https://github.com/ruby/ruby'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Learning Ruby on Rails. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['ruby'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
