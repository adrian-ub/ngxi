import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { iconLibraryGenerator } from './icon-library';
import { IconLibraryGeneratorSchema } from './schema';

describe('icon-library generator', () => {
  let tree: Tree;
  const options: IconLibraryGeneratorSchema = {
    name: 'ub-icon',
    prefix: 'ub',
    iconsSourcePath: 'node_modules/ub-icon/icons'
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await iconLibraryGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'ub-icon');
    expect(config).toBeDefined();
  });
});
