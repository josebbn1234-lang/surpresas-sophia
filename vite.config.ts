import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Relative base path so it works in subdirectories or GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
});
