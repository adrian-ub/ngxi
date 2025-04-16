import { lookupCollection } from '@iconify/json'
import { execa } from 'execa'

import collections from '~~/collections'
import { generateLibrary } from './generate-library'
import { logger } from './utils/logger'

async function generateLibrariesFromCollections() {
  for (const collection of collections) {
    const iconifyJSON = await lookupCollection(collection)
    const libraryExist = await verifyIsLibraryExists(iconifyJSON.prefix)

    if (libraryExist) {
      logger.info(`Library ${collection} already exists`)
      continue
    }

    await generateLibrary(iconifyJSON)
  }
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
