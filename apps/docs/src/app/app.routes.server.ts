import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * The collection metadata emitted by the cacheable `prepare` target (which the
 * build depends on) as the source of truth for the docs browser. Only the
 * `id` of each entry is needed here to prerender every collection page.
 * Resolved relative to the nx workspace root (the process cwd).
 */
const collectionsInfoPath = join(
  process.cwd(),
  'apps/docs/src/app/data/collections-info.json',
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
        const collections = JSON.parse(
          readFileSync(collectionsInfoPath, 'utf-8'),
        ) as { id: string }[];
        return collections.map((c) => ({ collection: c.id }));
      } catch {
        // Missing/unparseable metadata: prerender nothing here and let the
        // build fail naturally elsewhere (the prepare target runs first).
        return [];
      }
    },
  },
];
