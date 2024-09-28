import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://sanasuno.github.io',
    vite: {
      resolve: {
        alias: {
          '@images': path.resolve('./src/assets/images'),
        },
      },
    },
});
