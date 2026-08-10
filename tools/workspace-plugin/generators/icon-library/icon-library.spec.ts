import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { readJson, readProjectConfiguration, type Tree } from '@nx/devkit';
import { mkdirSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import type { IconifyJSON } from '@iconify/types';

import { iconLibraryGenerator, buildLibPlan } from './icon-library';
import type { IconLibraryGeneratorSchema } from './schema';
import {
  extractSvgBody,
  extractSvgRootAttributes,
  hoistPresentationAttributes,
  prefixSvgTags,
} from './lib/svg-component';
import { updateReference } from './lib/reference';
import { iconComponentName, iconComponentSelector } from './lib/naming';

describe('icon-library generator', () => {
  let tree: Tree;

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('throws an error when the icon set does not exist', async () => {
    const options: IconLibraryGeneratorSchema = {
      name: 'definitely-not-a-real-iconset-xyz',
    };

    await expect(iconLibraryGenerator(tree, options)).rejects.toThrow(
      /does not exist/,
    );
  });

  it('creates a publishable library without copying the icon-set.json reference', async () => {
    const options: IconLibraryGeneratorSchema = { name: 'ei' };
    await iconLibraryGenerator(tree, options);

    const config = readProjectConfiguration(tree, 'ei');
    expect(config.root).toBe('packages/ei');

    // The generator no longer writes the Iconify reference; `pnpm generate-icons ei`
    // copies packages/ei/icon-set.json from @iconify/json on demand.
    expect(tree.exists('packages/ei/icon-set.json')).toBe(false);

    const packageJson = readJson(tree, 'packages/ei/package.json');
    expect(packageJson.license).toBe('MIT');
    expect(packageJson.author).toBe('Adrián UB');
    expect(packageJson.repository.url).toContain('github.com/adrian-ub/ngxi');
    expect(packageJson.peerDependencies).toEqual({
      '@angular/common': '^22.0.0',
      '@angular/core': '^22.0.0',
    });
    expect(packageJson.dependencies).toEqual({ tslib: '^2.3.0' });

    const tsconfig = readJson(tree, 'packages/ei/tsconfig.json');
    expect(tsconfig.compilerOptions.lib).toEqual(['es2022', 'dom']);

    // The library exposes a `generate-icons` target that the `build` target
    // depends on, so `nx build ei` refreshes the reference and generates the
    // icon components first (caching lives in nx.json targetDefaults).
    const projectJson = readJson(tree, 'packages/ei/project.json');
    expect(projectJson.targets['update-reference']).toEqual({
      executor: 'nx:run-commands',
      cache: true,
      inputs: [
        '{workspaceRoot}/node_modules/@iconify/json/package.json',
        '{workspaceRoot}/node_modules/@iconify/json/json/ei.json',
      ],
      outputs: ['{projectRoot}/icon-set.json'],
      options: {
        command: 'tsx tools/generate-icons/index.ts ei --reference-only',
        cwd: '{workspaceRoot}',
      },
    });
    expect(projectJson.targets['generate-icons']).toEqual({
      executor: 'nx:run-commands',
      cache: true,
      dependsOn: ['update-reference'],
      inputs: [
        '{projectRoot}/icon-set.json',
        '{workspaceRoot}/tools/generate-icons/**/*',
        '{workspaceRoot}/tools/workspace-plugin/generators/icon-library/lib/**/*',
      ],
      outputs: ['{projectRoot}/src/lib/icons', '{projectRoot}/README.md'],
      options: {
        command:
          'ulimit -n 65536 && NODE_OPTIONS="--max-old-space-size=8192" tsx tools/generate-icons/index.ts ei',
        cwd: '{workspaceRoot}',
      },
    });
    expect(projectJson.targets.build.dependsOn).toContain('generate-icons');

    // The generator renders no static base files: every icon component is
    // self-contained and generated later by the `generate-icons` target.
    for (const baseFile of [
      'types.ts',
      'ei-dynamic-icon.ts',
      'ei-icon-base.ts',
      'ei-icon-template.ts',
    ]) {
      expect(tree.exists(join('packages/ei/src/lib', baseFile))).toBe(false);
    }

    // The public barrel only re-exports the generated icon components (a
    // single-entry set also exports ./lib/icons).
    expect(tree.read('packages/ei/src/index.ts', 'utf-8')).toBe(
      "export * from './lib/icons';\n",
    );

    // The generator does NOT generate icon components; `pnpm generate-icons ei`
    // fills src/lib/icons afterwards.
    expect(tree.exists('packages/ei/src/lib/icons')).toBe(false);
    expect(tree.exists('packages/ei/src/lib/lucide-icon-base.ts')).toBe(false);
    expect(tree.exists('packages/ei/src/lib/ei')).toBe(false);

    // The README is data-driven: scaffolded right away from the @iconify/json
    // reference (set info, sample icon, Angular brand badges) and refreshed by
    // `generate-icons` from icon-set.json — never an Nx placeholder.
    const readme = tree.read('packages/ei/README.md', 'utf-8');
    expect(readme).toContain('# @ngxi/ei');
    expect(readme).toContain('Name: Evil Icons');
    expect(readme).toContain('License: MIT');
    expect(readme).toContain("import { EiPaperclip } from '@ngxi/ei'");
    expect(readme).toContain('template: `<svg eiPaperclip></svg>`');
    expect(readme).toContain('color=black');
  });

  it('splits a large collection into secondary entry points via the Nx generator', async () => {
    await iconLibraryGenerator(tree, {
      name: 'fluent',
    });

    // ONE library for the whole collection, with the split expressed as
    // secondary entry points instead of separate packages.
    const config = readProjectConfiguration(tree, 'fluent');
    expect(config.root).toBe('packages/fluent');

    const entriesPlan = readJson(tree, 'packages/fluent/icon-entries.json');
    expect(entriesPlan.collection).toBe('fluent');
    expect(entriesPlan.entries.length).toBeGreaterThanOrEqual(5);
    const twentyFilled = entriesPlan.entries.find(
      (entry: { name: string }) => entry.name === '20-filled',
    );
    expect(twentyFilled).toEqual({ name: '20-filled', filter: '*-20-filled' });

    // Secondary entries scaffolded by @nx/angular:library-secondary-entry-point:
    // <entry>/ng-package.json + <entry>/src/index.ts (Nx template), NOT manual files.
    expect(readJson(tree, 'packages/fluent/20-filled/ng-package.json')).toEqual(
      { lib: { entryFile: 'src/index.ts' } },
    );
    expect(tree.exists('packages/fluent/20-filled/src/index.ts')).toBe(true);
    expect(tree.exists('packages/fluent/20-filled/README.md')).toBe(true);

    // The library README is data-driven too: scaffolded from the reference,
    // with the usage example importing from a secondary entry (split set).
    const readme = tree.read('packages/fluent/README.md', 'utf-8');
    expect(readme).toContain('# @ngxi/fluent');
    expect(readme).toContain(
      "import { Fluent24FilledZoomOut24Filled } from '@ngxi/fluent/24-filled'",
    );
    expect(readme).toContain(
      'template: `<svg fluent24FilledZoomOut24Filled></svg>`',
    );
    expect(readme).toContain('color=black');

    // Workspace subpath resolution wired by the Nx generator.
    const baseTsconfig = readJson(tree, 'tsconfig.base.json');
    expect(
      baseTsconfig.compilerOptions.paths['@ngxi/fluent/20-filled'],
    ).toEqual(['./packages/fluent/20-filled/src/index.ts']);

    const projectJson = readJson(tree, 'packages/fluent/project.json');
    // The reference target always copies the FULL collection; splitting happens
    // at generation time via icon-entries.json.
    expect(projectJson.targets['update-reference']).toEqual({
      executor: 'nx:run-commands',
      cache: true,
      inputs: [
        '{workspaceRoot}/node_modules/@iconify/json/package.json',
        '{workspaceRoot}/node_modules/@iconify/json/json/fluent.json',
      ],
      outputs: ['{projectRoot}/icon-set.json'],
      options: {
        command: 'tsx tools/generate-icons/index.ts fluent --reference-only',
        cwd: '{workspaceRoot}',
      },
    });
    expect(projectJson.targets['generate-icons'].dependsOn).toContain(
      'update-reference',
    );
    expect(projectJson.targets['generate-icons'].inputs).toContain(
      '{projectRoot}/icon-entries.json',
    );
    expect(projectJson.targets['generate-icons'].outputs).toEqual([
      ...entriesPlan.entries.map(
        (entry: { name: string }) =>
          `{projectRoot}/${entry.name}/src/lib/icons`,
      ),
      '{projectRoot}/README.md',
    ]);
    expect(projectJson.targets.build.dependsOn).toContain('generate-icons');

    // The generator renders no shared base files into the primary...
    expect(tree.exists('packages/fluent/src/lib/fluent-icon-base.ts')).toBe(
      false,
    );
    expect(tree.exists('packages/fluent/src/lib/types.ts')).toBe(false);
    // ...and the primary barrel is empty for a split set (the icons live in
    // the secondary entries).
    expect(tree.read('packages/fluent/src/index.ts', 'utf-8')).toBe(
      'export {};\n',
    );

    // Each secondary entry gets its icons-only barrel; nothing is duplicated
    // into it, and no icon component is generated at scaffold time.
    expect(tree.read('packages/fluent/20-filled/src/index.ts', 'utf-8')).toBe(
      "export * from './lib/icons';\n",
    );
    expect(tree.exists('packages/fluent/20-filled/src/lib')).toBe(false);
    expect(tree.exists('packages/fluent/src/lib/icons')).toBe(false);
  });

  it('applies the reference filter to the written icon-set.json', async () => {
    const tempRoot = join(tmpdir(), 'icon-library-filter');
    rmSync(tempRoot, { recursive: true, force: true });
    mkdirSync(tempRoot, { recursive: true });

    updateReference(tempRoot, 'fluent', '*-20-filled');
    const data = JSON.parse(
      readFileSync(join(tempRoot, 'icon-set.json'), 'utf-8'),
    ) as IconifyJSON;
    const names = Object.keys(data.icons);
    expect(names.length).toBeGreaterThan(1000);
    expect(names.every((name) => name.endsWith('-20-filled'))).toBe(true);
  });

  it('svg-component helpers extract root attrs and hoist presentation attributes', () => {
    const svg =
      '<svg width="32" height="28" viewBox="0 0 24 24"><path fill="red" d="M1 2"/><path fill="red" d="M4 5"/></svg>';

    expect(extractSvgRootAttributes(svg)).toEqual({
      width: '32',
      height: '28',
      viewBox: '0 0 24 24',
    });

    const { body, hoisted } = hoistPresentationAttributes(extractSvgBody(svg));
    expect(hoisted).toEqual({ fill: 'red' });
    expect(body).toBe('<path d="M1 2"/><path d="M4 5"/>');
    expect(prefixSvgTags(body)).toBe(
      '<svg:path d="M1 2"/><svg:path d="M4 5"/>',
    );
  });

  describe('buildLibPlan', () => {
    function suffixed(size: number, family: string, count: number): string[] {
      return Array.from(
        { length: count },
        (_, i) => `icon-${i}-${size}-${family}`,
      );
    }

    it('splits a fluent-like set into per-size/family secondary entries', () => {
      const names = [
        ...suffixed(20, 'filled', 400),
        ...suffixed(24, 'filled', 400),
        ...suffixed(48, 'filled', 400),
        ...suffixed(20, 'regular', 300),
      ];
      const plan = buildLibPlan('fluent', names);
      expect(plan.collection).toBe('fluent');
      expect(plan.entries).toEqual([
        { name: '20-filled', filter: '*-20-filled' },
        { name: '24-filled', filter: '*-24-filled' },
        { name: '48-filled', filter: '*-48-filled' },
        { name: 'regular', filter: '*-regular' },
      ]);
    });

    it('keeps a set without size/family suffixes in the primary entry', () => {
      const plan = buildLibPlan('ei', [
        'arrow-down',
        'circle',
        'layers',
        'accessibility',
      ]);
      expect(plan).toEqual({ collection: 'ei', entries: [] });
    });

    it('keeps a mixed set in the primary entry (leftovers cannot be filtered)', () => {
      const names = [
        ...suffixed(20, 'filled', 400),
        'plain-icon-without-suffix',
      ];
      const plan = buildLibPlan('mixed', names);
      expect(plan.entries).toEqual([]);
    });
  });

  describe('per-set naming', () => {
    it('derives component names and selectors from the set id', () => {
      expect(iconComponentName('material-symbols', 'home')).toBe(
        'MaterialSymbolsHome',
      );
      expect(iconComponentSelector('material-symbols', 'home')).toBe(
        'svg[materialSymbolsHome]',
      );
    });

    it('does not render static base files for any set id', async () => {
      await iconLibraryGenerator(tree, { name: 'material-symbols' });

      for (const baseFile of [
        'material-symbols-icon-base.ts',
        'material-symbols-dynamic-icon.ts',
        'material-symbols-icon-template.ts',
        'types.ts',
      ]) {
        expect(
          tree.exists(`packages/material-symbols/src/lib/${baseFile}`),
        ).toBe(false);
      }
      // The name-based icons registry/provider was removed; icons are used by
      // importing their component.
      expect(
        tree.exists(
          'packages/material-symbols/src/lib/material-symbols-icons.ts',
        ),
      ).toBe(false);
    });

    it('keeps lucide as a single primary entry with no static base files', async () => {
      await iconLibraryGenerator(tree, { name: 'lucide' });

      expect(tree.exists('packages/lucide/src/lib/lucide-icon-base.ts')).toBe(
        false,
      );
      expect(tree.read('packages/lucide/src/index.ts', 'utf-8')).toBe(
        "export * from './lib/icons';\n",
      );
    });
  });
});
