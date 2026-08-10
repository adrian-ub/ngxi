import { effect } from '@angular/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  EMPTY_MANIFEST,
  ManifestService,
  type IconDocsManifest,
} from './manifest.service';

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

/** Mirrors how the icon-grid-container binds the resource in its template. */
function subscribeToManifest(service: ManifestService): void {
  TestBed.runInInjectionContext(() => {
    effect(() => {
      service.manifest.value();
    });
  });
  TestBed.flushEffects();
}

describe('ManifestService', () => {
  let service: ManifestService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch()), provideHttpClientTesting()],
    });
    service = TestBed.inject(ManifestService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('starts with the empty default and does not fetch until read', () => {
    expect(service.manifestValue()).toEqual(EMPTY_MANIFEST);
    httpMock.verify();
  });

  it('GETs /icons/manifest.json once and exposes the typed manifest', async () => {
    subscribeToManifest(service);
    expect(service.manifestValue()).toEqual(EMPTY_MANIFEST);

    const request = httpMock.expectOne('/icons/manifest.json');
    expect(request.request.method).toBe('GET');
    request.flush(manifestFixture);
    await TestBed.flushEffects();

    expect(service.manifestValue()).toEqual(manifestFixture);
    expect(service.manifest.status()).toBe('resolved');
  });

  it('leaves the empty default when the request errors', async () => {
    subscribeToManifest(service);

    const request = httpMock.expectOne('/icons/manifest.json');
    request.flush('boom', { status: 500, statusText: 'Server Error' });
    await TestBed.flushEffects();

    expect(service.manifestValue()).toEqual(EMPTY_MANIFEST);
    expect(service.manifest.status()).toBe('error');
  });
});
