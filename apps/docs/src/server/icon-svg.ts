import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { locate } from '@iconify/json';
import { getIconData, iconToHTML, iconToSVG } from '@iconify/utils';
import type { IconifyIcon, IconifyJSON } from '@iconify/types';

/**
 * Cache of parsed set data keyed by collection id. `null` marks a collection
 * that could not be resolved, so unknown sets are not re-read on every icon
 * request.
 */
const setCache = new Map<string, IconifyJSON | null>();

/**
 * The workspace root, resolved from the process working directory (nx runs
 * every target from the workspace root). Overridable so tests and the future
 * Cloudflare Worker can point at a different checkout.
 */
let workspaceRoot = process.cwd();

/** Overrides the workspace root used to locate `packages/<collection>/...`. */
export function setWorkspaceRoot(root: string): void {
  workspaceRoot = root;
  setCache.clear();
}

/**
 * Loads one collection's parsed reference data, mirroring the docs manifest
 * generator's `readSetReference`: the package-local
 * `packages/<collection>/icon-set.json` when materialized (the byte-identical
 * copy `update-reference` writes), else the original `@iconify/json` file via
 * `locate`. Returns `null` when the collection is unknown. Results are cached
 * for the server's lifetime; this function is the seam a future Cloudflare
 * Worker can replace with its own data source without touching the rendering
 * logic.
 */
export function loadSetData(collection: string): IconifyJSON | null {
  const cached = setCache.get(collection);
  if (cached !== undefined) {
    return cached;
  }
  const data = readSetData(collection);
  setCache.set(collection, data);
  return data;
}

/**
 * Reads a collection's reference from disk (uncached). An unparseable
 * reference throws (surfacing bad data instead of silently serving 404s).
 */
function readSetData(collection: string): IconifyJSON | null {
  const packagePath = join(
    workspaceRoot,
    'packages',
    collection,
    'icon-set.json',
  );
  if (existsSync(packagePath)) {
    return JSON.parse(readFileSync(packagePath, 'utf-8')) as IconifyJSON;
  }
  const sourcePath = locate(collection);
  if (sourcePath !== undefined && existsSync(sourcePath)) {
    return JSON.parse(readFileSync(sourcePath, 'utf-8')) as IconifyJSON;
  }
  return null;
}

/**
 * The full standalone `<svg>` string for one icon, rendered on demand for
 * `/icons/<collection>/<name>.svg`. Aliases resolve with `getIconData`, which
 * follows alias chains to the terminal real icon. Sizing mirrors the manifest
 * generator's rules: per-icon width/height, else the set default, else the
 * standard 24px grid. The output starts with `<svg` and ends with `</svg>`,
 * which the docs client's trust gate requires. Returns `undefined` for
 * unknown collections, unknown icons and orphaned aliases (the client handles
 * `undefined` by leaving the preview empty).
 */
export function renderIconSvg(
  collection: string,
  name: string,
): string | undefined {
  const data = loadSetData(collection);
  if (data === null) {
    return undefined;
  }
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
