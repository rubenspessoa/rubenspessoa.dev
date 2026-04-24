import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rubenspessoa.dev',
  output: 'static',
  integrations: [sitemap()],
  redirects: {
    '/apple-app-engineer/': '/',
  },
  build: {
    format: 'directory',
  },
});
