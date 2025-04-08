import { formatFiles, Tree, updateJson } from '@nx/devkit';
import { lookupCollection } from '@iconify/json';

import { IconLibraryGeneratorSchema } from './schema';
import { createLibrary } from './lib/create-library';
import { updateReadme } from './lib/update-readme';

export async function iconLibraryGenerator(
  tree: Tree,
  options: IconLibraryGeneratorSchema
) {
  const collection = await lookupCollection(options.name);
  await createLibrary(tree, collection);
  updateJson(tree, 'tools/workspace-plugin/src/generators/svg-to-ts/icon-sets.json', (json) => {
    const newIconsets = [...json, options.name].sort();
    return newIconsets;
  });

  updateReadme(tree);

  await formatFiles(tree);
}

export default iconLibraryGenerator;
