import { formatFiles, Tree } from '@nx/devkit';

import { IconLibraryGeneratorSchema } from './schema';
import { generateIconLibrary } from './lib/generate-icon-library';
import { addIconSet } from './lib/add-iconset';

export async function iconLibraryGenerator(
  tree: Tree,
  options: IconLibraryGeneratorSchema
) {
  await generateIconLibrary(tree, options);
  addIconSet(tree, options);
  await formatFiles(tree);
}

export default iconLibraryGenerator;
