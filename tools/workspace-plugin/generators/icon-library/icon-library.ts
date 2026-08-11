import {
  formatFiles,
  generateFiles,
  joinPathFragments,
  logger,
  type Tree,
  updateJson,
  writeJson,
} from '@nx/devkit';
import {
  libraryGenerator,
  librarySecondaryEntryPointGenerator,
  UnitTestRunner,
} from '@nx/angular/generators';
import { lookupCollection, lookupCollections } from '@iconify/json';
import type { IconifyJSON } from '@iconify/types';
import type { IconLibraryGeneratorSchema } from './schema';
import type { IconEntriesFile } from './lib/reference';
import {
  kebabToCamelCase,
  kebabToPascalCase,
  kebabToUpperSnakeCase,
} from './lib/naming';
import { buildReadme } from './lib/generate-readme';

/** `accessibility-20-filled` -> base `accessibility`, size `20`, family `filled`. */
const FAMILY_SIZE_PATTERN = /^(.+)-(\d+)-([a-z][a-z0-9]*)$/;

/** A family needs at least this many size-suffixed icons to be recognized. */
const MIN_FAMILY_ICONS = 200;

/** Families below this total collapse to one `<family>` secondary entry. */
const FAMILY_COLLAPSE_THRESHOLD = 1000;

/**
 * A secondary entry point of an icon library. Each entry is a self-contained
 * module under `src/<name>/` (its own `ng-package.json`, barrel and icon
 * components) holding the icons whose name matches `filter`, importable as
 * `@ngxi/<collection>/<name>`.
 */
export interface IconEntryPlan {
  /** Entry name, e.g. `20-filled` or `filled`. */
  name: string;
  /** Icon-name glob restricting the icons in this entry, e.g. `*-20-filled`. */
  filter: string;
}

/**
 * The library plan for one Iconify collection: a single publishable package
 * (`@ngxi/<collection>`) plus, when the set has a `-<size>-<family>` structure,
 * secondary entry points that split it into modules small enough to fit ngc's
 * memory budget.
 */
export interface IconLibraryPlan {
  /** Iconify collection id, e.g. `fluent` (also the library name). */
  collection: string;
  /**
   * Secondary entry points. Empty means the whole collection lives in the
   * library's primary entry (`src/`) and nothing is split.
   */
  entries: IconEntryPlan[];
}

/**
 * Derives the library plan for a collection from its icon names.
 *
 * - Sets whose icons carry `-<size>-<family>` suffixes (e.g. fluent:
 *   `accessibility-20-filled`) are split into one secondary entry per
 *   size/family (or one per family when the family is small), each with its
 *   own filter.
 * - Sets without that structure (e.g. `ei`, `lucide`) stay in the primary
 *   entry.
 * - Mixed sets (some structured families plus leftovers without a suffix) stay
 *   in the primary entry: an include-only filter cannot represent the leftover
 *   subset without duplicating the structured icons.
 */
export function buildLibPlan(
  collection: string,
  iconNames: string[],
): IconLibraryPlan {
  const familySizes = new Map<string, Map<string, number>>();
  for (const iconName of iconNames) {
    const match = FAMILY_SIZE_PATTERN.exec(iconName);
    if (match) {
      const [, , size, family] = match;
      let sizes = familySizes.get(family);
      if (!sizes) {
        sizes = new Map();
        familySizes.set(family, sizes);
      }
      sizes.set(size, (sizes.get(size) ?? 0) + 1);
    }
  }

  const qualifiedFamilies = [...familySizes.entries()]
    .filter(
      ([, sizes]) =>
        [...sizes.values()].reduce((a, b) => a + b, 0) >= MIN_FAMILY_ICONS,
    )
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([family, sizes]) => ({
      family,
      sizes: new Map(
        [...sizes.entries()].sort(([a], [b]) => Number(a) - Number(b)),
      ),
    }));

  if (qualifiedFamilies.length === 0) {
    return { collection, entries: [] };
  }

  const qualified = new Set(qualifiedFamilies.map(({ family }) => family));
  const leftover = iconNames.filter((iconName) => {
    const match = FAMILY_SIZE_PATTERN.exec(iconName);
    return !match || !qualified.has(match[3]);
  });
  if (leftover.length > 0) {
    // Cannot express "everything except the split families" with an include
    // glob without duplicating the structured icons. Stay in the primary entry.
    return { collection, entries: [] };
  }

  const entries: IconEntryPlan[] = [];
  for (const { family, sizes } of qualifiedFamilies) {
    const total = [...sizes.values()].reduce((a, b) => a + b, 0);
    if (total < FAMILY_COLLAPSE_THRESHOLD || sizes.size === 1) {
      entries.push({ name: family, filter: `*-${family}` });
    } else {
      for (const size of sizes.keys()) {
        entries.push({
          name: `${size}-${family}`,
          filter: `*-${size}-${family}`,
        });
      }
    }
  }
  return { collection, entries };
}

