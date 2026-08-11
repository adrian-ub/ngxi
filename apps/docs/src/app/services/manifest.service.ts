import { httpResource } from '@angular/common/http';
import { Injectable, computed } from '@angular/core';

/** Per-library metadata, mirrored from `tools/generate-docs-manifest`. */
export interface SetMeta {
  collection: string;
  package: string;
  name: string;
  iconCount: number;
  aliasCount: number;
  license: string;
  author: string;
  website?: string;
  /** Category names for the set (`data.categories` keys or `info.category`). */
  categories: string[];
  samples: string[];
  assets: { index: string; samples: string };
}

/** The docs manifest served at `/icons/manifest.json`. */
export interface IconDocsManifest {
  sets: SetMeta[];
}

/** One row of a `<set>.index.json`: how to render and import a single icon. */
export interface IconIndexEntry {
  name: string;
  aliasOf?: string;
  className: string;
  selectorAttr: string;
  importFrom: string;
  entry?: string;
  /** Per-icon category names (present only when the set ships a map). */
  categories?: string[];
}

export const EMPTY_MANIFEST: IconDocsManifest = { sets: [] };

/**
 * Loads `/icons/manifest.json` once and exposes it as a read-only resource.
 *
 * The manifest is intentionally tiny (one entry per library), so it is safe to
 * fetch on the server during prerendering — the SSR renderer waits for it
 * before painting. Per-set assets are tiny static files loaded by
 * `IconSetService` only after hydration.
 */
@Injectable({ providedIn: 'root' })
export class ManifestService {
  private readonly manifestResource = httpResource<IconDocsManifest>(
    () => '/icons/manifest.json',
    { defaultValue: EMPTY_MANIFEST },
  );

  readonly manifest = this.manifestResource.asReadonly();

  /**
   * The typed manifest, always readable: on error the resource accessor throws
   * (v22 semantics), so this swallows the error and keeps the empty default —
   * the designed degraded state for a failed manifest fetch.
   */
  readonly manifestValue = computed(() => {
    try {
      return this.manifestResource.value();
    } catch {
      return EMPTY_MANIFEST;
    }
  });
}
