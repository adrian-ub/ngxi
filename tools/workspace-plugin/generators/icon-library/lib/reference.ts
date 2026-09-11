import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import type { IconifyJSON } from '@iconify/types';
import { locate } from '@iconify/json';
import { globToRegExp } from './glob';

/**
 * The secondary-entry-point plan for a collection, persisted inside
 * `packages/<collection>/meta.json` (under the `split` key) by the icon-library
 * generator. An empty `entries` array (or a missing plan) means the collection
 * lives in the library's primary entry (`src/`) and nothing is split.
 */
export interface IconEntriesFile {
  /** Iconify collection id, e.g. `fluent` (derived from the library root). */
  collection: string;
  /**
   * Whether the primary entry (`src/`) holds base icons — the collection's
   * `""` suffix variant (e.g. the Regular weights of `ph`). When false the
   * primary barrel stays empty (`export {};`); when true the generate-icons
   * script renders the base icon components into the primary too.
   */
  hasBaseIcons: boolean;
  /**
   * Secondary entry points of the library. Each entry is a subdirectory of
   * `src/` (e.g. `src/duotone-bold/`) holding a self-contained icon module.
   * `suffix` is the exact Iconify suffix this entry covers (e.g.
   * `duotone-bold`); `filter` is the legacy glob fallback
   * (e.g. `*-20-filled`) kept for collections scaffolded before the
   * suffix-based plan.
   */
  entries: { name: string; filter?: string; suffix?: string }[];
}

/**
 * Reads the split plan from `meta.json` (`split` key) at a library root, or
 * `null` when the library has no split plan (single primary entry).
 */
export function readIconEntries(projectRoot: string): IconEntriesFile | null {
  const path = join(projectRoot, 'meta.json');
  if (!existsSync(path)) {
    return null;
  }
  try {
    const meta = JSON.parse(readFileSync(path, 'utf-8')) as {
      split?: Pick<IconEntriesFile, 'hasBaseIcons' | 'entries'>;
    };
    if (!meta.split) {
      return null;
    }
    return {
      collection: basename(projectRoot),
      hasBaseIcons: meta.split.hasBaseIcons ?? false,
      entries: meta.split.entries ?? [],
    };
  } catch (error) {
    throw new Error(
      `Failed to parse ${path}: ${error instanceof Error ? error.message : error}`,
    );
  }
}

/**
 * Returns the longest suffix in `suffixes` that `name` ends with, or `null`
 * when none matches. Longest-wins resolves collisions where one suffix is the
 * tail of another (`sharp-duotone` ends with `duotone` too).
 */
export function matchLongestSuffix(
  name: string,
  suffixes: string[],
): string | null {
  let best: string | null = null;
  for (const suffix of suffixes) {
    if (
      suffix !== '' &&
      name.endsWith(`-${suffix}`) &&
      (best === null || suffix.length > best.length)
    ) {
      best = suffix;
    }
  }
  return best;
}

/**
 * Restricts a reference JSON to the icons of ONE suffix variant, or to the
 * base icons when `suffix` is `null` (no suffix matches). Matching is
 * longest-suffix so `x-sharp-duotone` lands in `sharp-duotone`, never in
 * `duotone`. Aliases whose parent survives are kept, aliases pointing outside
 * the subset are dropped.
 */
export function filterIconifyJSONBySuffix(
  data: IconifyJSON,
  suffix: string | null,
  suffixes: string[],
): IconifyJSON {
  const kept = new Set(
    Object.keys(data.icons).filter(
      (name) => matchLongestSuffix(name, suffixes) === suffix,
    ),
  );
  const icons = Object.fromEntries(
    Object.entries(data.icons).filter(([name]) => kept.has(name)),
  );
  const aliases = data.aliases
    ? Object.fromEntries(
        Object.entries(data.aliases).filter(
          ([, alias]) => alias.parent !== undefined && kept.has(alias.parent),
        ),
      )
    : undefined;
  return {
    ...data,
    icons,
    ...(aliases && Object.keys(aliases).length > 0 ? { aliases } : {}),
  };
}

/**
 * Restricts a reference JSON to the icons matching `filter` (an anchored `*`
 * glob). Aliases whose parent survives are kept, aliases pointing outside the
 * subset are dropped.
 */
export function filterIconifyJSON(
  data: IconifyJSON,
  filter: string,
): IconifyJSON {
  const matcher = globToRegExp(filter);
  const kept = new Set(
    Object.keys(data.icons).filter((name) => matcher.test(name)),
  );
  const icons = Object.fromEntries(
    Object.entries(data.icons).filter(([name]) => kept.has(name)),
  );
  const aliases = data.aliases
    ? Object.fromEntries(
        Object.entries(data.aliases).filter(
          ([, alias]) => alias.parent !== undefined && kept.has(alias.parent),
        ),
      )
    : undefined;
  return {
    ...data,
    icons,
    ...(aliases && Object.keys(aliases).length > 0 ? { aliases } : {}),
  };
}

/**
 * Copies the freshest Iconify reference JSON for `collection` from
 * `@iconify/json` into `projectRoot/icon-set.json`, write-if-changed.
 *
 * When `filter` is given, only icons whose name matches the glob land in the
 * reference (and aliases whose parent survives are kept), so a large collection
 * like `fluent` can be split into smaller per-family/size libraries that fit
 * ngc's memory budget.
 *
 * Lets the user refresh an icon set when a new `@iconify/json` version ships
 * without re-running the `icon-library` generator.
 */
export function updateReference(
  projectRoot: string,
  collection: string,
  filter?: string,
): { changed: boolean } {
  const sourcePath = locate(collection);
  if (!existsSync(sourcePath)) {
    throw new Error(
      `Icon set "${collection}" not found in @iconify/json (expected ${sourcePath}).`,
    );
  }
  let source = readFileSync(sourcePath, 'utf-8');
  if (filter) {
    source =
      JSON.stringify(
        filterIconifyJSON(JSON.parse(source) as IconifyJSON, filter),
        null,
        2,
      ) + '\n';
  }
  const targetPath = join(projectRoot, 'icon-set.json');
  let existing: string | null = null;
  try {
    existing = readFileSync(targetPath, 'utf-8');
  } catch {
    existing = null;
  }
  if (existing === source) {
    return { changed: false };
  }
  mkdirSync(projectRoot, { recursive: true });
  writeFileSync(targetPath, source);
  return { changed: true };
}