async function scaffoldLib(
  tree: Tree,
  collection: string,
  iconSet: IconifyJSON,
  license: string,
  plan: IconLibraryPlan,
): Promise<void> {
  const packageDir = `packages/${collection}`;
  await libraryGenerator(tree, {
    name: collection,
    directory: packageDir,
    importPath: `@ngxi/${collection}`,
    publishable: true,
    prefix: iconSet.prefix ?? 'ngxi',
    strict: true,
    // Icon libraries are fully generated: every component is data-driven from
    // icon-set.json, so they have no hand-written sources to lint or test. Skip
    // the lint/test scaffolding entirely instead of generating dead targets.
    linter: 'none',
    unitTestRunner: UnitTestRunner.None,
    skipModule: true,
    addModuleSpec: false,
    skipFormat: true,
  });

  // Drop the default `src/lib/<name>` component scaffold; the templates fill
  // `src/lib` (primary entry) or `<entry>/src/lib` afterwards.
  tree.delete(joinPathFragments(packageDir, 'src/lib', collection));

  // Drop Nx's generic scaffold README: the library ships a data-driven README
  // rendered from the @iconify/json reference (iconLibraryGenerator writes it
  // after formatting) and kept current by the `generate-icons` target.
  if (tree.exists(joinPathFragments(packageDir, 'README.md'))) {
    tree.delete(joinPathFragments(packageDir, 'README.md'));
  }

  const setName = collection;
  const substitutions = {
    tmpl: '',
    setName,
    camel: kebabToCamelCase(setName),
    pascal: kebabToPascalCase(setName),
    upper: kebabToUpperSnakeCase(setName),
  };

  // No static base files: every icon component is data-driven and
  // self-contained (SVG body inline in its template). The icon components in
  // `src/lib/icons` are generated later by the cacheable `generate-icons`
  // target from icon-set.json.
  if (plan.entries.length > 0) {
    scaffoldSecondaryEntries(tree, collection, plan);
  }

  // Primary barrel: split sets (secondary entries exist) must NOT export icons
  // — each secondary entry exports its own icon components; single-entry sets
  // export `./lib/icons` directly.
  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files', 'primary'),
    joinPathFragments(packageDir, 'src'),
    { ...substitutions, exportIcons: plan.entries.length === 0 },
  );

  // The Iconify reference JSON is NOT written here. The `update-reference`
  // target copies the freshest JSON from @iconify/json into
  // packages/<collection>/icon-set.json (write-if-changed) and `generate-icons`
  // turns it into the icon components, so sets can be refreshed without
  // re-running this generator.

  updateJson(tree, joinPathFragments(packageDir, 'tsconfig.json'), (json) => {
    json.compilerOptions.lib = ['es2022', 'dom'];
    return json;
  });

  updateJson(tree, joinPathFragments(packageDir, 'package.json'), (json) => {
    json.dependencies = { ...(json.dependencies ?? {}), tslib: '^2.3.0' };
    // The icons only rely on signals and control flow, both stable since
    // Angular 17. Override the peer range the @nx/angular:library generator
    // sets (it mirrors the workspace Angular version) so every icon library
    // stays consumable from Angular 17 onward.
    json.peerDependencies = {
      '@angular/common': '>=17.0.0',
      '@angular/core': '>=17.0.0',
    };
    json.license = license;
    json.author = 'Adrián UB';
    json.funding = 'https://github.com/sponsors/adrian-ub';
    json.homepage = 'https://github.com/adrian-ub/ngxi#readme';
    json.repository = {
      type: 'git',
      url: 'https://github.com/adrian-ub/ngxi.git',
      directory: packageDir,
    };
    json.bugs = 'https://github.com/adrian-ub/ngxi/issues';
    return json;
  });

  wireIconTargets(tree, collection, plan);
}

