import UnoCSS from '@unocss/astro'
import { defineConfig } from 'astro/config'

export default defineConfig({
  integrations: [
    UnoCSS(),
  ],
})
