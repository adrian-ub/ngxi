import antfu from '@antfu/eslint-config'
import { collections } from './collections/src/lib/collections'

export default antfu({
  formatters: true,
  astro: true,
  ignores: [
    ...collections.flatMap(collection => [
      `packages/${collection}/**/index.ts`,
      `packages/${collection}/**/chunks/*.ts`,
    ]),
    'docs/.astro',
  ],
})
