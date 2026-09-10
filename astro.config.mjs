// @ts-check
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://summit.jyrac.stki.org',
  integrations: [
    unocss({ mode: 'per-module' }),
    sitemap(),
  ],
});
