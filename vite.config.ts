import { defineConfig } from 'vite'
import path from 'path';
import vue from '@vitejs/plugin-vue'
import markdown from './plugin-markdown/src/index';
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    }
  },
  define: {
    __APP_VERSION_SHADOWS__: 100
  },
  plugins: [
    vue(),
    markdown(),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ]
});
