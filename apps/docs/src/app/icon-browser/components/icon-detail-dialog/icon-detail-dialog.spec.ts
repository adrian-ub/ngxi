import { TestBed } from '@angular/core/testing';
import { IconDetailDialog } from './icon-detail-dialog';
import type { IconIndexEntry } from '../../../services/manifest.service';
import type { IconSetBundle } from '../../../services/icon-set.service';
import { trustIconBody } from '../../../services/trusted-icon-body';

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

  const createMockBundle = (): IconSetBundle => ({
    collection: 'test',
    viewBox: '0 0 24 24',
    bodies: new Map([
      ['test-icon', trustIconBody('<path d="M12 2L2 7l10 5 10-5-10-5z" />')!],
    ]),
    aliases: new Map(),
    index: [createMockEntry()],
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDetailDialog],
    }).compileComponents();
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    fixture.componentRef.setInput('entry', createMockEntry());
    fixture.componentRef.setInput('bundle', createMockBundle());
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('displays the icon name', () => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    const entry = createMockEntry({ name: 'home' });
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', createMockBundle());
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.icon-name')?.textContent).toContain('home');
  });

  it('displays class name and selector', () => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    const entry = createMockEntry({
      className: 'HomeIcon',
      selectorAttr: 'home-icon',
    });
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', createMockBundle());
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('dd code')?.textContent).toContain(
      'HomeIcon',
    );
  });

  it('computes install snippet correctly', () => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    const entry = createMockEntry({ importFrom: '@icons/test' });
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', createMockBundle());
    fixture.detectChanges();
    expect(fixture.componentInstance.installSnippet()).toBe(
      'pnpm add @icons/test',
    );
  });

  it('computes import snippet correctly', () => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    const entry = createMockEntry({
      className: 'HomeIcon',
      importFrom: '@icons/test',
    });
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', createMockBundle());
    fixture.detectChanges();
    expect(fixture.componentInstance.importSnippet()).toBe(
      "import { HomeIcon } from '@icons/test';",
    );
  });

  it('computes template snippet correctly', () => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    const entry = createMockEntry({ selectorAttr: 'home-icon' });
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', createMockBundle());
    fixture.detectChanges();
    expect(fixture.componentInstance.templateSnippet()).toBe(
      '<svg home-icon></svg>',
    );
  });

  it('shows alias info when present', () => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    const entry = createMockEntry({ aliasOf: 'home' });
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', createMockBundle());
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Alias of');
  });
});
