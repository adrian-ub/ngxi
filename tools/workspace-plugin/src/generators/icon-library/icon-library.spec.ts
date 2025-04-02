import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';
import { vi, describe, beforeEach, it, expect, afterEach } from 'vitest';
import { iconLibraryGenerator } from './icon-library';
import { IconLibraryGeneratorSchema } from './schema';
import * as generateIconLibraryModule from './lib/generate-icon-library';
import * as devkitModule from '@nx/devkit';

describe('icon-library generator', () => {
  let tree: Tree;
  const options: IconLibraryGeneratorSchema = {
    name: 'ub-icon',
    internalPackageName: 'ub-icons-internal',
    input: 'node_modules/ub-icon/icons',
    output: 'dist/libs/ub-icon',
    glob: '**/*.svg',
    prefix: 'ub',
    suffix: ''
  };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await iconLibraryGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'ub-icon');
    expect(config).toBeDefined();
  });

  it('should generate project with different name and prefix', async () => {
    const customOptions: IconLibraryGeneratorSchema = {
      ...options,
      name: 'custom-icon',
      prefix: 'custom',
    };

    await iconLibraryGenerator(tree, customOptions);
    const config = readProjectConfiguration(tree, 'custom-icon');
    expect(config).toBeDefined();
  });

  it('should call generateIconLibrary with correct parameters', async () => {
    const generateIconLibrarySpy = vi.spyOn(generateIconLibraryModule, 'generateIconLibrary');

    await iconLibraryGenerator(tree, options);

    expect(generateIconLibrarySpy).toHaveBeenCalledWith(tree, options);
  });

  it('should call formatFiles after generating icon library', async () => {
    const formatFilesSpy = vi.spyOn(devkitModule, 'formatFiles');

    await iconLibraryGenerator(tree, options);

    expect(formatFilesSpy).toHaveBeenCalledWith(tree);
  });

  it('should handle errors from generateIconLibrary', async () => {
    const error = new Error('Generation failed');
    vi.spyOn(generateIconLibraryModule, 'generateIconLibrary').mockImplementation(() => {
      return Promise.reject(error);
    });

    await expect(iconLibraryGenerator(tree, options)).rejects.toThrow('Generation failed');
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
});
