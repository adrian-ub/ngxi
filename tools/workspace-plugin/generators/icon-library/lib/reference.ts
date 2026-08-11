import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import type { IconifyJSON } from '@iconify/types';
import { locate } from '@iconify/json';
import { globToRegExp } from './glob';

/**
 * The secondary-entry-point plan for a collection, persisted as
 * `packages/<collection>/icon-entries.json` by the icon-library generator.
 * An empty `entries` array (or a missing file) means the collection lives in
 * the library's primary entry (`src/`) and nothing is split.
 */
export interface IconEntriesFile {
  /** Iconify collection id, e.g. `fluent`. */
  collection: string;
  /**
   * Secondary entry points of the library. Each entry is a subdirectory of
   * `src/` (e.g. `src/20-filled/`) holding a self-contained icon module built
   * from the icons whose name matches `filter`.
   */
  entries: { name: string; filter: string }[];
}

/**
 * Reads `icon-entries.json` from a library root, or `null` when the library
 * has no split plan (single primary entry).
 */
export function readIconEntries(projectRoot: string): IconEntriesFile | null {
  const path = join(projectRoot, 'icon-entries.json');
  if (!existsSync(path)) {
    return null;
  }
  try {
    return JSON.parse(readFileSync(path, 'utf-8')) as IconEntriesFile;
  } catch (error) {
    throw new Error(
      `Failed to parse ${path}: ${error instanceof Error ? error.message : error}`,
    );
  }
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
