import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import { IconDetailDialog } from './icon-detail-dialog';
import type { IconIndexEntry } from '../../../services/manifest.service';
import { IconSetService } from '../../../services/icon-set.service';

describe('IconDetailDialog', () => {
  const createMockEntry = (
    overrides: Partial<IconIndexEntry> = {},
  ): IconIndexEntry => ({
    name: 'test-icon',
    className: 'TestIcon',
    selectorAttr: 'test-icon',
    importFrom: '@icons/test',
    ...overrides,
  });

  // The collection bundle: one full standalone svg per canonical icon.
  const testBundle = new Map<string, string>([
    [
      'test-icon',
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2"/></svg>',
    ],
  ]);

  const createMockService = (
    bundle: Map<string, string>,
  ): Pick<IconSetService, 'icons'> => ({
    icons: () =>
      signal<ReadonlyMap<string, string> | undefined>(bundle).asReadonly(),
  });

  const createFixture = (overrides: Partial<IconIndexEntry> = {}) => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    fixture.componentRef.setInput('entry', createMockEntry(overrides));
    fixture.componentRef.setInput('collection', 'test-set');
    return fixture;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDetailDialog],
      providers: [
        { provide: IconSetService, useValue: createMockService(testBundle) },
      ],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = createFixture();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('displays the icon name', () => {
    const fixture = createFixture({ name: 'home' });
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.icon-name')?.textContent).toContain('home');
  });

  it('displays class name and selector', () => {
    const fixture = createFixture({
      className: 'HomeIcon',
      selectorAttr: 'home-icon',
    });
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('dd code')?.textContent).toContain(
      'HomeIcon',
    );
  });

  it('computes install snippet correctly', () => {
    const fixture = createFixture({ importFrom: '@icons/test' });
    fixture.detectChanges();
    expect(fixture.componentInstance.installSnippet()).toBe(
      'pnpm add @icons/test',
    );
  });

  it('computes import snippet correctly', () => {
    const fixture = createFixture({
      className: 'HomeIcon',
      importFrom: '@icons/test',
    });
    fixture.detectChanges();
    expect(fixture.componentInstance.importSnippet()).toBe(
      "import { HomeIcon } from '@icons/test';",
    );
  });

  it('computes template snippet correctly', () => {
    const fixture = createFixture({ selectorAttr: 'home-icon' });
    fixture.detectChanges();
    expect(fixture.componentInstance.templateSnippet()).toBe(
      '<svg home-icon></svg>',
    );
  });

  it('shows alias info when present', () => {
    const fixture = createFixture({ aliasOf: 'home' });
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Alias of');
  });

  it('injects the canonical svg resolved from the collection bundle', () => {
    const fixture = createFixture();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(fixture.componentInstance.rawSvgSnippet()).toContain('<svg');
    expect(compiled.querySelectorAll('svg').length).toBeGreaterThan(0);
    expect(compiled.querySelector('svg path')?.getAttribute('d')).toBe(
      'M1 2',
    );
  });

  it('resolves an alias entry to its canonical svg from the bundle', () => {
    const fixture = createFixture({
      name: 'short-name',
      aliasOf: 'test-icon',
    });
    fixture.detectChanges();
    expect(fixture.componentInstance.rawSvgSnippet()).toContain('<svg');
    expect(fixture.componentInstance.rawSvgSnippet()).toContain('M1 2');
  });

  it('fails closed to an empty preview when the canonical icon is missing from the bundle', () => {
    const emptyBundle = new Map<string, string>();
    TestBed.overrideProvider(IconSetService, {
      useValue: createMockService(emptyBundle),
    });

    const fixture = createFixture();
    fixture.detectChanges();
    expect(fixture.componentInstance.rawSvgSnippet()).toBe('');
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('svg path')).toBeNull();
  });
});
