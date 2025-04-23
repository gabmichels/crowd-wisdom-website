import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://crowdwisdom.ai',
  output: 'static',
  build: {
    assets: '_astro',
  },
  vite: {
    build: {
      assetsInlineLimit: 0,
    },
  },
}); 