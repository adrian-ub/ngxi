import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { simpleIconsGenerator } from './simple-icons';
import { SimpleIconsGeneratorSchema } from './schema';
import iconLibraryGenerator from '../icon-library/icon-library';

vi.mock('../../utils/generate-icons/generate-icons', () => ({
  generateIcons: vi.fn().mockResolvedValue(undefined),
}));

describe('simple-icons generator', () => {
  let tree: Tree;
  const options: SimpleIconsGeneratorSchema = {};

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await iconLibraryGenerator(tree, {
      name: 'simple-icons',
      prefix: 'si',
      iconsSourcePath: 'node_modules/simple-icons/icons',
    });
    await simpleIconsGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'simple-icons');
    expect(config).toBeDefined();
  });
});
