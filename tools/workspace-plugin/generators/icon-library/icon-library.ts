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
import { matchLongestSuffix } from './lib/reference';
import {
  kebabToCamelCase,
  kebabToPascalCase,
  kebabToUpperSnakeCase,
} from './lib/naming';
import { buildReadme } from './lib/generate-readme';

/**
 * A secondary entry point of an icon library. Each entry is a self-contained
 * module under `src/<name>/` (its own `ng-package.json`, barrel and icon
 * components) holding the icons of ONE suffix variant, importable as
 * `@ngxi/<collection>/<name>`.
 */
export interface IconEntryPlan {
  /** Entry name, e.g. `duotone-bold` or `20-filled` (the Iconify suffix). */
  name: string;
  /**
   * Exact Iconify suffix this entry covers (source of truth). Icons are
   * assigned by longest-suffix match, which resolves collisions such as
   * `sharp-duotone` vs `duotone`.
   */
  suffix?: string;
  /**
   * Legacy icon-name glob fallback (e.g. `*-20-filled`) kept for plans
   * scaffolded before the suffix-based matcher.
   */
  filter?: string;
}

/**
 * The library plan for one Iconify collection: a single publishable package
 * (`@ngxi/<collection>`) plus — when the set declares `suffixes` — one
 * secondary entry point per non-empty suffix. Sets without suffixes (e.g.
 * `ei`, `lucide`) stay in the library's primary entry (`src/`).
 */
export interface IconLibraryPlan {
  /** Iconify collection id, e.g. `fluent` (also the library name). */
  collection: string;
  /**
   * Secondary entry points, one per non-empty Iconify suffix. Empty means the
   * whole collection lives in the library's primary entry and nothing is
   * split.
   */
  entries: IconEntryPlan[];
  /**
   * Whether the primary entry holds base icons — the icons that match NO
   * non-empty suffix (the collection's `""` suffix variant, e.g. the Regular
   * weights of `ph`). When true the generate-icons script renders components
   * into `src/lib/icons` too; when false the primary barrel stays empty.
   * Always true for unsplit sets.
   */
  hasBaseIcons: boolean;
}

/**
 * Derives the library plan for a collection from its Iconify `suffixes`
 * metadata (the authoritative split, e.g. `{"": "Regular", "20-filled":
 * "20 Filled", ...}`).
 *
 * - Every non-empty suffix becomes its own secondary entry point. There are
 *   NO size thresholds: tiny variants (fluent `24-light`, 2 icons) and giant
 *   variants (solar, ~1,300 icons) split the same way.
 * - Icons that match no suffix (the `""` variant) stay in the primary entry;
 *   that primary entry renders components only when such base icons exist.
 * - Sets without `suffixes` metadata stay entirely in the primary entry.
 */
export function buildLibPlan(
  collection: string,
  iconNames: string[],
  suffixes: Record<string, string> | undefined,
): IconLibraryPlan {
  const entries: IconEntryPlan[] = Object.keys(suffixes ?? {})
    .filter((suffix) => suffix !== '')
    .sort((a, b) => a.localeCompare(b))
    .map((suffix) => ({ name: suffix, suffix }));
  const hasBaseIcons = iconNames.some(
    (name) =>
      matchLongestSuffix(
        name,
        entries.map((entry) => entry.suffix!),
      ) === null,
  );
  return { collection, entries, hasBaseIcons };
}

/** `1.0.10` -> `1.0.0`, `2.3.4-beta.5` -> `2.3.0-beta.0`. */
function normalizeBaselineVersion(version: string): string {
  const match = version.match(/^(\d+)\.(\d+)\.(\d+)(?:-([a-zA-Z0-9]+)\.\d+)?/);
  if (!match) {
    return '0.0.1';
  }
  const [, major, minor, , preid] = match;
  return `${major}.${minor}.0${preid ? `-${preid}.0` : ''}`;
}