/**
 * Creates the secondary entry points for a split collection using the native
 * Nx generator (`@nx/angular:library-secondary-entry-point`), which scaffolds
 * `<entry>/ng-package.json` + `<entry>/src/index.ts` per entry and wires the
 * `@ngxi/<collection>/<entry>` path mapping in tsconfig.base.json.
 *
 * Additionally persists `icon-entries.json` (the plan the generate-icons
 * script reads: which icons land in which entry). The primary `src/index.ts`
 * comes from the generator template; each entry gets its own self-contained
 * icon components later, importing nothing from the primary.
 */
async function scaffoldSecondaryEntries(
  tree: Tree,
  collection: string,
  plan: IconLibraryPlan,
): Promise<void> {
  const setName = collection;
  const substitutions = {
    tmpl: '',
    setName,
    camel: kebabToCamelCase(setName),
    pascal: kebabToPascalCase(setName),
    upper: kebabToUpperSnakeCase(setName),
  };

  for (const entry of plan.entries) {
    await librarySecondaryEntryPointGenerator(tree, {
      name: entry.name,
      library: collection,
      skipModule: true,
      skipFormat: true,
    });

    // Overwrite the Nx-scaffolded barrel with the entry's icons barrel. The
    // entry's icon components are self-contained; nothing is shared with the
    // primary entry.
    generateFiles(
      tree,
      joinPathFragments(__dirname, 'files', 'entry'),
      joinPathFragments('packages', collection, entry.name, 'src'),
      substitutions,
    );
  }

  // The Nx secondary-entry generator accumulates a factorial `include` AND
  // `exclude` list in the package tsconfig.lib.json (every combination of
  // entry paths), which breaks ngc: the include with an invalid regular
  // expression, and the exclude with tens of thousands of entries that break
  // entrypoint symbol resolution. Normalize both to the primary `src` plus the
  // first-level entry sources, which is all ng-packagr needs.
  updateJson(
    tree,
    joinPathFragments('packages', collection, 'tsconfig.lib.json'),
    (json) => {
      json.include = [
        'src/**/*.ts',
        ...plan.entries.map((entry) => `${entry.name}/src/**/*.ts`),
      ];
      json.exclude = [
        'src/**/*.spec.ts',
        'src/**/*.test.ts',
        ...plan.entries.flatMap((entry) => [
          `${entry.name}/src/**/*.spec.ts`,
          `${entry.name}/src/**/*.test.ts`,
        ]),
      ];
      return json;
    },
  );

  const iconEntries: IconEntriesFile = {
    collection,
    entries: plan.entries.map((entry) => ({ ...entry })),
  };
  writeJson(
    tree,
    joinPathFragments('packages', collection, 'icon-entries.json'),
    iconEntries,
  );
}

/**
 * Wires the per-library icon targets in project.json:
 * - `update-reference` refreshes packages/<collection>/icon-set.json from
 *   @iconify/json (always the full collection; splitting happens at generation
 *   time via icon-entries.json).
 * - `generate-icons` turns icon-set.json into the Angular icon components and
 *   depends on `update-reference` so the reference is always current.
 * - `build` depends on `generate-icons` so `nx build <lib>` always regenerates
 *   first. Both targets declare their own cache inputs/outputs.
 */
