import { Injectable, signal, type Signal } from '@angular/core';
import type { IconIndexEntry } from './manifest.service';
import { trustIconBody, type TrustedIconBody } from './trusted-icon-body';

/** A validated showcase payload for one set's sample icons. */
export interface SampleSet {
  collection: string;
  viewBox: string;
  samples: ReadonlyMap<string, TrustedIconBody>;
}

/**
 * Fail-closed gate for a standalone SVG document (every string inside a
 * fetched `<collection>.icons.json.gz` bundle). The asset is repo-owned, but
 * defense-in-depth keeps any markup that could run scripts out of the
 * inline-rendered preview: it must be a well-formed full `<svg>...</svg>` with
 * no script element and no event-handler attribute. Returns whether the
 * document is safe to render inline.
 */
function trustSvgDocument(svg: string): boolean {
  const trimmed = svg.trim();
  if (
    trimmed === '' ||
    !trimmed.startsWith('<svg') ||
    !trimmed.endsWith('</svg>')
  ) {
    return false;
  }
  if (/<script\b/i.test(svg) || /\son[a-z]+\s*=/i.test(svg)) {
    return false;
  }
  return true;
}

/** Namespaced cache key: one entry per collection/icon per kind of asset. */
type CacheKey =
  | `index:${string}`
  | `samples:${string}`
  | `icons:${string}`;

/**
 * Loads a docs asset (`/icons/<collection>.index.json`,
 * `/icons/<collection>.samples.json` or `/icons/<collection>.icons.json.gz`)
 * exactly once per collection per kind and caches the resulting signal. Only
 * called after hydration (client-only): the light index, samples and gzipped
 * icon bundles are static files fetched on demand.
 */
@Injectable({ providedIn: 'root' })
export class IconSetService {
  private readonly cache = new Map<CacheKey, Signal<unknown>>();
  private readonly inFlight = new Map<CacheKey, Promise<unknown>>();

  /** Shared `undefined` used when fetching is impossible (SSR). */
  private readonly noop = signal<undefined>(undefined).asReadonly();

  /**
   * The lightweight per-icon naming index (name, class name, selector, import
   * path and per-icon categories). Powers the browse grid's filtered index and
   * the cross-collection global search.
   */
  index(collection: string): Signal<IconIndexEntry[] | undefined> {
    if (typeof window === 'undefined') {
      return this.noop;
    }
    return this.fetchOnce(`index:${collection}`, () =>
      this.fetchIndex(collection),
    );
  }

  /**
   * The per-set sample showcase. Every body passes the trust gate; a single
   * invalid body rejects the whole payload (fails closed), so no untrusted
   * body can reach the collections grid.
   */
  samples(collection: string): Signal<SampleSet | undefined> {
    if (typeof window === 'undefined') {
      return this.noop;
    }
    return this.fetchOnce(`samples:${collection}`, () =>
      this.fetchSamples(collection),
    );
  }

  /**
   * The full standalone `<svg>` strings for every canonical icon of a
   * collection, loaded once from the gzipped bundle
   * `/icons/<collection>.icons.json.gz` and cached in memory (never refetched
   * for the same collection). Every string has passed the trust gate
   * (`trustSvgDocument`) and the whole payload fails closed on any HTTP error,
   * invalid gzip/JSON, wrong shape or untrusted SVG — so callers can inject
   * map values as the single injection authority. `undefined` while loading or
   * after a failed load; a canonical name missing from the map means the icon
   * is unknown (alias entries resolve via the index `aliasOf` field before
   * lookup).
   */
  icons(collection: string): Signal<ReadonlyMap<string, string> | undefined> {
    if (typeof window === 'undefined') {
      return this.noop;
    }
    return this.fetchOnce(`icons:${collection}`, () =>
      this.fetchIcons(collection),
    );
  }

  /**
   * Returns the cached readonly signal for `key` or creates one and starts
   * `fetcher`. `inFlight` dedupes concurrent requests for the same key; its
   * `finally` clears the slot so a later read can retry a failed load.
   */
  private fetchOnce<T>(
    key: CacheKey,
    fetcher: () => Promise<T | undefined>,
  ): Signal<T | undefined> {
    const cached = this.cache.get(key) as Signal<T | undefined> | undefined;
    if (cached !== undefined) {
      return cached;
    }
    const value = signal<T | undefined>(undefined);
    const readonly = value.asReadonly();
    this.cache.set(key, readonly);
    this.load(key, fetcher).then((result) => value.set(result ?? undefined));
    return readonly;
  }

