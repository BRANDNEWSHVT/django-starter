import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/static/',
  root: resolve('./assets'),
  plugins: [react(), tailwindcss()],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
    alias: {
      '@': resolve('./assets/js'),
    },
  },
  server: {
    host: 'localhost',
    port: 5174,
    hmr: {
      host: 'localhost',
    },
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  build: {
    target: 'es2015',
    assetsDir: '',
    outDir: resolve('./assets/dist'),
    manifest: 'manifest.json',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve('./assets/js/main.jsx'),
      },
    },
  },
});
