import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * The collections info on disk. It is emitted by the `prepare` target (which
 * the build depends on) before this file is evaluated during prerendering,
 * so it is always current at build time. Resolved relative to the nx
 * workspace root (the process cwd).
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
        return collections
          .filter((c) => !c.id.startsWith('_'))
          .map((c) => ({ collection: c.id }));
      } catch {
        // Missing/unparseable data: prerender nothing here and let the
        // build fail naturally elsewhere (the prepare target runs first).
        return [];
      }
    },
  },
];
