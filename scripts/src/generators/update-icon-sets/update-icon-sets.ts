import type { Tree } from '@nx/devkit'

import jc from '@iconify/json/collections.json'
import { formatFiles } from '@nx/devkit'

export async function updateCollectionsGenerator(tree: Tree) {
  tree.write('collections/src/lib/icon-sets.json', `${JSON.stringify(Object.keys(jc).sort(), null, 2)}\n`)
  await formatFiles(tree)
}

export default updateCollectionsGenerator
