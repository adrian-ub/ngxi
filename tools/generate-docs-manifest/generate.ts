import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { dirname, join } from 'node:path';
import { gzipSync } from 'node:zlib';
import { locate } from '@iconify/json';
import { getIconData, iconToHTML, iconToSVG } from '@iconify/utils';
import type { IconifyIcon, IconifyJSON } from '@iconify/types';
import {
  iconCollidingNames,
  iconComponentName,
  iconComponentSelector,
} from '../workspace-plugin/generators/icon-library/lib/naming';
import {
  readIconEntries,
  type IconEntriesFile,
} from '../workspace-plugin/generators/icon-library/lib/reference';
import { globToRegExp } from '../workspace-plugin/generators/icon-library/lib/glob';

/**
 * Set-level metadata for the docs site, persisted in `manifest.json`.
 * Deliberately timestamp-free: the manifest is byte-stable so the
 * `generate-docs-manifest` target only rewrites files when content changes.
 */
export interface SetMeta {
  /** Iconify collection id, e.g. `lucide` (also the package directory). */
  collection: string;
  /** Published package name, e.g. `@ngxi/lucide`. */
  package: string;
  /** Human-readable set name from the reference, e.g. `Lucide`. */
  name: string;
  iconCount: number;
  aliasCount: number;
  license: string;
  author: string;
  website?: string;
  /**
   * Category names for the set: sorted keys of `data.categories` when the set
   * ships one, else `info.category` when present, else empty.
   */
  categories: string[];
  /** Canonical icon names for showcasing the set. */
  samples: string[];
  /** Asset links relative to `public/`, consumed by the docs browser. */
  assets: { index: string; samples: string };
}

export interface IconDocsManifest {
  sets: SetMeta[];
}

/**
 * Per-icon naming metadata for the docs browser, persisted in
 * `<set>.index.json`. `className`/`selectorAttr` are derived with the SAME
 * helpers that name the generated components, so the site and the libraries
 * share one naming source of truth (zero drift).
 */
export interface IconIndexEntry {
  /** Icon name in the reference, e.g. `circle-check`. */
  name: string;
  /** For aliases: the real icon the alias resolves to (the one importable). */
  aliasOf?: string;
  /** Generated component class, e.g. `LucideCircleCheck`. */
  className: string;
  /** Selector attribute without the `svg[...]` wrapper, e.g. `lucideCircleCheck`. */
  selectorAttr: string;
  /** Package import path, e.g. `@ngxi/lucide` or `@ngxi/fluent/20-filled`. */
  importFrom: string;
  /** Secondary entry point name when the set is split, e.g. `20-filled`. */
  entry?: string;
  /** Per-icon category names from `data.categories` (aliases use their parent). */
  categories?: string[];
}

/** One docs-able set: the collection id plus its parsed reference. */
export interface DocsSetInput {
  collection: string;
  data: IconifyJSON;
  /** Split plan from icon-entries.json (absent for single-entry sets). */
  entries?: IconEntriesFile['entries'];
}

export interface EmitResult {
  sets: string[];
  written: number;
  unchanged: number;
}

/**
 * Canonical site origin for the SEO/discovery files (sitemap, robots, llms).
 * Keep in sync with `SITE_URL` in `apps/docs/src/app/seo/site-url.ts`.
 */
export const SITE_URL = 'https://ngxi.adrianub.dev';

/**
 * The effective site origin used when emitting discovery files: the
 * `SITE_URL` environment variable when set, otherwise the default constant.
 * Read lazily so callers and tests can override it per run.
 */
export function effectiveSiteUrl(): string {
  return process.env.SITE_URL || SITE_URL;
}

/**
 * Resolves an alias name to the terminal real icon (following alias chains),
 * or `undefined` when the alias is orphaned (its parent chain never reaches a
 * real icon in `data.icons`).
 */
function resolveAliasParent(
  data: IconifyJSON,
  name: string,
): string | undefined {
  const seen = new Set<string>();
  let current: string | undefined = data.aliases?.[name]?.parent;
  while (current !== undefined && !seen.has(current)) {
    seen.add(current);
    if (data.icons[current] !== undefined) {
      return current;
    }
    current = data.aliases?.[current]?.parent;
  }
  return undefined;
}

