import { TestBed } from '@angular/core/testing';
import { signal } from '@angular/core';
import type { IconIndexEntry } from '../../../services/manifest.service';
import { IconSetService } from '../../../services/icon-set.service';
import { IconGrid, chunkRows } from './icon-grid';

const entries: IconIndexEntry[] = [
  {
    name: 'award',
    className: 'LucideAward',
    selectorAttr: 'lucideAward',
    importFrom: '@ngxi/lucide',
  },
  {
    name: 'circle-check',
    className: 'LucideCircleCheck',
    selectorAttr: 'lucideCircleCheck',
    importFrom: '@ngxi/lucide',
  },
  {
    name: 'check',
    aliasOf: 'circle-check',
    className: 'LucideCircleCheck',
    selectorAttr: 'lucideCircleCheck',
    importFrom: '@ngxi/lucide',
  },
  {
    name: 'star',
    className: 'LucideStar',
    selectorAttr: 'lucideStar',
    importFrom: '@ngxi/lucide',
  },
];

// The full standalone svg strings a bundle carries, keyed by canonical name.
const fullBundle = new Map<string, string>([
  [
    'award',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M award path"/></svg>',
  ],
  [
    'circle-check',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M circle path"/></svg>',
  ],
  [
    'star',
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M star path"/></svg>',
  ],
]);

describe('chunkRows', () => {
  it('splits entries into fixed-size rows', () => {
    expect(chunkRows(entries, 2)).toEqual([
      entries.slice(0, 2),
      entries.slice(2),
    ]);
  });

  it('keeps the partial tail row and handles empty input', () => {
    expect(chunkRows(entries, 3)).toEqual([
      entries.slice(0, 3),
      entries.slice(3),
    ]);
    expect(chunkRows([], 4)).toEqual([]);
  });
});

describe('IconGrid', () => {
  const createMockService = (bundle: Map<string, string>) => ({
    icons: () => signal<ReadonlyMap<string, string> | undefined>(bundle),
  });

  const renderGrid = async (
    overrides: { bundle?: Map<string, string>; collection?: string } = {},
  ): Promise<{
    fixture: import('@angular/core/testing').ComponentFixture<IconGrid>;
    host: HTMLElement;
  }> => {
    const fixture = TestBed.createComponent(IconGrid);
    fixture.componentRef.setInput('entries', entries);
    fixture.componentRef.setInput('collection', overrides.collection ?? 'lucide');
    fixture.componentRef.setInput('cols', 2);
    fixture.componentRef.setInput('viewportHeight', 600);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
    // Force the viewport to have height for CDK
    const viewport = host.querySelector(
      'cdk-virtual-scroll-viewport',
    ) as HTMLElement;
    if (viewport) {
      viewport.style.height = '600px';
      viewport.style.minHeight = '600px';
    }
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    return { fixture, host };
  };

  const cellByTitle = (host: HTMLElement, title: string): HTMLElement | null =>
    Array.from(host.querySelectorAll<HTMLElement>('.icon-cell')).find(
      (cell) => cell.getAttribute('title') === title,
    ) ?? null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGrid],
      providers: [
        { provide: IconSetService, useValue: createMockService(fullBundle) },
      ],
    }).compileComponents();
  });

  it('renders rows from the filtered index', async () => {
    const { host } = await renderGrid();

    const cells = host.querySelectorAll('.icon-cell');
    expect(cells.length).toBe(4);
    expect(host.textContent).toContain('circle-check');
  });

  it('tags alias entries with their parent', async () => {
    const { host } = await renderGrid();

    const aliasTag = host.querySelector('.alias-tag');
    expect(aliasTag).not.toBeNull();
    expect(aliasTag?.textContent).toContain('alias of circle-check');
  });

  it('emits the clicked entry', async () => {
    const { fixture, host } = await renderGrid();

    const emitted: IconIndexEntry[] = [];
    fixture.componentInstance.iconSelect.subscribe((entry: IconIndexEntry) =>
      emitted.push(entry),
    );

    const cells = host.querySelectorAll('.icon-cell');
    expect(cells.length).toBeGreaterThan(0);
    (cells[0] as HTMLButtonElement).click();
    expect(emitted.length).toBe(1);
  });

  it('renders canonical svg strings via innerHTML instead of img src', async () => {
    const { host } = await renderGrid();

    expect(host.querySelectorAll('img').length).toBe(0);
    const awardCell = cellByTitle(host, 'award');
    const awardPath = awardCell?.querySelector('svg path');
    expect(awardPath?.getAttribute('d')).toBe('M award path');
    const starCell = cellByTitle(host, 'star');
    const starPath = starCell?.querySelector('svg path');
    expect(starPath?.getAttribute('d')).toBe('M star path');
  });

  it('resolves alias entries to their canonical svg', async () => {
    const { host } = await renderGrid();

    const checkCell = cellByTitle(host, 'check (alias of circle-check)');
    const path = checkCell?.querySelector('svg path');
    expect(path?.getAttribute('d')).toBe('M circle path');
  });

  it('fails closed when a canonical icon is missing from the bundle', async () => {
    const withoutStar = new Map(fullBundle);
    withoutStar.delete('star');
    TestBed.overrideProvider(IconSetService, {
      useValue: createMockService(withoutStar),
    });

    const { host } = await renderGrid();

    const starCell = cellByTitle(host, 'star');
    expect(starCell?.querySelector('svg')).toBeNull();
    // Other cells keep rendering their trusted svgs.
    const awardCell = cellByTitle(host, 'award');
    expect(awardCell?.querySelector('svg path')?.getAttribute('d')).toBe(
      'M award path',
    );
  });
});
