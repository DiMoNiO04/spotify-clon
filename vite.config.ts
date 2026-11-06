import observerPlugin from 'mobx-react-observer/vite-plugin';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [observerPlugin({ exclude: ['src/ui-components/**'] })],
});