/**
 * Finds the secondary entry point an icon (or alias) belongs to, or
 * `undefined` for the primary entry.
 */
function entryFor(
  entries: IconEntriesFile['entries'] | undefined,
  name: string,
): IconEntriesFile['entries'][number] | undefined {
  if (!entries) {
    return undefined;
  }
  return entries.find((entry) => globToRegExp(entry.filter).test(name));
}

/**
 * Set-level categories: the sorted keys of `data.categories` when the set
 * ships a per-icon map, else `info.category` when present, else empty (most
 * sets, lucide included, only carry a generic `info.category`).
 */
export function setCategories(data: IconifyJSON): string[] {
  const fromMap = data.categories ? Object.keys(data.categories) : [];
  if (fromMap.length > 0) {
    return fromMap.sort();
  }
  return data.info?.category ? [data.info.category] : [];
}

/**
 * Resolves a sample name to its canonical icon body, following alias chains.
 * Returns `undefined` when the name cannot be resolved.
 */
export function sampleBody(
  data: IconifyJSON,
  name: string,
): string | undefined {
  const direct = data.icons[name];
  if (direct !== undefined) {
    return direct.body;
  }
  const parent = resolveAliasParent(data, name);
  return parent !== undefined ? data.icons[parent].body : undefined;
}

/** The payload of a per-set `<collection>.samples.json` showcase asset. */
export interface SampleAsset {
  viewBox: string;
  samples: Record<string, string>;
}

/**
 * The SVG viewBox for a set: `0 0 {width} {height}` from the reference
 * dimensions, defaulting to the standard 24px grid when absent.
 */
function iconViewBox(data: IconifyJSON): string {
  return typeof data.width === 'number' && typeof data.height === 'number'
    ? `0 0 ${data.width} ${data.height}`
    : '0 0 24 24';
}

/**
 * Builds the sample showcase for one set. Bodies are the raw reference
 * strings (untrusted); the docs app validates every one through its trust
 * gate before rendering and fails closed on any invalid body.
 */
export function buildSamplesAsset(
  data: IconifyJSON,
  sampleNames: string[],
): SampleAsset {
  const viewBox = iconViewBox(data);
  const samples: Record<string, string> = {};
  for (const name of sampleNames) {
    const body = sampleBody(data, name);
    if (body !== undefined) {
      samples[name] = body;
    }
  }
  return { viewBox, samples };
}

/**
 * The full standalone `<svg>` string for one icon, byte-identical to what the
 * docs SSR server's `renderIconSvg` produces for the same reference data:
 * per-icon width/height, else the set default, else the standard 24px grid.
 * Aliases resolve with `getIconData`, following alias chains to the terminal
 * real icon. Returns `undefined` for names that cannot resolve.
 */
export function renderIconSvgForManifest(
  data: IconifyJSON,
  name: string,
): string | undefined {
  const icon = getIconData(data, name);
  if (icon === null) {
    return undefined;
  }
  const width = icon.width ?? data.width ?? 24;
  const height = icon.height ?? data.height ?? 24;
  const resolved: IconifyIcon = { body: icon.body, width, height };
  const { body, attributes } = iconToSVG(resolved, { width, height });
  return iconToHTML(body, attributes);
}

/**
 * The payload of a per-collection `<collection>.icons.json.gz` client bundle:
 * one full standalone SVG string per canonical icon. Only canonical icons are
 * keyed — the docs client resolves alias entries to their parent via the
 * naming index, so the bundle carries exactly the set the index imports.
 */
export interface IconsAsset {
  collection: string;
  icons: Record<string, string>;
}

/**
 * Renders the full standalone SVG string for every canonical icon in `data`.
 * A canonical icon that cannot be rendered is reference corruption: throw
 * instead of emitting a silently incomplete bundle (the docs client fails
 * closed on missing icons, so a bad bundle would only render empty cells).
 */
export function buildIconsAsset(
  collection: string,
  data: IconifyJSON,
): IconsAsset {
  const icons: Record<string, string> = {};
  for (const name of Object.keys(data.icons)) {
    const svg = renderIconSvgForManifest(data, name);
    if (svg === undefined) {
      throw new Error(
        `Failed to render canonical icon "${name}" in collection "${collection}"`,
      );
    }
    icons[name] = svg;
  }
  return { collection, icons };
}