  private load<T>(
    key: CacheKey,
    fetcher: () => Promise<T | undefined>,
  ): Promise<T | undefined> {
    const pending = this.inFlight.get(key) as
      | Promise<T | undefined>
      | undefined;
    if (pending !== undefined) {
      return pending;
    }
    const promise = fetcher().finally(() => this.inFlight.delete(key));
    this.inFlight.set(key, promise);
    return promise;
  }

  private async fetchIndex(
    collection: string,
  ): Promise<IconIndexEntry[] | undefined> {
    try {
      const response = await fetch(`/icons/${collection}.index.json`);
      if (!response.ok) {
        return undefined;
      }
      return (await response.json()) as IconIndexEntry[];
    } catch {
      return undefined;
    }
  }

  private async fetchSamples(
    collection: string,
  ): Promise<SampleSet | undefined> {
    try {
      const response = await fetch(`/icons/${collection}.samples.json`);
      if (!response.ok) {
        return undefined;
      }
      const data = (await response.json()) as {
        viewBox?: unknown;
        samples?: unknown;
      };
      if (
        data === null ||
        typeof data !== 'object' ||
        typeof data.viewBox !== 'string' ||
        typeof data.samples !== 'object' ||
        data.samples === null
      ) {
        return undefined;
      }
      const samples = new Map<string, TrustedIconBody>();
      for (const [name, body] of Object.entries(data.samples)) {
        const trusted = trustIconBody(body as string);
        if (trusted === null) {
          return undefined;
        }
        samples.set(name, trusted);
      }
      return { collection, viewBox: data.viewBox, samples };
    } catch {
      return undefined;
    }
  }

  /**
   * Fetches and validates the whole icon bundle for one collection. Fails
   * closed on EVERY unexpected condition (HTTP error, invalid gzip, bad JSON,
   * wrong shape, any SVG failing the trust gate), returning `undefined` so no
   * unvalidated or partially validated content ever reaches the DOM.
   */
  private async fetchIcons(
    collection: string,
  ): Promise<ReadonlyMap<string, string> | undefined> {
    try {
      const response = await fetch(`/icons/${collection}.icons.json.gz`);
      if (!response.ok) {
        return undefined;
      }
      const text = await readBodyText(response);
      const data = JSON.parse(text) as {
        collection?: unknown;
        icons?: unknown;
      };
      if (
        data === null ||
        typeof data !== 'object' ||
        typeof data.collection !== 'string' ||
        data.collection !== collection ||
        typeof data.icons !== 'object' ||
        data.icons === null ||
        Array.isArray(data.icons)
      ) {
        return undefined;
      }
      const icons = new Map<string, string>();
      for (const [name, svg] of Object.entries(data.icons)) {
        if (typeof svg !== 'string' || !trustSvgDocument(svg)) {
          return undefined;
        }
        icons.set(name, svg);
      }
      return icons;
    } catch {
      return undefined;
    }
  }
}

/**
 * Reads a fetched body to text, decompressing with `DecompressionStream('gzip')`
 * only when the payload is actually gzip-compressed. Compression is detected by
 * the gzip magic bytes (`0x1f 0x8b`) on the raw body, never by the
 * `Content-Encoding` header: a static host such as Cloudflare Pages serves a
 * `.gz` file as an opaque asset WITHOUT that header (so the header-only check
 * would treat binary gzip as text), while a host or proxy that DOES send
 * `Content-Encoding: gzip` has already decompressed the body for `fetch`
 * consumers (so decompressing again would corrupt it). Environments without
 * `DecompressionStream` reject instead of returning garbage; the caller maps
 * that to the fail-closed result.
 */
async function readBodyText(response: Response): Promise<string> {
  const buffer = await response.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  const isGzip = bytes.length >= 2 && bytes[0] === 0x1f && bytes[1] === 0x8b;
  if (!isGzip) {
    return new TextDecoder().decode(buffer);
  }
  if (typeof DecompressionStream === 'undefined') {
    throw new Error(
      'DecompressionStream is not supported in this environment; ' +
        'cannot decompress the gzipped icon bundle',
    );
  }
  const decompressed = new Blob([buffer])
    .stream()
    .pipeThrough(new DecompressionStream('gzip'));
  return new Response(decompressed).text();
}
