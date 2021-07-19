import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginComponents, { AntDesignVueResolver } from 'vite-plugin-components';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePluginComponents({
      customComponentResolvers: [
        AntDesignVueResolver(),
      ],
    }),
    legacy({
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
    }),
  ],
});
