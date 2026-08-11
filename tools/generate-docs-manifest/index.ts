import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  emitDocsManifest,
  emitSiteDiscoveryFiles,
  type IconDocsManifest,
} from './generate';

/**
 * Docs manifest CLI: scans `packages/*` for icon sets (directories holding an
 * `icon-set.json`) and emits `apps/docs/public/icons/manifest.json`, a naming
 * `<set>.index.json`, a showcase `<set>.samples.json` and a gzipped client
 * bundle `<set>.icons.json.gz` carrying the full rendered SVG string for every
 * canonical icon (the heavy verbatim `<set>.json` payloads are intentionally
 * not emitted; per-icon SVGs are no longer rendered on demand by the docs SSR
 * server in static deploys, so the client loads them from the bundle). Also
 * emits the site discovery files (`sitemap.xml`, `robots.txt`, `llms.txt`,
 * `llms-full.txt`) into `apps/docs/public`.
 *
 * Mirrors the `generate-icons` CLI pattern: fixed repo-owned paths, real
 * filesystem writes, non-zero exit on any failure (missing `packages/`,
 * unparseable reference). Wired into the internal-docs build via the
 * cacheable `generate-docs-manifest` target.
 */
function main(): void {
  const workspaceRoot = process.cwd();
  const outDir = join(workspaceRoot, 'apps/docs/public/icons');
  const result = emitDocsManifest(workspaceRoot, outDir);

  console.log(`Docs manifest for ${result.sets.length} icon set(s):`);
  for (const set of result.sets) {
    console.log(`  ${set}`);
  }
  if (result.written + result.unchanged > 0) {
    console.log(
      `Total: ${result.written} written, ${result.unchanged} unchanged.`,
    );
  }

  const manifest = JSON.parse(
    readFileSync(join(outDir, 'manifest.json'), 'utf-8'),
  ) as IconDocsManifest;
  const discovery = emitSiteDiscoveryFiles(
    workspaceRoot,
    join(workspaceRoot, 'apps/docs/public'),
    manifest,
  );
  console.log(
    `Site discovery: ${discovery.written} written, ${discovery.unchanged} unchanged.`,
  );

  process.exit(0);
}

try {
  main();
} catch (error) {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
}
