import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * The docs manifest on disk. It is emitted by the cacheable
 * `generate-docs-manifest` target (which the build depends on) before this
 * file is evaluated during prerendering, so it is always current at build
 * time. Resolved relative to the nx workspace root (the process cwd).
 */
const manifestPath = join(
  process.cwd(),
  'apps/docs/public/icons/manifest.json',
);

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'collection/:collection',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      try {
        const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8')) as {
          sets: { collection: string }[];
        };
        return manifest.sets.map((set) => ({ collection: set.collection }));
      } catch {
        // Missing/unparseable manifest: prerender nothing here and let the
        // build fail naturally elsewhere (the generate target runs first).
        return [];
      }
    },
  },
];
