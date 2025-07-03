import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://neurotricks.com',
  integrations: [tailwind()],
  styles: ['src/styles/global.css'],
});
