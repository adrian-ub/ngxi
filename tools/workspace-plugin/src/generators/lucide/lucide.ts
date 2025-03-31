import { addDependenciesToPackageJson, formatFiles, Tree } from '@nx/devkit';

import { generateIcons } from '../../utils/generate-icons/generate-icons';
import { LucideGeneratorSchema } from './schema';

export async function lucideGenerator(
  tree: Tree,
  _options: LucideGeneratorSchema
) {
  addDependenciesToPackageJson(tree, {}, { lucide: 'latest' });
  const lucideLibName = 'lucide';
  const iconsSourcePath = 'node_modules/lucide-static/icons';
  await generateIcons(tree, {
    iconLibraryName: lucideLibName,
    iconsSourcePath,
    iconPrefix: 'lucide',
  });
  await formatFiles(tree);
}

export default lucideGenerator;
