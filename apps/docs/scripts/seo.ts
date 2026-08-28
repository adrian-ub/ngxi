import { mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

/** Canonical site origin for SEO files. */
export const SITE_URL = 'https://ngxi.adrianub.dev';

/** The effective site origin, overridable via SITE_URL env var. */
export function effectiveSiteUrl(): string {
  return process.env.SITE_URL || SITE_URL;
}

/**
 * Writes content to filePath only when it differs from the current file.
 * Returns whether a write happened.
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

/** Set metadata for SEO files, derived from the per-collection meta JSON. */
export interface SetMeta {
  collection: string;
  name: string;
  iconCount: number;
  aliasCount?: number;
  license: string;
  author: string;
  website?: string;
  categories: string[];
}

export interface DocsManifest {
  sets: SetMeta[];
}

/** The sitemap.xml body: home page + one URL per collection. */
export function buildSitemap(manifest: DocsManifest, siteUrl: string): string {
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

/** The robots.txt body. */
export function buildRobotsTxt(siteUrl: string): string {
  return `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`;
}

/** The llms.txt body. */
export function buildLlmsTxt(manifest: DocsManifest, siteUrl: string): string {
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
 * The llms-full.txt body: intro + per collection metadata + full icon list.
 * iconNames returns sorted names for a collection (empty if unavailable).
 */
export function buildLlmsFullTxt(
  manifest: DocsManifest,
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
    lines.push(`- Package: \`@ngxi/${set.collection}\``);
    lines.push(`- Icons: ${set.iconCount}`);
    if (set.aliasCount !== undefined) {
      lines.push(`- Aliases: ${set.aliasCount}`);
    }
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

/** Raw shape of a per-collection meta JSON emitted by the prepare target. */
interface CollectionMeta {
  id: string;
  name?: string;
  total?: number;
  license?: { title?: string };
  author?: { name?: string };
  category?: string;
  categories?: Record<string, unknown> | string[];
  icons?: string[];
}

/**
 * Reads every per-collection meta JSON emitted into `public/collections/` by
 * the prepare target and maps it to a `SetMeta`, plus a per-collection sorted
 * icon-name list (also from the meta). These files are the same source of
 * truth the docs browser loads at runtime, so SEO no longer depends on a
 * separate manifest.json.
 * Returns an empty manifest when no meta files exist.
 */
function readCollectionMetas(workspaceRoot: string): {
  manifest: DocsManifest;
  iconNames: Map<string, string[]>;
} {
  const collectionsDir = join(
    workspaceRoot,
    'apps/docs/public/collections',
  );
  const sets: SetMeta[] = [];
  const iconNames = new Map<string, string[]>();
  try {
    const files = readdirSync(collectionsDir).filter((f) =>
      f.endsWith('-meta.json'),
    );
    for (const file of files) {
      const meta = JSON.parse(
        readFileSync(join(collectionsDir, file), 'utf-8'),
      ) as CollectionMeta;
      if (!meta.id) continue;

      const rawCategories = meta.categories;
      const categories = Array.isArray(rawCategories)
        ? rawCategories.slice().sort()
        : rawCategories
          ? Object.keys(rawCategories).sort()
          : meta.category
            ? [meta.category]
            : [];

      sets.push({
        collection: meta.id,
        name: meta.name ?? meta.id,
        iconCount: meta.total ?? meta.icons?.length ?? 0,
        license:
          typeof meta.license?.title === 'string'
            ? meta.license.title
            : 'Unknown',
        author:
          typeof meta.author?.name === 'string'
            ? meta.author.name
            : 'Unknown',
        categories,
      });
      if (Array.isArray(meta.icons)) {
        iconNames.set(
          meta.id,
          meta.icons.slice().sort((a, b) => a.localeCompare(b)),
        );
      }
    }
  } catch {
    return { manifest: { sets: [] }, iconNames };
  }
  sets.sort((a, b) => a.collection.localeCompare(b.collection));
  return { manifest: { sets }, iconNames };
}

/** Emit result. */
export interface EmitResult {
  written: number;
  unchanged: number;
}

/**
 * Emits SEO/discovery files (sitemap.xml, robots.txt, llms.txt, llms-full.txt)
 * into the public directory. Reads the per-collection meta JSONs emitted by
 * the prepare target (public/collections/*-meta.json) — no manifest.json.
 */
export function emitSeoFiles(workspaceRoot: string): EmitResult {
  const { manifest, iconNames } = readCollectionMetas(workspaceRoot);
  if (manifest.sets.length === 0) {
    console.warn('No collection meta files found, skipping SEO files.');
    return { written: 0, unchanged: 0 };
  }

  const siteUrl = effectiveSiteUrl();
  const iconNamesFor = (collection: string): string[] =>
    iconNames.get(collection) ?? [];

  const outDir = join(workspaceRoot, 'apps/docs/public');
  const files = [
    [join(outDir, 'sitemap.xml'), buildSitemap(manifest, siteUrl)],
    [join(outDir, 'robots.txt'), buildRobotsTxt(siteUrl)],
    [join(outDir, 'llms.txt'), buildLlmsTxt(manifest, siteUrl)],
    [
      join(outDir, 'llms-full.txt'),
      buildLlmsFullTxt(manifest, siteUrl, iconNamesFor),
    ],
  ] as const;

  const result: EmitResult = { written: 0, unchanged: 0 };
  for (const [filePath, content] of files) {
    if (writeIfChanged(filePath, content)) {
      result.written += 1;
    } else {
      result.unchanged += 1;
    }
  }
  return result;
}

/** CLI entry point. */
if (import.meta.url === `file://${process.argv[1]}`) {
  const workspaceRoot = process.cwd();
  const result = emitSeoFiles(workspaceRoot);
  console.log(
    `SEO files: ${result.written} written, ${result.unchanged} unchanged.`,
  );
}
