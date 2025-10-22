import { join, resolve } from 'node:path';
import { defineConfig, loadEnv } from 'vite';

import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig((mode) => {
  const env = loadEnv(mode, process.cwd(), '');

  const INPUT_DIR = './assets';
  const OUTPUT_DIR = './assets/dist';

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': resolve(INPUT_DIR + '/js'),
      },
    },
    root: resolve(INPUT_DIR),
    base: '/static/',
    server: {
      host: '0.0.0.0',
      port: env.DJANGO_VITE_DEV_SERVER_PORT || 5173,
      watch: {
        usePolling: true,
      },
    },
    build: {
      manifest: 'manifest.json',
      emptyOutDir: true,
      outDir: resolve(OUTPUT_DIR),
      rollupOptions: {
        input: {
          main: join(INPUT_DIR, '/js/main.js'),
          css: join(INPUT_DIR, '/css/index.css'),
        },
      },
    },
  };
});