/**
 * Per-icon categories from `data.categories`: every category whose list
 * contains the icon name. Aliases look up their resolved parent instead, so
 * they inherit the canonical icon's categories. Returns `undefined` when the
 * set has no categories map or the icon belongs to none.
 */
function iconCategories(
  data: IconifyJSON,
  name: string,
  parent?: string,
): string[] | undefined {
  const map = data.categories;
  if (!map) {
    return undefined;
  }
  const lookup = parent ?? name;
  const result: string[] = [];
  for (const [category, icons] of Object.entries(map)) {
    if (icons.includes(lookup)) {
      result.push(category);
    }
  }
  return result.length > 0 ? result : undefined;
}

/**
 * The per-icon naming index for one set. Every entry derives its
 * `className`/`selectorAttr` from `iconComponentName`/`iconComponentSelector`
 * (aliases point at their importable parent component). Split sets prefix
 * entry components with the collection (the icon name already carries the
 * entry suffix), mirroring `generateSecondaryEntry`.
 */
export function buildSetIndex(
  collection: string,
  data: IconifyJSON,
  entries?: IconEntriesFile['entries'],
): IconIndexEntry[] {
  const primarySetName = collection;
  const index: IconIndexEntry[] = [];

  const entryScope = (name: string): { entry: string; setName: string } => {
    const entry = entryFor(entries, name);
    // Components are prefixed with the collection only: the icon name already
    // carries the entry suffix (e.g. `access-time-20-filled`), so the entry
    // name is never repeated in the class/selector.
    return entry
      ? { entry: entry.name, setName: collection }
      : { entry: '', setName: primarySetName };
  };

  const importFrom = (entry: string): string =>
    entry ? `@ngxi/${collection}/${entry}` : `@ngxi/${collection}`;

  const entryForClass = (name: string): { entry: string; setName: string } => {
    const own = entryScope(name);
    if (own.entry !== '') {
      return own;
    }
    // Aliases whose own name matches no entry filter inherit their parent's
    // entry (the component they import lives there).
    const parent = resolveAliasParent(data, name);
    if (parent !== undefined) {
      return entryScope(parent);
    }
    return own;
  };

  // Per-scope icon name sets, mirroring the generate-icons script: each
  // secondary entry receives only the icons matching its filter, and
  // disambiguation must resolve against exactly that scope (the entry, or the
  // collection's primary entry) so docs class names match the generated
  // components. The scope key is the entry, not the set name: every entry
  // shares the collection prefix while keeping its own collision scope.
  const scopeNamesBySet = new Map<string, string[]>();
  for (const iconName of Object.keys(data.icons)) {
    const scopeKey = entryScope(iconName).entry;
    const names = scopeNamesBySet.get(scopeKey);
    if (names) {
      names.push(iconName);
    } else {
      scopeNamesBySet.set(scopeKey, [iconName]);
    }
  }
  const collidingBySet = new Map<string, Set<string>>();
  for (const [scopeKey, names] of scopeNamesBySet) {
    collidingBySet.set(scopeKey, iconCollidingNames(collection, names));
  }
  const collidingNames = (scopeKey: string): Set<string> =>
    collidingBySet.get(scopeKey) ?? new Set();

  for (const iconName of Object.keys(data.icons)) {
    const { entry, setName } = entryScope(iconName);
    const colliding = collidingNames(entry);
    const className = iconComponentName(setName, iconName, colliding);
    const categories = iconCategories(data, iconName);
    index.push({
      name: iconName,
      className,
      selectorAttr: iconComponentSelector(setName, iconName, colliding).slice(
        4,
        -1,
      ),
      importFrom: importFrom(entry),
      ...(entry ? { entry } : {}),
      ...(categories ? { categories } : {}),
    });
  }

  if (data.aliases) {
    for (const [aliasName, alias] of Object.entries(data.aliases)) {
      const parent = resolveAliasParent(data, aliasName);
      if (parent === undefined) {
        continue; // orphaned alias: nothing importable behind it
      }
      const { entry, setName } = entryForClass(aliasName);
      const colliding = collidingNames(entry);
      const className = iconComponentName(setName, parent, colliding);
      const categories = iconCategories(data, aliasName, parent);
      index.push({
        name: aliasName,
        aliasOf: parent,
        className,
        selectorAttr: iconComponentSelector(setName, parent, colliding).slice(
          4,
          -1,
        ),
        importFrom: importFrom(entry),
        ...(entry ? { entry } : {}),
        ...(categories ? { categories } : {}),
      });
    }
  }

  return index.sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Builds the set-level manifest. `sets` are sorted by collection so the output
 * is deterministic across runs (byte-stable, no timestamps).
 */
export function buildManifest(sets: DocsSetInput[]): IconDocsManifest {
  const sorted = [...sets].sort((a, b) =>
    a.collection.localeCompare(b.collection),
  );
  return {
    sets: sorted.map(({ collection, data }) => {
      const info = data.info;
      const canonical = Object.keys(data.icons);
      const samples =
        info?.samples?.filter((sample) => data.icons[sample] !== undefined) ??
        [];
      return {
        collection,
        package: `@ngxi/${collection}`,
        name: info?.name ?? collection,
        iconCount: canonical.length,
        aliasCount: data.aliases ? Object.keys(data.aliases).length : 0,
        license: info?.license?.title ?? 'Unknown',
        author: info?.author?.name ?? 'Unknown',
        ...(info?.website ? { website: info.website } : {}),
        categories: setCategories(data),
        samples: samples.length > 0 ? samples : canonical.slice(0, 1),
        assets: {
          index: `icons/${collection}.index.json`,
          samples: `icons/${collection}.samples.json`,
        },
      };
    }),
  };
}

/**
 * Writes `content` to `filePath` only when it differs from the current file.
 * Returns whether a write happened (write-if-changed, so cached reruns and
 * rebuilds leave the working tree clean).
 */
export function writeIfChanged(filePath: string, content: string): boolean {
  let existing: string | null = null;
  try {
    existing = readFileSync(filePath, 'utf-8');
  } catch {
    existing = null;
  }
  if (existing === content) {
    return false;
  }
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, content);
  return true;
}

