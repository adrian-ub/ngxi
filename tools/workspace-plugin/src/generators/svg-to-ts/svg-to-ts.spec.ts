import { readProjectConfiguration, generateFiles, Tree } from '@nx/devkit';
import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { sync } from 'glob';
import * as iconsetModule from './iconsets';
import { Iconset } from './iconsets.d';
import { svgToTsGenerator } from './svg-to-ts';
import { vi, describe, it, expect, beforeEach } from 'vitest';

// Mock dependencies
vi.mock('@nx/devkit', async () => {
  const actual = await vi.importActual('@nx/devkit');
  return {
    ...actual,
    readProjectConfiguration: vi.fn(),
    generateFiles: vi.fn()
  };
});
vi.mock('glob', () => ({ sync: vi.fn() }));
vi.mock('./iconsets', () => ({ iconsets: [] }));

describe('createIconset', () => {
  let tree: Tree;
  let mockIconset: Iconset;

  beforeEach(() => {
    vi.clearAllMocks();
    tree = createTreeWithEmptyWorkspace();

    // Mock the readProjectConfiguration function
    vi.mocked(readProjectConfiguration).mockReturnValue({
      root: 'libs/test-icons',
      sourceRoot: 'libs/test-icons'
    });

    // Create a basic iconset for testing
    mockIconset = {
      internalPackageName: 'test-icons',
      files: [{
        input: 'assets/icons',
        output: 'src',
        glob: '**/*.svg',
        prefix: 'icon',
        suffix: '',
        svg: {},
        plugins: []
      }]
    };

    // Setup mock SVG files
    tree.write('assets/icons/test.svg', '<svg width="24" height="24"><path d="M12 2L2 7l10 5 10-5z"/></svg>');
    tree.write('assets/icons/nested/circle.svg', '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/></svg>');
  });

  it('should generate proper TypeScript files for each SVG icon', async () => {
    // Set up specific mocks for this test
    vi.mocked(sync).mockImplementation((pattern, options) => {
      if (pattern === '**/*.svg' && options?.cwd === 'assets/icons') {
        return ['test.svg', 'nested/circle.svg'];
      }
      return [];
    });

    // Use direct property assignment instead of mockReturnValue
    vi.mocked(iconsetModule).iconsets = [mockIconset];

    await svgToTsGenerator(tree);

    // Verify generateFiles was called for each icon with correct parameters
    expect(generateFiles).toHaveBeenCalledWith(
      tree,
      expect.stringContaining('files'),
      expect.stringContaining('libs/test-icons/src/test'),
      expect.objectContaining({
        svgFileName: 'test',
        className: 'IconTest',
        propertyName: 'iconTest'
      })
    );

    expect(generateFiles).toHaveBeenCalledWith(
      tree,
      expect.stringContaining('files'),
      expect.stringContaining('libs/test-icons/src/nested/circle'),
      expect.objectContaining({
        svgFileName: 'circle',
        className: 'IconCircle',
        propertyName: 'iconCircle'
      })
    );
  });

  it('should transform SVG content to use svg namespace', async () => {
    // Write the complex SVG to the tree
    tree.write('assets/icons/complex.svg',
      '<svg width="24" height="24">' +
      '<path d="M5 5H19V19H5z"/>' +
      '<circle cx="12" cy="12" r="5"/>' +
      '<rect x="2" y="2" width="5" height="5"/>' +
      '<g><path d="M10 10H14V14H10z"/></g>' +
      '</svg>'
    );

    // Set up specific mocks for this test
    vi.mocked(sync).mockImplementation((pattern, options) => {
      if (pattern === '**/*.svg' && options?.cwd === 'assets/icons') {
        return ['complex.svg'];
      }
      return [];
    });

    // Use direct property assignment
    vi.mocked(iconsetModule).iconsets = [mockIconset];

    await svgToTsGenerator(tree);

    // Check that generateFiles was called with properly transformed SVG content
    const svgContentParam = vi.mocked(generateFiles).mock.calls[0][3].svgContent;

    expect(svgContentParam).toContain('<svg:path');
    expect(svgContentParam).toContain('<svg:circle');
    expect(svgContentParam).toContain('<svg:rect');
    expect(svgContentParam).toContain('<svg:g>');
    expect(svgContentParam).toContain('</svg:path>');  // Added closing tag check
  });

  it('should create index.ts with exports for all icons', async () => {
    // Set up specific mocks for this test
    vi.mocked(sync).mockImplementation((pattern, options) => {
      if (pattern === '**/*.svg' && options?.cwd === 'assets/icons') {
        return ['test.svg', 'nested/circle.svg'];
      }
      return [];
    });

    // Use direct property assignment
    vi.mocked(iconsetModule).iconsets = [mockIconset];

    await svgToTsGenerator(tree);

    // Verify index file was created with proper exports
    expect(tree.read('libs/test-icons/index.ts', 'utf-8')).toContain('export * from ');
    expect(tree.read('libs/test-icons/index.ts', 'utf-8')).toContain('./src/test');
    expect(tree.read('libs/test-icons/index.ts', 'utf-8')).toContain('./src/nested/circle');
  });

  it('should apply prefix and suffix to generated icon names', async () => {
    // Set up specific mocks for this test
    vi.mocked(sync).mockImplementation((pattern, options) => {
      if (pattern === '**/*.svg' && options?.cwd === 'assets/icons') {
        return ['test.svg'];
      }
      return [];
    });

    // Update the mock iconset with prefix and suffix
    mockIconset.files[0].prefix = 'awesome';
    mockIconset.files[0].suffix = 'icon';

    // Use direct property assignment
    vi.mocked(iconsetModule).iconsets = [mockIconset];

    await svgToTsGenerator(tree);

    // Verify the prefix and suffix are applied in the generated files
    expect(generateFiles).toHaveBeenCalledWith(
      tree,
      expect.any(String),
      expect.any(String),
      expect.objectContaining({
        className: 'AwesomeTestIcon',
        propertyName: 'awesomeTestIcon'
      })
    );
  });

  it('should extract SVG attributes correctly', async () => {
    tree.write('assets/icons/attributes.svg',
      '<svg viewBox="0 0 24 24" data-test="value"></svg>'
    );

    // Set up specific mocks for this test
    vi.mocked(sync).mockImplementation((pattern, options) => {
      if (pattern === '**/*.svg' && options?.cwd === 'assets/icons') {
        return ['attributes.svg'];
      }
      return [];
    });

    // Use direct property assignment
    vi.mocked(iconsetModule).iconsets = [mockIconset];

    await svgToTsGenerator(tree);

    // Verify SVG attributes were extracted and transformed correctly
    const svgAttributes = vi.mocked(generateFiles).mock.calls[0][3].svgAttributes;

    expect(svgAttributes).toContainEqual(
      expect.objectContaining({
        originalName: 'viewBox',
        transformedName: 'viewBox',
        value: '0 0 24 24'
      })
    );
    expect(svgAttributes).toContainEqual(
      expect.objectContaining({
        originalName: 'data-test',
        transformedName: 'dataTest',
        value: 'value'
      })
    );
  });
});
