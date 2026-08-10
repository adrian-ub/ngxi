import { Injectable, signal, type Signal } from '@angular/core';
import type { IconIndexEntry } from './manifest.service';
import { trustIconBody, type TrustedIconBody } from './trusted-icon-body';

/**
 * The subset of the Iconify JSON format the docs app reads. Defined locally
 * (structural typing) instead of importing `@iconify/types`, which is a
 * tooling dependency and must stay outside the app's dependency graph.
 */
export interface IconifySetData {
  prefix: string;
  width?: number;
  height?: number;
  icons: Record<string, { body: string }>;
  aliases?: Record<string, { parent: string }>;
}

/** A fully validated, render-ready icon set. */
export interface IconSetBundle {
  collection: string;
  viewBox: string;
  bodies: ReadonlyMap<string, TrustedIconBody>;
  aliases: ReadonlyMap<string, string>;
  index: IconIndexEntry[];
}

/** A validated showcase payload for one set's sample icons. */
export interface SampleSet {
  collection: string;
  viewBox: string;
  samples: ReadonlyMap<string, TrustedIconBody>;
}

/**
 * Pure core of the service: turns fetched JSON into a bundle, validating every
 * body through the trust gate. Fails CLOSED — a single untrusted body rejects
 * the whole set, so no partial data can ever reach the renderer.
 */
export function buildIconSetBundle(
  collection: string,
  data: IconifySetData,
  index: IconIndexEntry[],
): IconSetBundle | null {
  if (!Array.isArray(index)) {
    return null;
  }
  const bodies = new Map<string, TrustedIconBody>();
  for (const [name, icon] of Object.entries(data.icons)) {
    const trusted = trustIconBody(icon.body);
    if (trusted === null) {
      return null;
    }
    bodies.set(name, trusted);
  }
  const aliases = new Map<string, string>();
  for (const [name, alias] of Object.entries(data.aliases ?? {})) {
    if (alias.parent !== undefined && bodies.has(alias.parent)) {
      aliases.set(name, alias.parent);
    }
  }
  const viewBox =
    typeof data.width === 'number' && typeof data.height === 'number'
      ? `0 0 ${data.width} ${data.height}`
      : '0 0 24 24';
  return { collection, viewBox, bodies, aliases, index };
}

/** Resolves an icon name, following aliases to the parent's trusted body. */
export function bundleBody(
  bundle: IconSetBundle,
  name: string,
): TrustedIconBody | undefined {
  const direct = bundle.bodies.get(name);
  if (direct !== undefined) {
    return direct;
  }
  const parent = bundle.aliases.get(name);
  return parent !== undefined ? bundle.bodies.get(parent) : undefined;
}

/** Namespaced cache key: one entry per collection per kind of asset. */
type CacheKey = `bundle:${string}` | `index:${string}` | `samples:${string}`;

/**
 * Loads a docs asset (`/icons/<collection>.{json,index.json,samples.json}`)
 * exactly once per collection per kind and caches the resulting signal. Only
 * called after hydration (client-only): the heavy JSON files never travel
 * through SSR, and the tiny samples assets are static files fetched on demand.
 */
@Injectable({ providedIn: 'root' })
export class IconSetService {
  private readonly cache = new Map<CacheKey, Signal<unknown>>();
  private readonly inFlight = new Map<CacheKey, Promise<unknown>>();

  /** Shared `undefined` used when fetching is impossible (SSR). */
  private readonly noop = signal<undefined>(undefined).asReadonly();

  bundle(collection: string): Signal<IconSetBundle | undefined> {
    if (typeof window === 'undefined') {
      return this.noop;
    }
    return this.fetchOnce(`bundle:${collection}`, () =>
      this.fetchSet(collection),
    );
  }

  /**
   * The lightweight per-icon naming index alone (used by global search); the
   * heavy set JSON stays lazy and only loads when a grid actually renders.
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

  private async fetchSet(
    collection: string,
  ): Promise<IconSetBundle | undefined> {
    try {
      const [setUrl, indexUrl] = [
        `/icons/${collection}.json`,
        `/icons/${collection}.index.json`,
      ];
      const [setResponse, indexResponse] = await Promise.all([
        fetch(setUrl),
        fetch(indexUrl),
      ]);
      if (!setResponse.ok || !indexResponse.ok) {
        return undefined;
      }
      const [data, index] = await Promise.all([
        setResponse.json(),
        indexResponse.json(),
      ]);
      return (
        buildIconSetBundle(
          collection,
          data as IconifySetData,
          index as IconIndexEntry[],
        ) ?? undefined
      );
    } catch {
      return undefined;
    }
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
}