async function scaffoldLib(
  tree: Tree,
  collection: string,
  iconSet: IconifyJSON,
  license: string,
  plan: IconLibraryPlan,
): Promise<void> {
  const packageDir = `packages/${collection}`;
  // A new library joins the workspace at the release baseline held by the ROOT
  // package.json (the single source of truth for the whole-library version:
  // 1.0.0 now, bumped to 1.1.0 when every package moves to a new minor/major).
  // It must NOT inherit any individual package's current version — lucide may
  // be at 1.0.10 while a brand new library must still start at 1.0.0.
  const referenceVersion = (() => {
    try {
      const ref = JSON.parse(
        tree.read(joinPathFragments('package.json'), 'utf-8') ?? '{}',
      );
      return typeof ref.version === 'string'
        ? normalizeBaselineVersion(ref.version)
        : '0.0.1';
    } catch {
      return '0.0.1';
    }
  })();
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

  // @nx/angular:library (via @nx/js's add-release-config) always writes a
  // default `version.preVersionCommand: "<pm> dlx nx run-many -t build"` into
  // nx.json when scaffolding a publishable library — even when the project is
  // already covered by the existing release config. We don't want a
  // workspace-wide pre-build: publishing builds only the targeted projects
  // (nx-release-publish depends on build). Undo that default so nx.json keeps
  // our release configuration untouched.
  updateJson(tree, 'nx.json', (json) => {
    if (json.release?.version?.preVersionCommand !== undefined) {
      delete json.release.version.preVersionCommand;
    }
    return json;
  });

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
  // target from icon-set.json. Secondary entries are scaffolded AFTER
  // meta.json exists: scaffoldSecondaryEntries persists the split plan inside
  // meta.json (`split` key) and requires the file to already be present.
  if (plan.entries.length > 0) {
    scaffoldSecondaryEntries(tree, collection, plan);
  }

  // Primary barrel: split sets whose base variant has NO icons (e.g. all of
  // iconmind lives in suffixed entries) must NOT export icons — every icon
  // lives in a secondary entry. When the set's `""` suffix holds base icons
  // (ph, material-symbols) or the set is unsplit, the primary exports
  // `./lib/icons` and the generate-icons script renders those components.
  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files', 'primary'),
    joinPathFragments(packageDir, 'src'),
    {
      ...substitutions,
      exportIcons: plan.entries.length === 0 || plan.hasBaseIcons,
    },
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

  const iconSetName = iconSet.info?.name ?? collection;

  updateJson(tree, joinPathFragments(packageDir, 'package.json'), (json) => {
    // New libraries join the workspace at the version every existing package
    // is on (they are all released together as a library), not at the
    // generator default 0.0.1.
    json.version = referenceVersion;
    json.description = `${iconSetName} for Angular applications`;
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

  // Persist a per-package metadata snapshot. `lastModified` is the change
  // signal tools/scripts/detect-changed-sets.mjs compares against the installed
  // @iconify/json to decide which libraries need a version bump + republish
  // when Iconify publishes updated sets. Keep future metadata here instead of
  // adding sibling files (JSON.stringify drops a missing property cleanly).
  writeJson(tree, joinPathFragments(packageDir, 'meta.json'), {
    lastModified: iconSet.lastModified,
  });

  // Split sets persist their secondary-entry plan inside meta.json (`split`),
  // so generate-icons knows which icons land in which entry.
  if (plan.entries.length > 0) {
    scaffoldSecondaryEntries(tree, collection, plan);
  }

  wireIconTargets(tree, collection, plan);
}

/**
 * Creates the secondary entry points for a split collection using the native
 * Nx generator (`@nx/angular:library-secondary-entry-point`), which scaffolds
 * `<entry>/ng-package.json` + `<entry>/src/index.ts` per entry and wires the
 * `@ngxi/<collection>/<entry>` path mapping in tsconfig.base.json.
 *
 * Additionally persists the split plan inside the package's `meta.json`
 * (`split` key — the same file that carries the release `lastModified`
 * snapshot), which the generate-icons script reads to decide which icons land
 * in which entry. The primary `src/index.ts` comes from the generator
 * template; each entry gets its own self-contained icon components later,
 * importing nothing from the primary.
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

  // During a REPLAN (the package already exists) the secondary entries from
  // the previous plan that are absent from the new suffix-based plan must
  // disappear: drop their scaffold (the generated icon components live under a
  // git-ignored path and are cleaned up by the caller) and their
  // tsconfig.base.json path mapping. New entries are added via the Nx
  // generator; entries that already exist are kept as-is.
  const previousEntries = readPreviousIconEntries(tree, collection);
  const keptNames = new Set(plan.entries.map((entry) => entry.name));
  const staleNames = previousEntries
    .map((entry) => entry.name)
    .filter((name) => !keptNames.has(name));

  if (staleNames.length > 0) {
    for (const name of staleNames) {
      tree.delete(joinPathFragments('packages', collection, name));
    }
    updateJson(tree, 'tsconfig.base.json', (json) => {
      for (const name of staleNames) {
        delete json.compilerOptions?.paths?.[`@ngxi/${collection}/${name}`];
      }
      return json;
    });
  }

  for (const entry of plan.entries) {
    const entryScaffold = joinPathFragments(
      'packages',
      collection,
      entry.name,
      'ng-package.json',
    );
    if (!tree.exists(entryScaffold)) {
      await librarySecondaryEntryPointGenerator(tree, {
        name: entry.name,
        library: collection,
        skipModule: true,
        skipFormat: true,
      });
    }

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

  // Persist the split plan inside the package's meta.json (`split` key) — the
  // same file that already carries the `lastModified` release snapshot, so the
  // package metadata stays in one place. generate-icons reads it to decide
  // which icons land in which entry.
  updateJson(
    tree,
    joinPathFragments('packages', collection, 'meta.json'),
    (json) => {
      json.split = {
        hasBaseIcons: plan.hasBaseIcons,
        entries: plan.entries.map((entry) => ({ ...entry })),
      };
      return json;
    },
  );
}

/**
 * Wires the per-library icon targets in project.json:
 * - `update-reference` refreshes packages/<collection>/icon-set.json from
 *   @iconify/json (always the full collection; splitting happens at generation
 *   time via the meta.json `split` plan).
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
      // meta.json carries both the release snapshot (lastModified) and the
      // split plan; a plan change must invalidate the generated icons.
      generateInputs.push('{projectRoot}/meta.json');
    }

    const generateOutputs =
      plan.entries.length > 0
        ? [
            ...plan.entries.map(
              (entry) => `{projectRoot}/${entry.name}/src/lib/icons`,
            ),
            // Split sets with base icons (the `""` suffix variant) render
            // components into the primary too.
            ...(plan.hasBaseIcons ? ['{projectRoot}/src/lib/icons'] : []),
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
    // Publishing requires the built dist output. Wire the dependency so
    // `nx release publish --projects=<set>` builds only the packages it is
    // about to publish instead of relying on an all-workspace pre-version
    // build command.
    if (json.targets['nx-release-publish']) {
      json.targets['nx-release-publish'].dependsOn = [
        'build',
        ...(json.targets['nx-release-publish'].dependsOn ?? []),
      ];
    }
    return json;
  });
}

/**
 * Reads the previously persisted split plan (packages/<collection>/meta.json,
 * `split` key) when it exists, so a replan can detect secondary entries that
 * disappear (e.g. the old fluent `light` family entry) and remove their
 * scaffolds and path mappings.
 */
export function readPreviousIconEntries(
  tree: Tree,
  collection: string,
): IconEntryPlan[] {
  const path = joinPathFragments('packages', collection, 'meta.json');
  if (!tree.exists(path)) {
    return [];
  }
  try {
    const raw = tree.read(path, 'utf-8');
    if (!raw) {
      return [];
    }
    return (
      (JSON.parse(raw) as { split?: { entries?: IconEntryPlan[] } }).split
        ?.entries ?? []
    );
  } catch {
    return [];
  }
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
  const plan = buildLibPlan(
    options.name,
    Object.keys(iconSet.icons),
    iconSet.suffixes,
  );

  const packageDir = joinPathFragments('packages', options.name);
  const isReplan = tree.exists(joinPathFragments(packageDir, 'project.json'));

  logger.info(
    `${isReplan ? 'Replanning' : 'Creating'} @ngxi/${options.name} from "${
      iconSet.info?.name ?? options.name
    }" (${iconSet.info?.author?.name ?? 'unknown author'}, license: ${license}):`,
  );
  if (plan.entries.length === 0) {
    logger.info('  single primary entry (whole collection).');
  } else {
    for (const entry of plan.entries) {
      logger.info(`  secondary entry @ngxi/${options.name}/${entry.name}`);
    }
    logger.info(
      plan.hasBaseIcons
        ? `  primary entry holds ${'the base (unsuffixed) icons'}.`
        : '  primary entry stays empty (every icon lives in a secondary entry).',
    );
  }

  if (isReplan) {
    await replanLib(tree, options.name, plan);
  } else {
    await scaffoldLib(tree, options.name, iconSet, license, plan);
  }

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
      `${isReplan ? 'Replanned' : 'Scaffolded'} @ngxi/${
        options.name
      }. Run \`pnpm nx run ${options.name}:generate-icons\` to generate the icon components.`,
    );
  } else {
    logger.info(
      `${isReplan ? 'Replanned' : 'Scaffolded'} @ngxi/${
        options.name
      } with ${plan.entries.length} secondary entry point(s). ` +
        `Run \`pnpm nx run ${options.name}:generate-icons\` to generate the icon components.`,
    );
  }
}