/**
 * Binary variant of `writeIfChanged` for gzip bundles: writes `content` to
 * `filePath` only when the bytes differ from the current file. `gzipSync` is
 * deterministic (its header carries no timestamp), so idempotent reruns leave
 * the working tree clean just like the text assets.
 */
export function writeIfChangedBuffer(
  filePath: string,
  content: Buffer,
): boolean {
  let existing: Buffer | null = null;
  try {
    existing = readFileSync(filePath);
  } catch {
    existing = null;
  }
  if (existing !== null && existing.equals(content)) {
    return false;
  }
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, content);
  return true;
}

/**
 * Reads a collection's reference JSON for docs generation: the package-local
 * `packages/<collection>/icon-set.json` when materialized (the byte-identical
 * copy `update-reference` writes), else the original `@iconify/json` source.
 * The fallback keeps the docs build working on a fresh clone where the heavy
 * per-package JSON files are gitignored and only materialized on demand.
 * Returns `null` when neither source exists.
 */
export function readSetReference(
  workspaceRoot: string,
  collection: string,
): IconifyJSON | null {
  const packagePath = join(
    workspaceRoot,
    'packages',
    collection,
    'icon-set.json',
  );
  if (existsSync(packagePath)) {
    try {
      return JSON.parse(readFileSync(packagePath, 'utf-8')) as IconifyJSON;
    } catch (error) {
      throw new Error(
        `Failed to parse ${packagePath}: ${
          error instanceof Error ? error.message : error
        }`,
      );
    }
  }
  const sourcePath = locate(collection);
  if (sourcePath !== undefined && existsSync(sourcePath)) {
    try {
      return JSON.parse(readFileSync(sourcePath, 'utf-8')) as IconifyJSON;
    } catch (error) {
      throw new Error(
        `Failed to parse ${sourcePath}: ${
          error instanceof Error ? error.message : error
        }`,
      );
    }
  }
  return null;
}

/**
 * Scans `workspaceRoot/packages` for docs-able sets (directories holding an
 * `icon-set.json`, or resolvable through `@iconify/json`) and returns the
 * parsed `DocsSetInput` list in filesystem order. Throws when `packages/` is
 * missing or a reference is unparseable; the CLI maps both to a non-zero exit.
 */
