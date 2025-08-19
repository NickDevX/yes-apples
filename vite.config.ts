import { defineConfig } from 'vite';
import Inspect from 'vite-plugin-inspect';
import glob from 'fast-glob';
import autoprefixer from 'autoprefixer';

const jsEntries = glob.sync('./src/js/*.js');
const scssEntries = glob.sync('./src/scss/*.scss');

export default defineConfig({
  plugins: [Inspect()],
  build: {
    outDir: 'assets',
    emptyOutDir: false,
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'esbuild',
    rollupOptions: {
      input: [...jsEntries, ...scssEntries],
      output: {
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
