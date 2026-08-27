import { DOCUMENT } from '@angular/common';
import { inject, Service } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { collections } from '../data';
import { SITE_URL } from './site-url';

/** The per-page SEO payload shared by the home and collection pages. */
interface PageSeo {
  title: string;
  description: string;
  canonical: string;
  jsonLd: Record<string, unknown>;
}

/** `id` of the JSON-LD script element, so navigating pages swap it cleanly. */
const JSON_LD_ID = 'seo-jsonld';

/** `id` of the canonical `<link>`, swapped the same way on navigation. */
const CANONICAL_ID = 'seo-canonical';

/**
 * Applies per-page SEO (title, description, canonical, Open Graph, Twitter
 * cards, JSON-LD). Driven from the icon browser shells on every route change
 * so both client-side navigation and SSR prerendering produce page-specific
 * `<head>` markup. All tags are updated in place or removed by id, so
 * navigating between routes never leaves stale meta behind.
 */
@Service()
export class Seo {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);
  private readonly router = inject(Router, { optional: true });

  /** Home SEO: title, a derived description, and a WebSite JSON-LD. */
  applyHomePage(): void {
    const totalIcons = collections.reduce(
      (sum, set) => sum + (set.icons?.length ?? 0),
      0,
    );
    const description =
      collections.length === 0
        ? 'Angular icon components built on Iconify data.'
        : `${collections.length} ${
            collections.length === 1 ? 'collection' : 'collections'
          } and ${totalIcons} icons for Angular, built on Iconify data.`;
    const canonical = `${SITE_URL}/`;
    this.applyBase({
      title: 'ngxi — Icon library docs',
      description,
      canonical,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'ngxi',
        url: canonical,
      },
    });
  }

  /**
   * Collection SEO. Unknown collections keep the home-page tags but point
   * the canonical at the raw request path.
   */
  applyCollectionPage(collection: string | undefined): void {
    if (collection === undefined) {
      this.applyHomePage();
      const canonical = `${SITE_URL}${this.currentPath()}`;
      this.setCanonical(canonical);
      this.meta.updateTag({ property: 'og:url', content: canonical });
      return;
    }

    const set = collections.find((c) => c.id === collection);
    if (set === undefined) {
      this.applyHomePage();
      const canonical = `${SITE_URL}${this.currentPath()}`;
      this.setCanonical(canonical);
      this.meta.updateTag({ property: 'og:url', content: canonical });
      return;
    }

    const title = `${set.name} icons — ngxi`;
    const iconCount = set.icons?.length ?? 0;
    const description = `${set.name}: ${iconCount} icons, by ${set.author?.name ?? 'Unknown'}`;
    const canonical = `${SITE_URL}/collection/${set.id}`;
    this.applyBase({
      title,
      description,
      canonical,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: `${set.name} icons`,
        description,
        url: canonical,
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: `${SITE_URL}/`,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: set.name,
              item: canonical,
            },
          ],
        },
      },
    });
  }

  private applyBase(seo: PageSeo): void {
    this.title.setTitle(seo.title);
    this.setCanonical(seo.canonical);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: seo.canonical });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({
      property: 'og:description',
      content: seo.description,
    });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({
      name: 'twitter:description',
      content: seo.description,
    });
    this.setJsonLd(seo.jsonLd);
  }

  /**
   * Replaces the previous canonical `<link>` by id and appends the new one.
   * Managed through the DOCUMENT because the `Meta` service only creates
   * `<meta>` elements; a real `<link rel="canonical">` needs manual handling.
   */
  private setCanonical(url: string): void {
    this.doc.querySelector(`#${CANONICAL_ID}`)?.remove();
    const link = this.doc.createElement('link');
    link.id = CANONICAL_ID;
    link.rel = 'canonical';
    link.href = url;
    this.doc.head.appendChild(link);
  }

  /**
   * Replaces the previous JSON-LD script by id and appends the new one, so
   * exactly one structured-data script exists in `<head>` at any time.
   */
  private setJsonLd(data: Record<string, unknown>): void {
    this.doc.querySelector(`#${JSON_LD_ID}`)?.remove();
    const script = this.doc.createElement('script');
    script.type = 'application/ld+json';
    script.id = JSON_LD_ID;
    script.textContent = JSON.stringify(data);
    this.doc.head.appendChild(script);
  }

  /** The current route path, minus query string and fragment. */
  private currentPath(): string {
    const url = this.router?.url ?? '/';
    return url.split('?')[0].split('#')[0] || '/';
  }
}
