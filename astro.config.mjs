// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { transformerCodeTitle } from './src/lib/shiki-code-title.mjs';

export default defineConfig({
  site: 'https://g0rnn.github.io',
  trailingSlash: 'ignore',
  integrations: [mdx(), sitemap()],
  image: {
    // 레티나 화면에서도 선명하도록 srcset을 만든다.
    layout: 'constrained',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      transformers: [transformerCodeTitle()],
    },
    rehypePlugins: [
      rehypeHeadingIds,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          test: ['h2', 'h3', 'h4', 'h5', 'h6'],
          properties: { className: ['heading-link'], ariaLabel: 'Link to this section' },
          content: {
            type: 'element',
            tagName: 'span',
            properties: { className: ['heading-link-icon'] },
            children: [{ type: 'text', value: '#' }],
          },
        },
      ],
    ],
  },
});
