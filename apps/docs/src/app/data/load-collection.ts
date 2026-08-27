import { IconifyJSON } from '@iconify/types';
import { LRUCache } from 'lru-cache';

/** Per-icon naming metadata for the docs browser. */
export interface IconIndexEntry {
  /** Icon name in the reference, e.g. `circle-check`. */
  name: string;
  /** For aliases: the real icon the alias resolves to. */
  aliasOf?: string;
  /** Generated component class, e.g. `LucideCircleCheck`. */
  className: string;
  /** Selector attribute, e.g. `lucideCircleCheck`. */
  selectorAttr: string;
  /** Package import path, e.g. `@ngxi/lucide`. */
  importFrom: string;
  /** Secondary entry point name when the set is split. */
  entry?: string;
  /** Per-icon category names. */
  categories?: string[];
}

const collectionCache = new LRUCache<string, Promise<IconifyJSON>>({
  max: 100,
});

// ---------------------------------------------------------------------------
// Naming helpers (mirrored from the generator to derive class/selector in the
// browser without pulling in the full Node-only toolchain).
// ---------------------------------------------------------------------------

function kebabToPascalCase(name: string): string {
  return name
    .split('-')
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

function kebabToPascalCasePreserving(name: string): string {
  return name
    .split('-')
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('_');
}

/**
 * Precomputes the set of icon names whose plain PascalCase form collides with
 * another icon name in the same scope.
 */
function iconCollidingNames(allKebabNames: string[]): Set<string> {
  const byBase = new Map<string, string[]>();
  for (const name of allKebabNames) {
    const base = kebabToPascalCase(name);
    const group = byBase.get(base);
    if (group) {
      group.push(name);
    } else {
      byBase.set(base, [name]);
    }
  }
  const colliding = new Set<string>();
  for (const group of byBase.values()) {
    if (group.length > 1) {
      for (const name of group) {
        colliding.add(name);
      }
    }
  }
  return colliding;
}

function iconComponentName(
  setName: string,
  kebabName: string,
  collidingNames?: Set<string>,
): string {
  if (collidingNames?.has(kebabName)) {
    return `${kebabToPascalCase(setName)}${kebabToPascalCasePreserving(kebabName)}`;
  }
  return `${kebabToPascalCase(setName)}${kebabToPascalCase(kebabName)}`;
}

function iconComponentSelector(
  setName: string,
  kebabName: string,
  collidingNames?: Set<string>,
): string {
  const className = iconComponentName(setName, kebabName, collidingNames);
  return className.charAt(0).toLowerCase() + className.slice(1);
}

/**
 * Loads a collection's IconifyJSON data.
 * - Browser: fetches from /collections/{id}.json
 * - Server: reads directly from the filesystem
 */
export function loadCollection(id: string): Promise<IconifyJSON> {
  const cached = collectionCache.get(id);
  if (cached) {
    return cached;
  }

  // Detect server vs browser using typeof window (works without injection context)
  const isServer = typeof window === 'undefined';

  let promise: Promise<IconifyJSON>;

  if (isServer) {
    promise = loadCollectionServer(id);
  } else {
    promise = loadCollectionBrowser(id);
  }

  collectionCache.set(id, promise);
  return promise;
}

async function loadCollectionBrowser(id: string): Promise<IconifyJSON> {
  const res = await fetch(`/collections/${id}.json`);
  if (!res.ok) {
    throw new Error(
      `Failed to load collection "${id}": ${res.status} ${res.statusText}`,
    );
  }
  return res.json() as Promise<IconifyJSON>;
}

async function loadCollectionServer(id: string): Promise<IconifyJSON> {
  // Dynamic import to avoid bundling Node.js modules in the browser
  const fs = await import('node:fs/promises');
  const path = await import('node:path');

  // Resolve path relative to workspace root (process.cwd() in nx)
  const filePath = path.join(
    process.cwd(),
    'apps/docs/public/collections',
    `${id}.json`,
  );
  const content = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(content) as IconifyJSON;
}

/**
 * Derives an `IconIndexEntry` for a single icon from the collection's
 * `IconifyJSON` data. Handles aliases (Iconify's `aliases` map) by setting
 * `aliasOf` to the canonical parent name.
 *
 * Returns `null` when the icon name is not found in the collection.
 */
export function deriveIconEntry(
  collection: string,
  iconName: string,
  data: IconifyJSON,
): IconIndexEntry | null {
  // Check if the icon exists directly
  if (data.icons[iconName]) {
    const allNames = Object.keys(data.icons);
    const colliding = iconCollidingNames(allNames);
    const className = iconComponentName(collection, iconName, colliding);
    return {
      name: iconName,
      className,
      selectorAttr: iconComponentSelector(collection, iconName, colliding),
      importFrom: `@ngxi/${collection}`,
    };
  }

  // Check aliases — Iconify stores aliases as `{ name: { parent: "..." } }`
  if (data.aliases) {
    const alias = data.aliases[iconName];
    if (alias && typeof alias === 'object' && 'parent' in alias) {
      const parentName = (alias as { parent: string }).parent;
      // Recurse to get the parent's entry, then set aliasOf
      const parentEntry = deriveIconEntry(collection, parentName, data);
      if (parentEntry) {
        return {
          ...parentEntry,
          name: iconName,
          aliasOf: parentName,
        };
      }
    }
  }

  return null;
}
