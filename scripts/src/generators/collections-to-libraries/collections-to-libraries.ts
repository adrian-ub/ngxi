import type { Tree } from '@nx/devkit'

import { collections } from '@ngxi/collections'
import { readProjectConfiguration } from '@nx/devkit'
import ora from 'ora'

import { x } from 'tinyexec'

function existLibrary(tree: Tree, name: string) {
  try {
    readProjectConfiguration(tree, name)
    return true
  }
  catch {
    return false
  }
}

export async function collectionsToLibrariesGenerator(tree: Tree) {
  for (const collection of collections) {
    const isExistLibraryIcon = existLibrary(tree, collection)
    if (isExistLibraryIcon) {
      continue
    }

    const spinner = ora(`Generating ${collection} library...`).start()

    try {
      await x('nx', ['g', '@ngxi/scripts:icon-library', collection], {
        nodeOptions: {
          stdio: 'pipe',
        },
      })
      spinner.succeed(`Generated ${collection} library`)
    }
    catch (error) {
      spinner.fail(`Failed to generate ${collection} library`)
      console.error(error)
    }
  }
}

export default collectionsToLibrariesGenerator
