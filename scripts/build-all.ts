import process from 'node:process'

import { x } from 'tinyexec'

import collections from '~~/collections'

async function buildAll() {
  for (const collection of collections) {
    console.log('------------------------------------------------------------------------------')
    console.log(`Building collection: @ngxi/${collection}`)
    console.log('------------------------------------------------------------------------------')
    await x('tsx', ['scripts/build.ts', collection], {
      nodeOptions: {
        stdio: 'inherit',
        env: {
          ...process.env,
          NODE_OPTIONS: '--max-old-space-size=8192',
        },
      },
    })
    console.log('\n')
  }
}

buildAll()
