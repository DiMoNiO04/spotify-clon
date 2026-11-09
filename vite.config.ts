import tailwindcss from '@tailwindcss/vite';
import observerPlugin from 'mobx-react-observer/vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [observerPlugin({ exclude: ['src/ui-components/**'] }), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'MODULE_LEVEL_DIRECTIVE' && warning.id?.includes('lucide-react')) {
          return;
        }
        warn(warning);
      },
    },
  },
});
