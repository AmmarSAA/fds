import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync } from 'node:fs';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), {
    name: 'copy-food-images',
    closeBundle() { cpSync('Images', 'dist/Images', { recursive: true }); },
  }],
});
