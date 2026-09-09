// @ts-check
import { defineConfig } from 'astro/config';
import unocss from 'unocss/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://jyrac.github.io',
  base: '/summit',
  integrations: [
    unocss(),
  ],
});
