import { effect } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  ManifestService,
  type IconDocsManifest,
} from '../services/manifest.service';
import { SeoService } from './seo.service';
import { SITE_URL } from './site-url';

const manifestFixture: IconDocsManifest = {
  sets: [
    {
      collection: 'lucide',
      package: '@ngxi/lucide',
      name: 'Lucide',
      iconCount: 1817,
      aliasCount: 217,
      license: 'ISC',
      author: 'Lucide Contributors',
      categories: ['UI 24px'],
      samples: ['circle-check', 'award'],
      assets: {
        set: 'icons/lucide.json',
        index: 'icons/lucide.index.json',
        samples: 'icons/lucide.samples.json',
      },
    },
  ],
};

describe('SeoService', () => {
  let service: SeoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch()), provideHttpClientTesting()],
    });
    service = TestBed.inject(SeoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  /** Resolves the manifest resource the way the app does on the first read. */
  async function resolveManifest(): Promise<void> {
    TestBed.runInInjectionContext(() => {
      effect(() => {
        TestBed.inject(ManifestService).manifest.value();
      });
    });
    TestBed.flushEffects();
    const request = httpMock.expectOne('/icons/manifest.json');
    request.flush(manifestFixture);
    await TestBed.flushEffects();
  }

  it('applies home SEO with manifest-derived description, canonical and WebSite JSON-LD', async () => {
    await resolveManifest();
    service.applyHomePage();

    expect(document.title).toBe('ngxi — Icon library docs');
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content'),
    ).toBe('1 collection and 1817 icons for Angular, built on Iconify data.');
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/`);
    expect(
      document
        .querySelector('meta[property="og:url"]')
        ?.getAttribute('content'),
    ).toBe(`${SITE_URL}/`);
    expect(
      document
        .querySelector('meta[property="og:type"]')
        ?.getAttribute('content'),
    ).toBe('website');
    expect(
      document
        .querySelector('meta[name="twitter:card"]')
        ?.getAttribute('content'),
    ).toBe('summary');

    const script = document.querySelector('script#seo-jsonld');
    expect(script?.getAttribute('type')).toBe('application/ld+json');
    const jsonLd = JSON.parse(script?.textContent ?? '{}');
    expect(jsonLd['@type']).toBe('WebSite');
    expect(jsonLd.url).toBe(`${SITE_URL}/`);
  });

  it('applies collection SEO with breadcrumb JSON-LD', async () => {
    await resolveManifest();
    service.applyCollectionPage(manifestFixture.sets[0]);

    expect(document.title).toBe('Lucide icons — ngxi');
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content'),
    ).toBe(
      'Lucide: 1817 icons (217 aliases), ISC license, by Lucide Contributors',
    );
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/collection/lucide`);
    expect(
      document
        .querySelector('meta[property="og:title"]')
        ?.getAttribute('content'),
    ).toBe('Lucide icons — ngxi');

    const jsonLd = JSON.parse(
      document.querySelector('script#seo-jsonld')?.textContent ?? '{}',
    );
    expect(jsonLd['@type']).toBe('CollectionPage');
    expect(jsonLd.breadcrumb['@type']).toBe('BreadcrumbList');
    expect(jsonLd.breadcrumb.itemListElement).toHaveLength(2);
    expect(jsonLd.breadcrumb.itemListElement[1].name).toBe('Lucide');
    expect(jsonLd.breadcrumb.itemListElement[1].item).toBe(
      `${SITE_URL}/collection/lucide`,
    );
  });

  it('keeps a single JSON-LD script across repeated application', async () => {
    await resolveManifest();
    service.applyHomePage();
    service.applyCollectionPage(manifestFixture.sets[0]);
    service.applyHomePage();

    expect(document.querySelectorAll('script#seo-jsonld')).toHaveLength(1);
    expect(document.querySelector('script#seo-jsonld')?.textContent).toContain(
      '"@type":"WebSite"',
    );
  });

  it('falls back to home SEO for an unknown collection, canonical still resolves', async () => {
    await resolveManifest();
    service.applyCollectionPage(undefined);

    expect(document.title).toBe('ngxi — Icon library docs');
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/`);
    const jsonLd = JSON.parse(
      document.querySelector('script#seo-jsonld')?.textContent ?? '{}',
    );
    expect(jsonLd['@type']).toBe('WebSite');
  });
});
