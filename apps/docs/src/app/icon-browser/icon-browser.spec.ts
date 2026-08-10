import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { vi } from 'vitest';
import {
  Router,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { provideLocationMocks } from '@angular/common/testing';
import { IconBrowser } from './icon-browser';
import { ManifestService } from '../services/manifest.service';
import { IconSetService } from '../services/icon-set.service';
import {
  SetMeta,
  IconDocsManifest,
  IconIndexEntry,
  EMPTY_MANIFEST,
} from '../services/manifest.service';
import { IconSetBundle, SampleSet } from '../services/icon-set.service';
import { trustIconBody } from '../services/trusted-icon-body';

describe('IconBrowser', () => {
  const mockSets: SetMeta[] = [
    {
      collection: 'test-set-1',
      package: '@icons/test-set-1',
      name: 'Test Set 1',
      iconCount: 100,
      aliasCount: 10,
      license: 'MIT',
      author: 'Test Author',
      categories: ['UI 24px'],
      samples: ['home', 'user'],
      assets: {
        set: '/icons/test-set-1.json',
        index: '/icons/test-set-1.index.json',
        samples: '/icons/test-set-1.samples.json',
      },
    },
    {
      collection: 'test-set-2',
      package: '@icons/test-set-2',
      name: 'Test Set 2',
      iconCount: 50,
      aliasCount: 5,
      license: 'Apache-2.0',
      author: 'Test Author',
      categories: ['Media'],
      samples: ['settings'],
      assets: {
        set: '/icons/test-set-2.json',
        index: '/icons/test-set-2.index.json',
        samples: '/icons/test-set-2.samples.json',
      },
    },
  ];

  const mockManifest: IconDocsManifest = { sets: mockSets };

  const createMockIndex = (collection: string): IconIndexEntry[] => {
    if (collection === 'test-set-2') {
      return [
        {
          name: 'settings',
          className: 'SettingsIcon',
          selectorAttr: 'settings-icon',
          importFrom: '@icons/test-set-2',
          categories: ['Media'],
        },
      ];
    }
    return [
      {
        name: 'home',
        className: 'HomeIcon',
        selectorAttr: 'home-icon',
        importFrom: '@icons/test-set-1',
        categories: ['UI 24px'],
      },
      {
        name: 'user',
        className: 'UserIcon',
        selectorAttr: 'user-icon',
        importFrom: '@icons/test-set-1',
        categories: ['Media'],
      },
    ];
  };

  const createMockBundle = (collection: string): IconSetBundle => ({
    collection,
    viewBox: '0 0 24 24',
    bodies: new Map([
      ['home', trustIconBody('<path d="M12 2L2 7l10 5 10-5-10-5z" />')!],
      ['user', trustIconBody('<path d="M12 12c2.21 0 4-1.79 4-4z" />')!],
    ]),
    aliases: new Map(),
    index: createMockIndex(collection),
  });

  const createMockManifestService = (manifestValue = mockManifest) => ({
    manifestValue: signal(manifestValue),
  });

  const createMockSamples = (collection: string): SampleSet => ({
    collection,
    viewBox: '0 0 24 24',
    samples: new Map([
      ['home', trustIconBody('<path d="M12 2L2 7l10 5 10-5-10-5z" />')!],
      ['user', trustIconBody('<path d="M12 12c2.21 0 4-1.79 4-4z" />')!],
    ]),
  });

  const createMockIconSetService = () => ({
    bundle: (collection: string) =>
      signal<IconSetBundle | undefined>(createMockBundle(collection)),
    index: (collection: string) =>
      signal<IconIndexEntry[] | undefined>(createMockIndex(collection)),
    samples: (collection: string) =>
      signal<SampleSet | undefined>(createMockSamples(collection)),
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconBrowser],
      providers: [
        provideRouter([], withComponentInputBinding()),
        provideLocationMocks(),
        { provide: ManifestService, useValue: createMockManifestService() },
        { provide: IconSetService, useValue: createMockIconSetService() },
      ],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('displays the header with title', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('ngxi');
  });

  it('starts on the collections landing with no set selected', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();
    expect(fixture.componentInstance.selectedSet()).toBeNull();
    expect(fixture.componentInstance.browsing()).toBe(false);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.collection-card')).not.toBeNull();
  });

  it('renders collection select with an all-collections option and available sets', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const options = compiled.querySelectorAll('#collection-select option');
    expect(options.length).toBe(3);
    expect((options[0] as HTMLOptionElement).value).toBe('');
    expect(options[0].textContent).toContain('all collections');
    expect(options[1].textContent).toContain('Test Set 1');
    expect(options[2].textContent).toContain('Test Set 2');
  });

  it('shows search input', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('input[type="search"]')).not.toBeNull();
  });

  it('enters browse mode when a collection route param is bound', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.componentRef.setInput('collection', 'test-set-1');
    fixture.detectChanges();
    expect(fixture.componentInstance.selectedSet()?.collection).toBe(
      'test-set-1',
    );
    expect(fixture.componentInstance.browsing()).toBe(true);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.grid-viewport')).not.toBeNull();
    expect(compiled.textContent).toContain('Test Set 1');
  });

  it('filters icons based on query in browse mode', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.componentRef.setInput('collection', 'test-set-1');
    fixture.detectChanges();

    fixture.componentInstance.query.set('home');
    fixture.detectChanges();

    const entries = fixture.componentInstance.filteredIndex();
    expect(entries.length).toBe(1);
    expect(entries[0].name).toBe('home');
  });

  it('filters the browse index by per-icon category', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.componentRef.setInput('collection', 'test-set-1');
    fixture.detectChanges();

    fixture.componentInstance.category.set('UI 24px');
    fixture.detectChanges();

    const entries = fixture.componentInstance.filteredIndex();
    expect(entries.map((e) => e.name)).toEqual(['home']);
  });

  it('does not auto-select a set after render', async () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();
    await fixture.whenStable();
    await new Promise((r) => setTimeout(r, 10));
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedSet()).toBeNull();
  });

  it('renders the collections landing grid with sample icons', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.collection-card');
    expect(cards.length).toBe(2);
    expect(cards[0].textContent).toContain('Test Set 1');
    expect(cards[0].querySelectorAll('app-sample-icon').length).toBeGreaterThan(
      0,
    );
  });

  it('opens a collection when its landing card is clicked', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.collection-card');
    (cards[1] as HTMLButtonElement).click();
    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith(['/collection', 'test-set-2']);
  });

  it('navigates to a collection when the select changes', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    fixture.componentInstance.onSetChange('test-set-2');
    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith(['/collection', 'test-set-2']);
  });

  it('navigates to the landing when the select is cleared', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.componentRef.setInput('collection', 'test-set-1');
    fixture.detectChanges();

    fixture.componentInstance.onSetChange('');
    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('navigates back to the landing when the back control is used', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.componentRef.setInput('collection', 'test-set-1');
    fixture.detectChanges();

    fixture.componentInstance.backToCollections();
    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });

  it('filters collections by category on the landing', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    fixture.componentInstance.category.set('UI 24px');
    fixture.detectChanges();

    const sets = fixture.componentInstance.filteredSets();
    expect(sets.map((s) => s.collection)).toEqual(['test-set-1']);
  });

  it('filters collections by license on the landing', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    fixture.componentInstance.license.set('Apache-2.0');
    fixture.detectChanges();

    const sets = fixture.componentInstance.filteredSets();
    expect(sets.map((s) => s.collection)).toEqual(['test-set-2']);
  });

  it('exposes the distinct available categories and licenses', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    expect(fixture.componentInstance.availableCategories()).toEqual([
      'Media',
      'UI 24px',
    ]);
    expect(fixture.componentInstance.availableLicenses()).toEqual([
      'Apache-2.0',
      'MIT',
    ]);
  });

  it('populates global search groups across collections', async () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    fixture.componentInstance.query.set('home');
    fixture.detectChanges();
    await new Promise((r) => setTimeout(r, 400));
    fixture.detectChanges();

    const groups = fixture.componentInstance.globalGroups();
    expect(groups.length).toBe(1);
    expect(groups[0].set.collection).toBe('test-set-1');
    expect(groups[0].entries.map((e) => e.name)).toEqual(['home']);
  });

  it('mirrors filter signals to the URL query params', () => {
    const router = TestBed.inject(Router);
    const navigateSpy = vi.spyOn(router, 'navigate').mockResolvedValue(true);
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    fixture.componentInstance.query.set('home');
    fixture.detectChanges();

    expect(navigateSpy).toHaveBeenCalledWith([], {
      queryParams: { q: 'home', category: undefined, license: undefined },
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  });

  it('shows empty state when no sets in manifest', () => {
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [IconBrowser],
      providers: [
        provideRouter([], withComponentInputBinding()),
        provideLocationMocks(),
        {
          provide: ManifestService,
          useValue: createMockManifestService(EMPTY_MANIFEST),
        },
        { provide: IconSetService, useValue: createMockIconSetService() },
      ],
    }).compileComponents();

    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain('No icon manifest available');
    expect(compiled.textContent).toContain('generate-docs-manifest');
  });

  it('opens detail dialog on icon select', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    const entry: IconIndexEntry = {
      name: 'home',
      className: 'HomeIcon',
      selectorAttr: 'home-icon',
      importFrom: '@icons/test-set-1',
    };
    fixture.componentInstance.onIconSelect(entry);
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedEntry()).toBe(entry);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-icon-detail-dialog')).not.toBeNull();
  });

  it('closes detail dialog', () => {
    const fixture = TestBed.createComponent(IconBrowser);
    fixture.detectChanges();

    const entry: IconIndexEntry = {
      name: 'home',
      className: 'HomeIcon',
      selectorAttr: 'home-icon',
      importFrom: '@icons/test-set-1',
    };
    fixture.componentInstance.onIconSelect(entry);
    fixture.detectChanges();

    fixture.componentInstance.onDialogClose();
    fixture.detectChanges();

    expect(fixture.componentInstance.selectedEntry()).toBeNull();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-icon-detail-dialog')).toBeNull();
  });
});
