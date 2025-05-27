/// <reference types="vitest" />

import analog from '@analogjs/platform'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import dayjs from 'dayjs'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    root: __dirname,
    cacheDir: `../node_modules/.vite`,
    build: {
      outDir: '../dist/./docs/client',
      reportCompressedSize: true,
      target: ['es2020'],
    },
    server: {
      fs: {
        allow: ['.'],
      },
    },
    plugins: [
      UnoCSS(),
      analog({
        vite: {
          experimental: {
            supportAnalogFormat: true,
          },
        },
      }),
      nxViteTsPaths(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
      '__BUILD_TIME__': JSON.stringify(dayjs().format('YYYY/MM/DD HH:mm')),
    },
  }
})
