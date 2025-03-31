import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { svgToTsGenerator } from './svg-to-ts';
import { SvgToTsGeneratorSchema } from './schema';

describe('svg-to-ts generator', () => {
  let tree: Tree;
  const options: SvgToTsGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await svgToTsGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
