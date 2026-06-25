// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      // ponytail: pre-bundle tabler so barrel warning disappears
      include: ['@tabler/icons-react'],
    },
  },
});