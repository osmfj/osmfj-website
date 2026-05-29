import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  // When going to production, please use the following URL
  // site: 'https://www.osmf.jp',
  // base: '/'
  site: 'https://osmfj.github.io',
  base: '/osmfj-new-website',
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
});
