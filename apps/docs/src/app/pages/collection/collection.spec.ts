import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import CollectionPage from './collection';
import { collections, type CollectionInfo } from '../../data';
import { clearLoadCaches } from '../../data/load-collection';

const testCollection = collections.find(
  (c) => !c.hidden && (c.total ?? 0) > 10,
)!;

/**
 * Exposes CollectionPage's protected members for white-box assertions without
 * weakening the component's encapsulation. Angular signals make a
 * `WritableSignal` both callable (`selectedIcon()`) and settable
 * (`selectedIcon.set(...)`), so the shape below mirrors exactly that.
 */
type CollectionPageHarness = {
  collectionInfo: () => CollectionInfo | null;
  selectedIcon: {
    (): string | null;
    set: (value: string | null) => void;
  };
  openDialog: (iconName: string) => void;
  visibleIcons: () => string[];
  hasMore: () => boolean;
  loadingMore: () => boolean;
  loadMore: () => Promise<void>;
};

function harness(fixture: ComponentFixture<CollectionPage>): CollectionPageHarness {
  return fixture.componentInstance as unknown as CollectionPageHarness;
}

function configureTestBed() {
  TestBed.configureTestingModule({
    imports: [CollectionPage],
    providers: [
      provideRouter([], withComponentInputBinding()),
      provideLocationMocks(),
      provideHttpClient(),
      provideHttpClientTesting(),
    ],
  });
  TestBed.compileComponents();
}

describe('CollectionPage', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.unstubAllGlobals();
    clearLoadCaches();
  });

  it('should create the component', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should resolve collection info from the static collections array', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const info = harness(fixture).collectionInfo();
    expect(info).toBeTruthy();
    expect(info!.id).toBe(testCollection.id);
    expect(info!.name).toBe(testCollection.name);
  });

  it('should return null for an unknown collection', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', 'nonexistent-collection');
    fixture.detectChanges();

    expect(harness(fixture).collectionInfo()).toBeNull();
  });

  it('should open and close the icon dialog', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const instance = harness(fixture);
    expect(instance.selectedIcon()).toBeNull();

    instance.openDialog('home');
    expect(instance.selectedIcon()).toBe('home');

    instance.selectedIcon.set(null);
    expect(instance.selectedIcon()).toBeNull();
  });

  it('should render the collection name', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(testCollection.name);
  });

  it('should render sidebar with collection links', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const aside = compiled.querySelector('aside');
    expect(aside).not.toBeNull();
    const links = aside!.querySelectorAll('a');
    expect(links.length).toBeGreaterThan(0);
  });

  it('should highlight active collection in sidebar', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const activeLink = compiled.querySelector('aside a.bg-accent');
    expect(activeLink).not.toBeNull();
    expect(activeLink!.textContent).toContain(testCollection.name);
  });

  it('should render install pill with correct package name', () => {
    configureTestBed();
    const fixture = TestBed.createComponent(CollectionPage);
    fixture.componentRef.setInput('collection', testCollection.id);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain(
      `pnpm add @ngxi/${testCollection.id}`,
    );
  });

  describe('grid virtualization (chunked icon bodies)', () => {
    /**
     * Stub the global `fetch` so each `{id}.icons.{n}.json.gz` body chunk
     * resolves from memory. The collection `-meta.json` is served through
     * Angular's `HttpTestingController` (not plain `fetch`) — that is the
     * reliable way to drive `httpResource` in a unit test. Chunks are cut from
     * the same 500-name pages the client uses, mirroring the real server.
     */
    function stubChunkFetch(names: string[]) {
      const PAGE = 500;
      vi.stubGlobal(
        'fetch',
        vi.fn(async (url: string) => {
          const u = String(url);
          const m = u.match(/\.icons\.(\d+)\.json\.gz$/);
          const n = m ? Number(m[1]) : 0;
          const slice = names.slice(n * PAGE, (n + 1) * PAGE);
          const payload = {
            prefix: testCollection.id,
            width: 24,
            height: 24,
            icons: Object.fromEntries(
              slice.map((name) => [
                name,
                { body: `<path data-name="${name}"/>`, width: 24, height: 24 },
              ]),
            ),
          };
          return {
            ok: true,
            body: new ReadableStream(),
            headers: { get: () => 'gzip' }, // chunk loaders use .text()
            text: async () => JSON.stringify(payload),
          };
        }),
      );
    }

    /** Mounts the page and serves the meta via HttpTestingController so
     * `httpResource` resolves to a known icon list. */
    function mountGrid(names: string[]) {
      stubChunkFetch(names);
      configureTestBed();
      const fixture = TestBed.createComponent(CollectionPage);
      fixture.componentRef.setInput('collection', testCollection.id);
      fixture.detectChanges();
      const http = TestBed.inject(HttpTestingController);
      const req = http.expectOne((r) => r.url.endsWith('-meta.json'));
      req.flush({ ...testCollection, icons: names });
      return { fixture, instance: harness(fixture) };
    }

    it('auto-loads the first chunk so icons render without interaction', async () => {
      const { instance } = mountGrid(['alpha', 'beta', 'gamma']);
      await vi.waitFor(() =>
        expect(instance.visibleIcons()).toEqual(['alpha', 'beta', 'gamma']),
      );
    });

    it('reports hasMore until every page of icon bodies is loaded', async () => {
      const names = Array.from(
        { length: 1200 },
        (_, i) => `icon-${String(i).padStart(4, '0')}`,
      );
      const { instance } = mountGrid(names);
      // First page (500) auto-loads → more remain.
      await vi.waitFor(() => expect(instance.visibleIcons().length).toBe(500));
      expect(instance.hasMore()).toBe(true);

      // Second page manual-load → still more.
      await instance.loadMore();
      expect(instance.visibleIcons().length).toBe(1000);
      expect(instance.hasMore()).toBe(true);

      // Last page → done.
      await instance.loadMore();
      expect(instance.visibleIcons().length).toBe(1200);
      expect(instance.hasMore()).toBe(false);
    });
  });
});
