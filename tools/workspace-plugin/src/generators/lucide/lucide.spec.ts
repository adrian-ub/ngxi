import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { iconLibraryGenerator } from '../icon-library/icon-library';
import { lucideGenerator } from './lucide';
import { LucideGeneratorSchema } from './schema';

vi.mock('../../utils/generate-icons/generate-icons', () => ({
  generateIcons: vi.fn().mockResolvedValue(undefined),
}));

describe('lucide generator', () => {
  let tree: Tree;
  const options: LucideGeneratorSchema = {};

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await iconLibraryGenerator(tree, {
      name: 'lucide',
      prefix: 'lucide',
      iconsSourcePath: 'node_modules/lucide-static/icons',
    });
    await lucideGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'lucide');
    expect(config).toBeDefined();
  });
});
