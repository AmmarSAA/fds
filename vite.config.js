import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cpSync } from 'node:fs';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  css: { postcss: { plugins: [{
    postcssPlugin: 'scope-foodies-route-styles',
    Once(root) {
      const source = (root.source?.input.file || '').replaceAll('\\', '/');
      const match = source.match(/\/src\/Files\/([^/]+)\.css$/);
      if (!match) return;
      const page = match[1].toLowerCase();
      const scope = `html[data-foodies-page="${page}"]`;
      root.walkRules(rule => {
        if (rule.parent.type === 'atrule' && rule.parent.name.includes('keyframes')) return;
        rule.selector = rule.selector.split(',').map(selector => {
          const trimmed = selector.trim();
          if (trimmed.startsWith(':root')) return trimmed.replace(':root', scope);
          if (/^html(?:\b|:)/.test(trimmed)) return trimmed.replace(/^html/, scope);
          return `${scope} ${trimmed}`;
        }).join(', ');
      });
    },
  }] } },
  plugins: [react(), {
    name: 'copy-food-images',
    closeBundle() { cpSync('Images', 'dist/Images', { recursive: true }); },
  }],
});
