import { TestBed } from '@angular/core/testing';
import type { IconIndexEntry } from './manifest.service';
import {
  IconSetService,
  buildIconSetBundle,
  bundleBody,
  type IconifySetData,
} from './icon-set.service';

const lucideData: IconifySetData = {
  prefix: 'lucide',
  width: 24,
  height: 24,
  icons: {
    'circle-check': { body: '<path d="M1 2"/>' },
    award: { body: '<path d="M3 4"/>' },
  },
  aliases: {
    check: { parent: 'circle-check' },
    'orphan-alias': { parent: 'missing-icon' },
  },
};

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

describe('buildIconSetBundle', () => {
  it('brands every icon body and resolves aliases to their parent', () => {
    const bundle = buildIconSetBundle('lucide', lucideData, lucideIndex);
    expect(bundle).not.toBeNull();
    expect(bundle?.bodies.get('circle-check')).toBe('<path d="M1 2"/>');
    expect(bundle?.aliases.get('check')).toBe('circle-check');
    expect(bundleBody(bundle!, 'check')).toBe('<path d="M1 2"/>');
    expect(bundleBody(bundle!, 'unknown')).toBeUndefined();
  });

  it('derives the viewBox from the reference width/height', () => {
    expect(buildIconSetBundle('lucide', lucideData, lucideIndex)?.viewBox).toBe(
      '0 0 24 24',
    );
  });

  it('falls back to 0 0 24 24 when the reference has no dimensions', () => {
    const slim: IconifySetData = {
      prefix: 'lucide',
      icons: { 'circle-check': { body: '<path d="M1 2"/>' } },
    };
    expect(buildIconSetBundle('lucide', slim, lucideIndex)?.viewBox).toBe(
      '0 0 24 24',
    );
  });

  it('drops aliases that never resolve to a bundled icon', () => {
    const bundle = buildIconSetBundle('lucide', lucideData, lucideIndex);
    expect(bundle?.aliases.has('orphan-alias')).toBe(false);
  });

  it('fails closed: any untrusted body rejects the whole set', () => {
    const evil: IconifySetData = {
      ...lucideData,
      icons: {
        'circle-check': { body: '<path d="M1 2"/><script>evil()</script>' },
        award: { body: '<path d="M3 4"/>' },
      },
    };
    expect(buildIconSetBundle('lucide', evil, lucideIndex)).toBeNull();
  });
});

describe('IconSetService', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn(async (url: string) => {
      if (url.endsWith('/lucide.json')) {
        return { ok: true, json: async () => lucideData } as Response;
      }
      if (url.endsWith('/lucide.index.json')) {
        return { ok: true, json: async () => lucideIndex } as Response;
      }
      return { ok: false, json: async () => ({}) } as Response;
    });
    vi.stubGlobal('fetch', fetchMock);
    TestBed.configureTestingModule({ providers: [IconSetService] });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('fetches the set JSON and index once and reuses the cached signal', async () => {
    const service = TestBed.inject(IconSetService);

    const first = service.bundle('lucide');
    const second = service.bundle('lucide');
    expect(first).toBe(second);

    const bundle = await vi.waitFor(() => {
      const value = first();
      if (value === undefined) {
        throw new Error('bundle not loaded yet');
      }
      return value;
    });
    expect(bundle).toBeDefined();
    expect(bundle?.collection).toBe('lucide');
    expect(bundle?.bodies.get('award')).toBe('<path d="M3 4"/>');
    expect(bundleBody(bundle!, 'check')).toBe('<path d="M1 2"/>');
    expect(bundle?.index).toEqual(lucideIndex);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('does not refetch for repeated reads', async () => {
    const service = TestBed.inject(IconSetService);
    await vi.waitFor(() => service.bundle('lucide')());
    expect(fetchMock).toHaveBeenCalledTimes(2);

    await vi.waitFor(() => service.bundle('lucide')());
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it('leaves the signal undefined when a body fails the trust gate', async () => {
    const evil: IconifySetData = {
      ...lucideData,
      icons: {
        'circle-check': { body: '<path d="M1 2"/><script>evil()</script>' },
        award: { body: '<path d="M3 4"/>' },
      },
    };
    fetchMock.mockImplementation(async (url: string) => {
      if (url.endsWith('/evil.json'))
        return { ok: true, json: async () => evil } as Response;
      return { ok: false, json: async () => ({}) } as Response;
    });

    const service = TestBed.inject(IconSetService);
    const bundle = service.bundle('evil');
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));
    expect(bundle()).toBeUndefined();
  });

  it('leaves the signal undefined when the fetch fails', async () => {
    fetchMock.mockResolvedValue({
      ok: false,
      json: async () => ({}),
    } as Response);
    const service = TestBed.inject(IconSetService);

    const bundle = service.bundle('lucide');
    await vi.waitFor(() => expect(fetchMock).toHaveBeenCalled());
    expect(bundle()).toBeUndefined();
  });
});