/**
 * Re-applies the split plan to an already-scaffolded icon library without
 * touching the base package scaffold (project.json, package.json, tsconfigs,
 * meta.json — those already exist). It keeps the primary barrel in sync,
 * scaffolds/removes secondary entries and the meta.json `split` plan from the
 * current
 * plan, and rewires the icon targets.
 */
async function replanLib(
  tree: Tree,
  collection: string,
  plan: IconLibraryPlan,
): Promise<void> {
  const packageDir = joinPathFragments('packages', collection);
  const substitutions = {
    tmpl: '',
    setName: collection,
    camel: kebabToCamelCase(collection),
    pascal: kebabToPascalCase(collection),
    upper: kebabToUpperSnakeCase(collection),
  };

  if (plan.entries.length > 0) {
    await scaffoldSecondaryEntries(tree, collection, plan);
  } else {
    // A replan collapsed the set back to a single primary entry: drop any
    // previously scaffolded entries and their path mappings.
    const previousEntries = readPreviousIconEntries(tree, collection);
    for (const entry of previousEntries) {
      tree.delete(joinPathFragments(packageDir, entry.name));
    }
    if (previousEntries.length > 0) {
      updateJson(tree, 'tsconfig.base.json', (json) => {
        for (const entry of previousEntries) {
          delete json.compilerOptions?.paths?.[
            `@ngxi/${collection}/${entry.name}`
          ];
        }
        return json;
      });
    }
    updateJson(
      tree,
      joinPathFragments(packageDir, 'tsconfig.lib.json'),
      (json) => {
        json.include = ['src/**/*.ts'];
        json.exclude = ['src/**/*.spec.ts', 'src/**/*.test.ts'];
        return json;
      },
    );
    // No split anymore: drop the stale split plan so generate-icons renders
    // the whole collection into the primary entry again. meta.json keeps its
    // release snapshot (lastModified); only the `split` plan goes away.
    if (tree.exists(joinPathFragments(packageDir, 'meta.json'))) {
      updateJson(tree, joinPathFragments(packageDir, 'meta.json'), (json) => {
        delete json.split;
        return json;
      });
    }
  }

  // Primary barrel: split sets whose base variant has NO icons must NOT export
  // icons; when the `""` suffix holds base icons or the set is unsplit, the
  // primary exports `./lib/icons` and generate-icons renders those components.
  generateFiles(
    tree,
    joinPathFragments(__dirname, 'files', 'primary'),
    joinPathFragments(packageDir, 'src'),
    {
      ...substitutions,
      exportIcons: plan.entries.length === 0 || plan.hasBaseIcons,
    },
  );

  wireIconTargets(tree, collection, plan);
}

export default iconLibraryGenerator;