export function collectDocsSets(workspaceRoot: string): DocsSetInput[] {
  const packagesDir = join(workspaceRoot, 'packages');
  if (!existsSync(packagesDir)) {
    throw new Error(`No packages directory found at ${packagesDir}.`);
  }
  const collections = readdirSync(packagesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const sets: DocsSetInput[] = [];
  for (const collection of collections) {
    const data = readSetReference(workspaceRoot, collection);
    if (data === null) {
      continue;
    }
    const plan = readIconEntries(join(packagesDir, collection));
    sets.push({
      collection,
      data,
      ...(plan?.entries && plan.entries.length > 0
        ? { entries: plan.entries }
        : {}),
    });
  }
  return sets;
}

/**
 * Scans `workspaceRoot/packages` for docs-able sets and emits `manifest.json`,
 * `<collection>.index.json` (naming index), `<collection>.samples.json`
 * (showcase) and `<collection>.icons.json.gz` (a gzipped client bundle with
 * the full rendered SVG string for every canonical icon) into `outDir`. The
 * heavy verbatim `<collection>.json` payloads are deliberately NOT emitted:
 * the docs app only needs the light index, samples and bundle, and the bundle
 * carries the full SVGs so the statically deployed client never needs the SSR
 * server to render per-icon `<collection>/<name>.svg` assets on demand. Any
 * pre-existing per-set SVG directory (from an older generator run) is removed
 * so stale clones self-heal. Throws when `packages/` is missing or a
 * reference is unparseable; the CLI maps both to a non-zero exit.
 */
export function emitDocsManifest(
  workspaceRoot: string,
  outDir: string,
): EmitResult {
  const sets = collectDocsSets(workspaceRoot);

  const manifest = buildManifest(sets);
  const samplesByCollection = new Map(
    manifest.sets.map((set) => [set.collection, set.samples]),
  );

  const result: EmitResult = { sets: [], written: 0, unchanged: 0 };
  for (const set of sets) {
    result.sets.push(set.collection);
    const files: Array<[string, string | Buffer]> = [
      [
        join(outDir, `${set.collection}.index.json`),
        JSON.stringify(buildSetIndex(set.collection, set.data, set.entries)),
      ],
      [
        join(outDir, `${set.collection}.samples.json`),
        JSON.stringify(
          buildSamplesAsset(
            set.data,
            samplesByCollection.get(set.collection) ?? [],
          ),
        ),
      ],
      [
        join(outDir, `${set.collection}.icons.json.gz`),
        gzipSync(JSON.stringify(buildIconsAsset(set.collection, set.data)), {
          level: 9,
        }),
      ],
    ];
    for (const [filePath, content] of files) {
      const written =
        typeof content === 'string'
          ? writeIfChanged(filePath, content)
          : writeIfChangedBuffer(filePath, content);
      if (written) {
        result.written += 1;
      } else {
        result.unchanged += 1;
      }
    }
    // The per-set SVG directory only ever contained `.svg` files; the SSR
    // server renders them on demand (and the static deploy serves them from
    // the client bundle), so remove any stale leftover from an older
    // generator run (self-healing on existing clones/checkouts).
    const svgDir = join(outDir, set.collection);
    if (existsSync(svgDir)) {
      rmSync(svgDir, { recursive: true, force: true });
    }
  }

  if (writeIfChanged(join(outDir, 'manifest.json'), JSON.stringify(manifest))) {
    result.written += 1;
  } else {
    result.unchanged += 1;
  }
  return result;
}

/**
 * The sitemap.xml body: the home page plus one `<url>` per collection.
 * Deliberately timestamp-free (no `lastmod`) so the file stays byte-stable.
 */
export function buildSitemap(
  manifest: IconDocsManifest,
  siteUrl: string,
): string {
  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    `  <url><loc>${siteUrl}/</loc></url>`,
  ];
  for (const set of manifest.sets) {
    lines.push(
      `  <url><loc>${siteUrl}/collection/${set.collection}</loc></url>`,
    );
  }
  lines.push('</urlset>');
  return `${lines.join('\n')}\n`;
}

