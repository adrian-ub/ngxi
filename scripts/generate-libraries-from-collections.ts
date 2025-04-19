import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { lookupCollection } from '@iconify/json'
import pLimit from 'p-limit'

import collections from '~~/collections'
import { generateLibrary } from './generate-library'
import { logger } from './utils/logger'

const limit = pLimit(5)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

async function generateLibrariesFromCollections() {
  const libraries: string[] = []
  const tasks = collections.map(async (collection) => {
    return limit(async () => {
      const iconifyJSON = await lookupCollection(collection)
      const libraryExist = await verifyIsLibraryExists(iconifyJSON.prefix)

      if (libraryExist) {
        logger.info(`Library ${collection} already exists`)
        return
      }

      await generateLibrary(iconifyJSON)
      const libraryRoot = `packages/${iconifyJSON.prefix}`
      const libraryDir = path.resolve(__dirname, `../${libraryRoot}`)
      libraries.push(libraryDir)
    })
  })

  await Promise.all(tasks)
}

async function verifyIsLibraryExists(name: string) {
  try {
    await import(`../packages/${name}/package.json`)
    return true
  }
  catch {
    return false
  }
}

generateLibrariesFromCollections()
