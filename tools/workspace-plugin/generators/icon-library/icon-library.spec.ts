import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import {
  readJson,
  readProjectConfiguration,
  updateJson,
  type Tree,
} from '@nx/devkit';
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
import {
  updateReference,
  filterIconifyJSONBySuffix,
  matchLongestSuffix,
} from './lib/reference';
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
      '@angular/common': '>=17.0.0',
      '@angular/core': '>=17.0.0',
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

    // The split plan lives inside meta.json (`split` key), next to the
    // release `lastModified` snapshot — package metadata stays in one file.
    const meta = readJson(tree, 'packages/fluent/meta.json');
    expect(typeof meta.lastModified).toBe('number');
    const entriesPlan = meta.split;
    // Every one of the 20 fluent suffix variants becomes an entry — tiny
    // variants (24-light has 2 icons) included; there are NO size thresholds.
    expect(entriesPlan.entries.length).toBe(20);
    expect(entriesPlan.hasBaseIcons).toBe(false);
    const twentyFilled = entriesPlan.entries.find(
      (entry: { name: string }) => entry.name === '20-filled',
    );
    expect(twentyFilled).toEqual({ name: '20-filled', suffix: '20-filled' });

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
      "import { FluentZoomOut24Filled } from '@ngxi/fluent/24-filled'",
    );
    expect(readme).toContain('template: `<svg fluentZoomOut24Filled></svg>`');
    expect(readme).toContain('color=black');

    // Workspace subpath resolution wired by the Nx generator.
    const baseTsconfig = readJson(tree, 'tsconfig.base.json');
    expect(
      baseTsconfig.compilerOptions.paths['@ngxi/fluent/20-filled'],
    ).toEqual(['./packages/fluent/20-filled/src/index.ts']);

    const projectJson = readJson(tree, 'packages/fluent/project.json');
    // The reference target always copies the FULL collection; splitting happens
    // at generation time via the meta.json `split` plan.
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
      '{projectRoot}/meta.json',
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

  it('splits an iconmind-like set into style/weight secondary entries', async () => {
    await iconLibraryGenerator(tree, {
      name: 'iconmind',
    });

    const config = readProjectConfiguration(tree, 'iconmind');
    expect(config.root).toBe('packages/iconmind');

    // The whole iconmind collection (22,7k icons) is split into six
    // style/weight secondary entries instead of one oversized primary entry.
    const entriesPlan = readJson(tree, 'packages/iconmind/meta.json').split;
    // Every non-empty Iconify suffix becomes an entry, sorted alpha.
    expect(entriesPlan.hasBaseIcons).toBe(false);
    expect(entriesPlan.entries).toEqual([
      { name: 'duotone-bold', suffix: 'duotone-bold' },
      { name: 'duotone-regular', suffix: 'duotone-regular' },
      { name: 'duotone-thin', suffix: 'duotone-thin' },
      { name: 'outline-bold', suffix: 'outline-bold' },
      { name: 'outline-regular', suffix: 'outline-regular' },
      { name: 'outline-thin', suffix: 'outline-thin' },
    ]);

    // Secondary entry files exist per entry.
    for (const entry of entriesPlan.entries) {
      const entryRoot = `packages/iconmind/${entry.name}`;
      expect(readJson(tree, `${entryRoot}/ng-package.json`)).toEqual({
        lib: { entryFile: 'src/index.ts' },
      });
      expect(tree.exists(`${entryRoot}/src/index.ts`)).toBe(true);
    }

    // Primary barrel is empty for a split set; icons live in the entries.
    expect(tree.read('packages/iconmind/src/index.ts', 'utf-8')).toBe(
      'export {};\n',
    );

    // Workspace subpath resolution wired by the Nx generator.
    const baseTsconfig = readJson(tree, 'tsconfig.base.json');
    expect(
      baseTsconfig.compilerOptions.paths['@ngxi/iconmind/duotone-bold'],
    ).toEqual(['./packages/iconmind/duotone-bold/src/index.ts']);
  });

  it('splits a suffixed collection and keeps a base variant in the primary', async () => {
    await iconLibraryGenerator(tree, { name: 'material-symbols' });

    // material-symbols declares `suffixes` AND a `""` (Regular) base variant:
    // the 5 non-empty suffixes become secondary entries and the 4k Regular
    // icons stay in the primary entry, which now renders components.
    const entriesPlan = readJson(
      tree,
      'packages/material-symbols/meta.json',
    ).split;
    expect(entriesPlan.hasBaseIcons).toBe(true);
    expect(entriesPlan.entries).toEqual([
      { name: 'outline', suffix: 'outline' },
      { name: 'outline-rounded', suffix: 'outline-rounded' },
      { name: 'outline-sharp', suffix: 'outline-sharp' },
      { name: 'rounded', suffix: 'rounded' },
      { name: 'sharp', suffix: 'sharp' },
    ]);
    // Primary barrel exports the base icons' components.
    expect(tree.read('packages/material-symbols/src/index.ts', 'utf-8')).toBe(
      "export * from './lib/icons';\n",
    );
    // Subpath resolution wired for every suffix entry.
    const baseTsconfig = readJson(tree, 'tsconfig.base.json');
    for (const entry of entriesPlan.entries) {
      expect(
        baseTsconfig.compilerOptions.paths[
          `@ngxi/material-symbols/${entry.name}`
        ],
      ).toEqual([`./packages/material-symbols/${entry.name}/src/index.ts`]);
    }
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
    it('splits every non-empty suffix into a secondary entry, no thresholds', () => {
      const names = [
        ...Array.from({ length: 400 }, (_, i) => `icon-${i}-20-filled`),
        'plain-base-icon',
      ];
      const plan = buildLibPlan('fluent', names, {
        '10-filled': '10 Filled',
        '20-filled': '20 Filled',
        '24-light': '24 Light',
      });
      expect(plan.collection).toBe('fluent');
      // Tiny and big variants split the same way; entries sorted alpha.
      expect(plan.entries).toEqual([
        { name: '10-filled', suffix: '10-filled' },
        { name: '20-filled', suffix: '20-filled' },
        { name: '24-light', suffix: '24-light' },
      ]);
      expect(plan.hasBaseIcons).toBe(true);
    });

    it('iconmind-like: style/weight suffixes become flat secondary entries', () => {
      const names = [
        ...Array.from({ length: 600 }, (_, i) => `icon-${i}-duotone-bold`),
        ...Array.from({ length: 600 }, (_, i) => `icon-${i}-outline-thin`),
      ];
      const plan = buildLibPlan('iconmind', names, {
        'duotone-bold': 'Duotone Bold',
        'outline-thin': 'Outline Thin',
      });
      expect(plan.entries).toEqual([
        { name: 'duotone-bold', suffix: 'duotone-bold' },
        { name: 'outline-thin', suffix: 'outline-thin' },
      ]);
      expect(plan.hasBaseIcons).toBe(false);
    });

    it('keeps a set without suffixes in the primary entry', () => {
      const plan = buildLibPlan(
        'ei',
        ['arrow-down', 'circle', 'layers', 'accessibility'],
        undefined,
      );
      expect(plan).toEqual({
        collection: 'ei',
        entries: [],
        hasBaseIcons: true,
      });
    });

    it('keeps base icons (no matching suffix) in the primary alongside the split', () => {
      const names = [
        ...Array.from({ length: 400 }, (_, i) => `icon-${i}-filled`),
        'plain-icon-without-suffix',
        'also-plain',
      ];
      const plan = buildLibPlan('mixed', names, { filled: 'Filled' });
      expect(plan.entries).toEqual([{ name: 'filled', suffix: 'filled' }]);
      expect(plan.hasBaseIcons).toBe(true);
    });
  });

  describe('suffix matching (lib/reference)', () => {
    const sharpDuotoneCase = {
      collection: 'keyline-icons',
      type: 'icon',
      icons: {
        'home-duotone': { body: '<path d="d0"/>' },
        'home-fill': { body: '<path d="df"/>' },
        'home-sharp-duotone': { body: '<path d="dsd"/>' },
        'home-sharp-fill': { body: '<path d="dsf"/>' },
        'home-sharp': { body: '<path d="ds"/>' },
        home: { body: '<path d="db"/>' },
      },
    } as IconifyJSON;

    it('matches the LONGEST suffix, never a shorter one that is its tail', () => {
      const suffixes = [
        'duotone',
        'fill',
        'sharp-duotone',
        'sharp-fill',
        'sharp',
      ];
      expect(matchLongestSuffix('home-sharp-duotone', suffixes)).toBe(
        'sharp-duotone',
      );
      expect(matchLongestSuffix('home-duotone', suffixes)).toBe('duotone');
      expect(matchLongestSuffix('home-sharp', suffixes)).toBe('sharp');
      expect(matchLongestSuffix('home', suffixes)).toBeNull();
    });

    it('filterIconifyJSONBySuffix keeps only the icons of one suffix variant', () => {
      const suffixes = [
        'duotone',
        'fill',
        'sharp-duotone',
        'sharp-fill',
        'sharp',
      ];
      const sharpDuotone = filterIconifyJSONBySuffix(
        sharpDuotoneCase,
        'sharp-duotone',
        suffixes,
      );
      expect(Object.keys(sharpDuotone.icons)).toEqual(['home-sharp-duotone']);

      const base = filterIconifyJSONBySuffix(sharpDuotoneCase, null, suffixes);
      expect(Object.keys(base.icons)).toEqual(['home']);
    });
  });

  describe('replan', () => {
    it('drops stale secondary entries and keeps current ones', async () => {
      await iconLibraryGenerator(tree, { name: 'fluent' });

      // Simulate the OLD split plan still on disk: the `light` family entry
      // (pre-suffix format) with its scaffold and a path mapping. A replan
      // must remove it and clean its mapping, while the 20 suffix-based
      // entries must survive.
      tree.write(
        'packages/fluent/light/ng-package.json',
        JSON.stringify({ lib: { entryFile: 'src/index.ts' } }),
      );
      tree.write(
        'packages/fluent/light/src/index.ts',
        "export * from './lib/icons';\n",
      );
      updateJson(tree, 'tsconfig.base.json', (json) => {
        json.compilerOptions.paths['@ngxi/fluent/light'] = [
          'packages/fluent/light/src/index.ts',
        ];
        return json;
      });
      updateJson(tree, 'packages/fluent/meta.json', (json) => {
        json.split.entries.push({ name: 'light', suffix: 'light' });
        return json;
      });

      // Re-run the generator: this is the replan.
      await iconLibraryGenerator(tree, { name: 'fluent' });

      // Stale entry scaffold and mapping removed by the replan.
      expect(tree.exists('packages/fluent/light/ng-package.json')).toBe(false);
      expect(
        readJson(tree, 'tsconfig.base.json').compilerOptions.paths[
          '@ngxi/fluent/light'
        ],
      ).toBeUndefined();

      // Current 20 suffix entries intact, plan still written.
      const entriesPlan = readJson(tree, 'packages/fluent/meta.json').split;
      expect(entriesPlan.entries.length).toBe(20);
      expect(entriesPlan.hasBaseIcons).toBe(false);
      for (const name of ['20-filled', '24-light', '32-light', '48-filled']) {
        expect(tree.exists(`packages/fluent/${name}/ng-package.json`)).toBe(
          true,
        );
      }
      // The Nx generator is not re-invoked for existing entries on replan
      // (idempotent), and the primary barrel stays empty for a split set.
      expect(tree.read('packages/fluent/src/index.ts', 'utf-8')).toBe(
        'export {};\n',
      );
    });

    it('collapses a replanned set back to a single primary entry', async () => {
      // Build a plan without entries by asking for a set that is unsplit
      // (lucide), then replay the generator: no secondary scaffold exists, so
      // the replan path must keep only the primary barrel.
      await iconLibraryGenerator(tree, { name: 'lucide' });

      // Force the old split plan to linger (e.g. an entry no longer in the
      // suffix plan) so the replan cleanup branch runs.
      tree.write(
        'packages/lucide/light/ng-package.json',
        JSON.stringify({ lib: { entryFile: 'src/index.ts' } }),
      );
      tree.write(
        'packages/lucide/light/src/index.ts',
        "export * from './lib/icons';\n",
      );
      updateJson(tree, 'tsconfig.base.json', (json) => {
        json.compilerOptions.paths['@ngxi/lucide/light'] = [
          'packages/lucide/light/src/index.ts',
        ];
        return json;
      });
      // The old split plan must be present for the collapse branch to find
      // stale entries (lucide has no suffixes, so a replan collapses it).
      updateJson(tree, 'packages/lucide/meta.json', (json) => {
        json.split = {
          hasBaseIcons: true,
          entries: [{ name: 'light', suffix: 'light' }],
        };
        return json;
      });

      await iconLibraryGenerator(tree, { name: 'lucide' });

      expect(tree.exists('packages/lucide/light/ng-package.json')).toBe(false);
      expect(
        readJson(tree, 'tsconfig.base.json').compilerOptions.paths[
          '@ngxi/lucide/light'
        ],
      ).toBeUndefined();
      // Unsplit set: no split plan in meta.json, primary barrel exports icons.
      expect(readJson(tree, 'packages/lucide/meta.json').split).toBeUndefined();
      expect(tree.read('packages/lucide/src/index.ts', 'utf-8')).toBe(
        "export * from './lib/icons';\n",
      );
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
