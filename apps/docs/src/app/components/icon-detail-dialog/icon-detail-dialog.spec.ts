import { TestBed } from '@angular/core/testing';
import { IconDetailDialog } from './icon-detail-dialog';
import * as loadCollectionModule from '../../data/load-collection';

describe('IconDetailDialog', () => {
  const mockCollectionData = {
    prefix: 'test',
    icons: {
      'test-icon': {
        body: '<path d="M1 2"/>',
        width: 24,
        height: 24,
      },
    },
  };

  const createFixture = (iconName = 'test-icon') => {
    jest.spyOn(loadCollectionModule, 'loadCollection').mockResolvedValue(mockCollectionData as any);

    const fixture = TestBed.createComponent(IconDetailDialog);
    fixture.componentRef.setInput('iconName', iconName);
    fixture.componentRef.setInput('collection', 'test-set');
    return fixture;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconDetailDialog],
    }).compileComponents();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('creates the component', () => {
    const fixture = createFixture();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('displays the icon name', async () => {
    const fixture = createFixture('home');
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.icon-name')?.textContent).toContain('home');
  });

  it('computes install snippet correctly', async () => {
    const fixture = createFixture();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.installSnippet()).toBe(
      'pnpm add @ngxi/test-set',
    );
  });

  it('computes import snippet correctly', async () => {
    const fixture = createFixture();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.importSnippet()).toBe(
      "import { TestTestIcon } from '@ngxi/test-set';",
    );
  });

  it('computes template snippet correctly', async () => {
    const fixture = createFixture();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.templateSnippet()).toContain('<svg');
    expect(fixture.componentInstance.templateSnippet()).toContain('testTestIcon');
  });

  it('injects the canonical svg resolved from the collection', async () => {
    const fixture = createFixture();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.rawSvgSnippet()).toContain('<svg');
    expect(fixture.componentInstance.rawSvgSnippet()).toContain('M1 2');
  });

  it('fails closed to an empty preview when the icon is missing', async () => {
    jest.spyOn(loadCollectionModule, 'loadCollection').mockResolvedValue({
      prefix: 'test',
      icons: {},
    } as any);

    const fixture = createFixture('missing-icon');
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.rawSvgSnippet()).toBe('');
  });
});
