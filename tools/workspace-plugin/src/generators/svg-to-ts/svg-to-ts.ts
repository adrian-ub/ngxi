import { formatFiles, Tree } from '@nx/devkit';
import { lookupCollection } from '@iconify/json';
import iconsets from './icon-sets.json';
import { deleteOldIconset } from './lib/delete-old-iconset';
import { createIconset } from './lib/create-iconset';

export async function svgToTsGenerator(tree: Tree) {
  for (const iconset of iconsets) {
    const collection = await lookupCollection(iconset);
    await deleteOldIconset(tree, collection);
    await createIconset(tree, collection);
  }

  await formatFiles(tree);
}

export default svgToTsGenerator;
