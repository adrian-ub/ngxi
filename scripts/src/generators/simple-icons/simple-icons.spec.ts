import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { simpleIconsGenerator } from './simple-icons';
import { SimpleIconsGeneratorSchema } from './schema';

describe('simple-icons generator', () => {
  let tree: Tree;
  const options: SimpleIconsGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await simpleIconsGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
