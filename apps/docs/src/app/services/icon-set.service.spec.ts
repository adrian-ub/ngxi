import { gzipSync } from 'node:zlib';
import { TestBed } from '@angular/core/testing';
import type { IconIndexEntry } from './manifest.service';
import { IconSetService } from './icon-set.service';

const lucideIndex: IconIndexEntry[] = [
  {
    name: 'circle-check',
    className: 'LucideCircleCheck',
    selectorAttr: 'lucideCircleCheck',
    importFrom: '@ngxi/lucide',
  },
  {
    name: 'award',
    className: 'LucideAward',
    selectorAttr: 'lucideAward',
    importFrom: '@ngxi/lucide',
  },
];

// The raw `<collection>.samples.json` payload shape the service fetches.
const lucideSamplesPayload = {
  viewBox: '0 0 24 24',
  samples: {
    'circle-check': '<path d="M1 2"/>',
    award: '<path d="M3 4"/>',
  },
};

describe('IconSetService', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith('/lucide.index.json')) {
        return { ok: true, json: async () => lucideIndex } as Response;
      }
      if (url.endsWith('/lucide.samples.json')) {
        return { ok: true, json: async () => lucideSamplesPayload } as Response;
      }
      return { ok: false, json: async () => ({}) } as Response;
    });
    vi.stubGlobal('fetch', fetchMock);
    TestBed.configureTestingModule({ providers: [IconSetService] });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetches the light index once and reuses the cached signal', async () => {
    const service = TestBed.inject(IconSetService);

    const first = service.index('lucide');
    const second = service.index('lucide');
    expect(first).toBe(second);

    const index = await vi.waitFor(() => {
      const value = first();
      if (value === undefined) {
        throw new Error('index not loaded yet');
      }
      return value;
    });
    expect(index).toEqual(lucideIndex);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/icons/lucide.index.json');
  });

  it('does not refetch the index for repeated reads', async () => {
    const service = TestBed.inject(IconSetService);
    await vi.waitFor(() => service.index('lucide')());
    expect(fetchMock).toHaveBeenCalledTimes(1);

    await vi.waitFor(() => service.index('lucide')());
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it('fetches and validates the samples showcase once', async () => {
    const service = TestBed.inject(IconSetService);

    const first = service.samples('lucide');
    const second = service.samples('lucide');
    expect(first).toBe(second);

    const samples = await vi.waitFor(() => {
      const value = first();
      if (value === undefined) {
        throw new Error('samples not loaded yet');
      }
      return value;
    });
    expect(samples.collection).toBe('lucide');
    expect(samples.viewBox).toBe('0 0 24 24');
    expect(samples.samples.get('circle-check')).toBe('<path d="M1 2"/>');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/icons/lucide.samples.json');
  });

  it('rejects the whole samples payload when any body fails the trust gate', async () => {
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/evil.samples.json')) {
        return {
          ok: true,
          json: async () => ({
            viewBox: '0 0 24 24',
            samples: {
              ok: '<path d="M1 2"/>',
              evil: '<path d="M1 2"/><script>evil()</script>',
            },
          }),
        } as Response;
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    const samples = service.samples('evil');
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(samples()).toBeUndefined();
  });

  it('leaves the index signal undefined when the fetch fails', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      json: async () => ({}),
    } as Response);
    const service = TestBed.inject(IconSetService);

    const index = service.index('lucide');
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalled());
    expect(index()).toBeUndefined();
  });

  // The raw `<collection>.icons.json.gz` bundle payload shape the service
  // fetches and decompresses.
  const lucideBundlePayload = {
    collection: 'lucide',
    icons: {
      'circle-check':
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2"/></svg>',
      award:
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 4"/></svg>',
    },
  };

  const gzipResponse = (payload: unknown): Response => {
    const bytes = gzipSync(Buffer.from(JSON.stringify(payload)));
    return {
      ok: true,
      // Deliberately NO `Content-Encoding: gzip` header: static hosts such as
      // Cloudflare Pages serve a `.gz` file as an opaque asset, and the loader
      // must detect compression from the magic bytes, not the header.
      arrayBuffer: async () => new Uint8Array(bytes),
    } as Response;
  };

  const jsonResponse = (payload: unknown): Response => {
    return {
      ok: true,
      arrayBuffer: async () =>
        new TextEncoder().encode(JSON.stringify(payload)),
    } as Response;
  };

  it('fetches and decompresses the gzipped icon bundle once per collection', async () => {
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/lucide.icons.json.gz')) {
        return gzipResponse(lucideBundlePayload);
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);

    const first = service.icons('lucide');
    const second = service.icons('lucide');
    expect(first).toBe(second);

    const icons = await vi.waitFor(() => {
      const value = first();
      if (value === undefined) {
        throw new Error('bundle not loaded yet');
      }
      return value;
    });
    expect(icons.get('circle-check')).toContain('<path d="M1 2"/>');
    expect(icons.get('award')).toContain('<path d="M3 4"/>');
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith('/icons/lucide.icons.json.gz');
  });

  it('decompresses a gzipped bundle served without a Content-Encoding header (Cloudflare Pages static host)', async () => {
    // Regression: a static `.gz` asset is served as an opaque binary WITHOUT
    // `Content-Encoding: gzip`. A header-only check treats it as text, JSON
    // parsing fails, and the whole collection renders empty. Detection must
    // come from the gzip magic bytes on the raw body.
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/lucide.icons.json.gz')) {
        return {
          ok: true,
          headers: new Headers({
            'content-type': 'application/gzip',
            'content-encoding': '',
          }),
          arrayBuffer: async () =>
            gzipSync(Buffer.from(JSON.stringify(lucideBundlePayload))),
        } as unknown as Response;
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    const icons = await vi.waitFor(() => {
      const value = service.icons('lucide')();
      if (value === undefined) {
        throw new Error('bundle not loaded yet');
      }
      return value;
    });
    expect(icons.get('circle-check')).toContain('<path d="M1 2"/>');
    expect(icons.get('award')).toContain('<path d="M3 4"/>');
  });

  it('parses the bundle directly when the payload is not gzip-compressed', async () => {
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/lucide.icons.json.gz')) {
        return jsonResponse(lucideBundlePayload);
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    const icons = await vi.waitFor(() => {
      const value = service.icons('lucide')();
      if (value === undefined) {
        throw new Error('bundle not loaded yet');
      }
      return value;
    });
    expect(icons.get('award')).toContain('<path d="M3 4"/>');
  });

  it('fetches each collection bundle exactly once', async () => {
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('.icons.json.gz')) {
        return gzipResponse(lucideBundlePayload);
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    await vi.waitFor(() => service.icons('lucide')());
    await vi.waitFor(() => service.icons('lucide')());
    expect(fetchMock).toHaveBeenCalledTimes(1);

    await vi.waitFor(() => service.icons('ei')());
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('fails closed on a corrupt gzip payload', async () => {
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/lucide.icons.json.gz')) {
        return {
          ok: true,
          // Valid gzip magic bytes but a truncated/corrupt stream: the loader
          // must detect compression and fail closed when inflating throws.
          arrayBuffer: async () => new Uint8Array([0x1f, 0x8b, 0x08, 0x00]),
        } as unknown as Response;
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    const icons = service.icons('lucide');
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(icons()).toBeUndefined();
  });

  it('fails closed on a wrong-shaped or mismatched bundle payload', async () => {
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/lucide.icons.json.gz')) {
        return jsonResponse({ collection: 'evil', icons: { a: '<svg></svg>' } });
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    const icons = service.icons('lucide');
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(icons()).toBeUndefined();
  });

  it('rejects the whole bundle when any svg fails the trust gate', async () => {
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/lucide.icons.json.gz')) {
        return jsonResponse({
          collection: 'lucide',
          icons: {
            ok: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2"/></svg>',
            evil: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><script>evil()</script></svg>',
          },
        });
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    const icons = service.icons('lucide');
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
    expect(icons()).toBeUndefined();
  });

  it('leaves a canonical name missing from the bundle as an empty lookup', async () => {
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/lucide.icons.json.gz')) {
        return gzipResponse(lucideBundlePayload);
      }
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    const icons = await vi.waitFor(() => {
      const value = service.icons('lucide')();
      if (value === undefined) {
        throw new Error('bundle not loaded yet');
      }
      return value;
    });
    expect(icons.get('star')).toBeUndefined();
  });
});
