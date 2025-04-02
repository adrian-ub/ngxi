import { describe, it, expect, vi, beforeEach } from 'vitest';
import { Tree } from '@nx/devkit';
import { iconLibraryGenerator } from './icon-library';
import { generateIconLibrary } from './lib/generate-icon-library';
import { addIconSet } from './lib/add-iconset';
import { formatFiles } from '@nx/devkit';

vi.mock('./lib/generate-icon-library', () => ({
  generateIconLibrary: vi.fn().mockResolvedValue(undefined)
}));

vi.mock('./lib/add-iconset', () => ({
  addIconSet: vi.fn()
}));

vi.mock('@nx/devkit', () => ({
  formatFiles: vi.fn().mockResolvedValue(undefined),
  Tree: vi.fn()
}));

describe('iconLibraryGenerator', () => {
  const mockTree = {} as Tree;
  const mockOptions = {
    name: 'test-icons',
    internalPackageName: 'test-package',
    input: 'src/icons',
    output: 'dist/icons',
    glob: '**/*.svg'
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should call generateIconLibrary with the tree and options', async () => {
    await iconLibraryGenerator(mockTree, mockOptions);

    expect(generateIconLibrary).toHaveBeenCalledWith(mockTree, mockOptions);
  });

  it('should call addIconSet with the tree and options', async () => {
    await iconLibraryGenerator(mockTree, mockOptions);

    expect(addIconSet).toHaveBeenCalledWith(mockTree, mockOptions);
  });

  it('should call formatFiles with the tree', async () => {
    await iconLibraryGenerator(mockTree, mockOptions);

    expect(formatFiles).toHaveBeenCalledWith(mockTree);
  });
});
