import { addDependenciesToPackageJson, formatFiles, Tree } from '@nx/devkit';

import { generateIcons } from '../../utils/generate-icons/generate-icons';
import { SimpleIconsGeneratorSchema } from './schema';

export async function simpleIconsGenerator(
  tree: Tree,
  _options: SimpleIconsGeneratorSchema
) {
  addDependenciesToPackageJson(tree, {}, { 'simple-icons': 'latest' });
  const simpleIconsLibName = 'simple-icons';
  const iconsSourcePath = 'node_modules/simple-icons/icons';
  await generateIcons(tree, {
    iconLibraryName: simpleIconsLibName,
    iconsSourcePath,
    iconPrefix: 'si',
  });
  await formatFiles(tree);
}

export default simpleIconsGenerator;
