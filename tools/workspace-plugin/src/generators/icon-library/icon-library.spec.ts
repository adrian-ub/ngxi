import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { iconLibraryGenerator } from './icon-library';
import { Tree, updateJson } from '@nx/devkit';
import * as iconify from '@iconify/json';
import * as createLib from './lib/create-library';

vi.mock('@iconify/json', () => ({
  lookupCollection: vi.fn(),
}));

vi.mock('./lib/create-library', () => ({
  createLibrary: vi.fn(),
}));

vi.mock('@nx/devkit', async () => {
  const actual = await vi.importActual('@nx/devkit');
  return {
    ...actual,
    updateJson: vi.fn(),
    formatFiles: vi.fn(),
  };
});

describe('iconLibraryGenerator', () => {
  const mockTree = {} as Tree;
  const options = { name: 'heroicons' };

  beforeEach(() => {
    vi.clearAllMocks();

    (iconify.lookupCollection as Mock).mockResolvedValue({
      prefix: 'heroicons',
      icons: {},
    });

    (updateJson as Mock).mockImplementation((_tree, _path, updater) => {
      const initial = ['lucide'];
      const result = updater(initial);
      expect(result).toContain('heroicons');
      expect(result).toContain('lucide');
    });
  });

  it('should lookup the icon collection, create the library and update icon-sets', async () => {
    await iconLibraryGenerator(mockTree, options);

    expect(iconify.lookupCollection).toHaveBeenCalledWith('heroicons');
    expect(createLib.createLibrary).toHaveBeenCalled();
    expect(updateJson).toHaveBeenCalledWith(
      mockTree,
      'tools/workspace-plugin/src/generators/svg-to-ts/icon-sets.json',
      expect.any(Function)
    );
  });
});
