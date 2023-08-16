import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sass from 'sass';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  resolve: {
    alias: {
      '@src': './src',
      '@adapters': './src/adapters',
      '@components': './src/components',
      '@hooks': './src/hooks',
      '@interceptors': './src/interceptors',
      '@layout': './src/layout',
      '@models': './src/models',
      '@pages': './src/pages',
      '@redux': './src/redux',
      '@routes': './src/routes',
      '@services': './src/services',
      '@styledComponents': './src/styled-components',
      '@utilities': './src/utilities',
    }
  }
})
