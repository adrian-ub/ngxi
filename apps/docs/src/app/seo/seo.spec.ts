import { TestBed } from '@angular/core/testing';
import { Seo } from './seo';
import { SITE_URL } from './site-url';

describe('Seo', () => {
  let service: Seo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Seo);
  });

  it('applies home SEO with derived description, canonical and WebSite JSON-LD', () => {
    service.applyHomePage();

    expect(document.title).toBe('ngxi — Icon library docs');
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content'),
    ).toContain('icons for Angular, built on Iconify data.');
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

  it('applies collection SEO with breadcrumb JSON-LD', () => {
    // Use a known collection from the test data
    service.applyCollectionPage('lucide');

    expect(document.title).toBe('Lucide icons — ngxi');
    expect(
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute('content'),
    ).toContain('Lucide:');
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

  it('keeps a single JSON-LD script across repeated application', () => {
    service.applyHomePage();
    service.applyCollectionPage('lucide');
    service.applyHomePage();

    expect(document.querySelectorAll('script#seo-jsonld')).toHaveLength(1);
    expect(document.querySelector('script#seo-jsonld')?.textContent).toContain(
      '"@type":"WebSite"',
    );
  });

  it('falls back to home SEO for an unknown collection', () => {
    service.applyCollectionPage('nonexistent');

    expect(document.title).toBe('ngxi — Icon library docs');
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/`);
    const jsonLd = JSON.parse(
      document.querySelector('script#seo-jsonld')?.textContent ?? '{}',
    );
    expect(jsonLd['@type']).toBe('WebSite');
  });

  it('falls back to home SEO for undefined collection', () => {
    service.applyCollectionPage(undefined);

    expect(document.title).toBe('ngxi — Icon library docs');
    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute('href'),
    ).toBe(`${SITE_URL}/`);
  });
});