/** The robots.txt body: allow everything and point at the sitemap. */
export function buildRobotsTxt(siteUrl: string): string {
  return `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
}

/**
 * The llms.txt body (https://llmstxt.org): a short summary, a docs index
 * linking home and every collection, and a reference to the full dump.
 */
export function buildLlmsTxt(
  manifest: IconDocsManifest,
  siteUrl: string,
): string {
  const lines = [
    '# ngxi Icon Library',
    '',
    'ngxi ships hand-tuned Angular icon components built on Iconify data. ' +
      'Browse collections, search icons, and copy install commands.',
    '',
    '## Docs',
    '',
    `- [Home](${siteUrl}/)`,
  ];
  for (const set of manifest.sets) {
    lines.push(`- [${set.name}](${siteUrl}/collection/${set.collection})`);
  }
  lines.push(
    '',
    '## Reference',
    '',
    `- [Full index](${siteUrl}/llms-full.txt)`,
  );
  return `${lines.join('\n')}\n`;
}

/**
 * The llms-full.txt body: the same intro, then per collection a metadata
 * block (package, counts, license, author, website, categories) plus the full
 * sorted list of icon names. `iconNames` returns the sorted names for a
 * collection from its naming index (empty when the index is unavailable).
 */
export function buildLlmsFullTxt(
  manifest: IconDocsManifest,
  siteUrl: string,
  iconNames: (collection: string) => string[],
): string {
  const lines = [
    '# ngxi Icon Library',
    '',
    'ngxi ships hand-tuned Angular icon components built on Iconify data. ' +
      'Browse collections, search icons, and copy install commands.',
    '',
  ];
  for (const set of manifest.sets) {
    lines.push(`## ${set.name} (${set.collection})`, '');
    lines.push(`- Package: \`${set.package}\``);
    lines.push(`- Icons: ${set.iconCount}`);
    lines.push(`- Aliases: ${set.aliasCount}`);
    lines.push(`- License: ${set.license}`);
    lines.push(`- Author: ${set.author}`);
    if (set.website) {
      lines.push(`- Website: ${set.website}`);
    }
    if (set.categories.length > 0) {
      lines.push(`- Categories: ${set.categories.join(', ')}`);
    }
    lines.push('', 'Icons:');
    const names = iconNames(set.collection);
    if (names.length > 0) {
      for (const name of names) {
        lines.push(`- ${name}`);
      }
    } else {
      lines.push('- (index unavailable)');
    }
    lines.push('');
  }
  return lines.join('\n');
}

/**
 * Emits the four SEO/AI discovery files (`sitemap.xml`, `robots.txt`,
 * `llms.txt`, `llms-full.txt`) into `outDir` (the site public dir, NOT the
 * icons dir). Icon names for `llms-full.txt` are read from the per-set naming
 * index under `workspaceRoot/apps/docs/public/icons`; a missing/unparseable
 * index degrades to "(index unavailable)". Byte-stable via `writeIfChanged`.
 */
export function emitSiteDiscoveryFiles(
  workspaceRoot: string,
  outDir: string,
  manifest: IconDocsManifest,
): EmitResult {
  const siteUrl = effectiveSiteUrl();
  const iconNames = (collection: string): string[] => {
    const indexPath = join(
      workspaceRoot,
      'apps/docs/public/icons',
      `${collection}.index.json`,
    );
    try {
      const entries = JSON.parse(readFileSync(indexPath, 'utf-8')) as {
        name: string;
      }[];
      return entries
        .map((entry) => entry.name)
        .sort((a, b) => a.localeCompare(b));
    } catch {
      return [];
    }
  };

  const files = [
    [join(outDir, 'sitemap.xml'), buildSitemap(manifest, siteUrl)],
    [join(outDir, 'robots.txt'), buildRobotsTxt(siteUrl)],
    [join(outDir, 'llms.txt'), buildLlmsTxt(manifest, siteUrl)],
    [
      join(outDir, 'llms-full.txt'),
      buildLlmsFullTxt(manifest, siteUrl, iconNames),
    ],
  ] as const;

  const result: EmitResult = { sets: [], written: 0, unchanged: 0 };
  for (const [filePath, content] of files) {
    if (writeIfChanged(filePath, content)) {
      result.written += 1;
    } else {
      result.unchanged += 1;
    }
  }
  return result;
}
