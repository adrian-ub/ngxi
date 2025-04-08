import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { svgToTsGenerator } from './svg-to-ts';
import { Tree } from '@nx/devkit';

import * as deleteOld from './lib/delete-old-iconset';
import * as createIconset from './lib/create-iconset';
import * as json from '@iconify/json';

vi.mock('@iconify/json', async () => {
  const actual = await vi.importActual('@iconify/json');
  return {
    ...actual,
    lookupCollection: vi.fn(),
  };
});

vi.mock('./lib/delete-old-iconset', () => ({
  deleteOldIconset: vi.fn(),
}));

vi.mock('./lib/create-iconset', () => ({
  createIconset: vi.fn(),
}));

vi.mock('@nx/devkit', async () => {
  const actual = await vi.importActual('@nx/devkit');
  return {
    ...actual,
    formatFiles: vi.fn(),
  };
});

vi.mock('./icon-sets.json', () => ({
  default: ['heroicons', 'lucide'],
}));

describe('svgToTsGenerator', () => {
  const mockTree = {
    write: vi.fn(),
    delete: vi.fn(),
  } as unknown as Tree;



  beforeEach(() => {
    vi.clearAllMocks();

    (json.lookupCollection as Mock).mockImplementation(async (prefix: string) => ({
      prefix,
      icons: { sample: {} },
    }));
  });

  it('should call delete and create functions for each iconset', async () => {
    await svgToTsGenerator(mockTree);

    expect(json.lookupCollection).toHaveBeenCalledTimes(2);
    expect(deleteOld.deleteOldIconset).toHaveBeenCalledTimes(2);
    expect(createIconset.createIconset).toHaveBeenCalledTimes(2);
  });

  it('should call formatFiles at the end', async () => {
    const { formatFiles } = await import('@nx/devkit');
    await svgToTsGenerator(mockTree);
    expect(formatFiles).toHaveBeenCalledWith(mockTree);
  });
});