export function wireIconTargets(
  tree: Tree,
  collection: string,
  plan: IconLibraryPlan,
): void {
  const packageDir = `packages/${collection}`;
  updateJson(tree, joinPathFragments(packageDir, 'project.json'), (json) => {
    json.targets ??= {};
    json.targets['update-reference'] = {
      executor: 'nx:run-commands',
      cache: true,
      inputs: [
        '{workspaceRoot}/node_modules/@iconify/json/package.json',
        `{workspaceRoot}/node_modules/@iconify/json/json/${collection}.json`,
      ],
      outputs: ['{projectRoot}/icon-set.json'],
      options: {
        command: `tsx tools/generate-icons/index.ts ${collection} --reference-only`,
        cwd: '{workspaceRoot}',
      },
    };

    const generateInputs = [
      '{projectRoot}/icon-set.json',
      '{workspaceRoot}/tools/generate-icons/**/*',
      '{workspaceRoot}/tools/workspace-plugin/generators/icon-library/lib/**/*',
    ];
    if (plan.entries.length > 0) {
      generateInputs.push('{projectRoot}/icon-entries.json');
    }

    const generateOutputs =
      plan.entries.length > 0
        ? [
            ...plan.entries.map(
              (entry) => `{projectRoot}/${entry.name}/src/lib/icons`,
            ),
            '{projectRoot}/README.md',
          ]
        : ['{projectRoot}/src/lib/icons', '{projectRoot}/README.md'];

    json.targets['generate-icons'] = {
      executor: 'nx:run-commands',
      cache: true,
      dependsOn: ['update-reference'],
      inputs: generateInputs,
      outputs: generateOutputs,
      options: {
        command:
          `ulimit -n 65536 && NODE_OPTIONS="--max-old-space-size=8192" ` +
          `tsx tools/generate-icons/index.ts ${collection}`,
        cwd: '{workspaceRoot}',
      },
    };
    json.targets.build ??= {};
    json.targets.build.dependsOn = [
      'generate-icons',
      ...(json.targets.build.dependsOn ?? []),
    ];
    return json;
  });
}

export async function iconLibraryGenerator(
  tree: Tree,
  options: IconLibraryGeneratorSchema,
) {
  const collections = await lookupCollections();
  if (!collections[options.name]) {
    const suggestions = Object.keys(collections).filter((id) =>
      id.includes(options.name),
    );
    const message =
      `Icon set "${options.name}" does not exist in @iconify/json.` +
      (suggestions.length > 0
        ? ` Did you mean: ${suggestions.slice(0, 5).join(', ')}?`
        : ' Browse available sets at https://icon-sets.iconify.design/');
    throw new Error(message);
  }

  const iconSet = await lookupCollection(options.name);
  const license = iconSet.info?.license?.spdx ?? 'UNLICENSED';
  const plan = buildLibPlan(options.name, Object.keys(iconSet.icons));

  logger.info(
    `Creating @ngxi/${options.name} from "${
      iconSet.info?.name ?? options.name
    }" (${iconSet.info?.author?.name ?? 'unknown author'}, license: ${license}):`,
  );
  if (plan.entries.length === 0) {
    logger.info('  single primary entry (whole collection).');
  } else {
    for (const entry of plan.entries) {
      logger.info(`  secondary entry @ngxi/${options.name}/${entry.name}`);
    }
  }

  await scaffoldLib(tree, options.name, iconSet, license, plan);

  await formatFiles(tree);

  // The library README is data-driven: rendered from the same @iconify/json
  // reference used for the scaffold (set info, icon count, sample icon) and
  // refreshed by the `generate-icons` target whenever the reference changes.
  // Written after formatFiles so prettier never reformats the rendered markdown.
  tree.write(
    joinPathFragments('packages', options.name, 'README.md'),
    buildReadme(options.name, iconSet, plan.entries),
  );

  if (plan.entries.length === 0) {
    logger.info(
      `Scaffolded @ngxi/${options.name}. Run \`pnpm nx run ${options.name}:generate-icons\` to generate the icon components.`,
    );
  } else {
    logger.info(
      `Scaffolded @ngxi/${options.name} with ${plan.entries.length} secondary entry point(s). ` +
        `Run \`pnpm nx run ${options.name}:generate-icons\` to generate the icon components.`,
    );
  }
}

export default iconLibraryGenerator;
