import angular from '@analogjs/vite-plugin-angular'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: ['esnext'],
    sourcemap: true,
    lib: {
      entry: 'src/index.ts',
      fileName: `index`,
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^@angular\/.*/, 'rxjs', 'rxjs/operators'],
      output: {
        preserveModules: false,
      },
    },
    cssCodeSplit: false,
    cssMinify: true,
    minify: false,
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    angular(),
  ],
})
