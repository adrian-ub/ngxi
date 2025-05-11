import type { Tree } from '@nx/devkit'
import type { IconLibraryGeneratorSchema } from './schema'

import { hasCollection } from '@internal/collections'

import { formatFiles, getProjects, logger } from '@nx/devkit'

import { generateIconLibrary } from './utils/generate-icon-library'

export async function iconLibraryGenerator(tree: Tree, options: IconLibraryGeneratorSchema) {
  if (!hasCollection(options.name)) {
    throw new Error(`Collection ${options.name} not found in iconify collections`)
  }

  const projects = getProjects(tree)
  if (projects.has(options.name)) {
    logger.info(`Icon Library ${options.name} already exists`)
    return
  }

  await generateIconLibrary(tree, options)

  await formatFiles(tree)
}

export default iconLibraryGenerator
