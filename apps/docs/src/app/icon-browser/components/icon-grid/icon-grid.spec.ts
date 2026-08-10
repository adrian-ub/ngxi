import { TestBed } from '@angular/core/testing';
import type { IconIndexEntry } from '../../../services/manifest.service';
import type { IconSetBundle } from '../../../services/icon-set.service';
import type { TrustedIconBody } from '../../../services/trusted-icon-body';
import { IconGrid, chunkRows } from './icon-grid';

/** Test-only stand-in for the validation-gate brand. */
function asTrusted(body: string): TrustedIconBody {
  return body as TrustedIconBody;
}

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

const bundle: IconSetBundle = {
  collection: 'lucide',
  viewBox: '0 0 24 24',
  bodies: new Map([
    ['award', asTrusted('<path d="M3 4"/>')],
    ['circle-check', asTrusted('<path d="M1 2"/>')],
    ['star', asTrusted('<path d="M5 6"/>')],
  ]),
  aliases: new Map([['check', 'circle-check']]),
  index: entries,
};

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
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconGrid],
    }).compileComponents();
  });

  it('renders rows from the filtered index', async () => {
    const fixture = TestBed.createComponent(IconGrid);
    fixture.componentRef.setInput('entries', entries);
    fixture.componentRef.setInput('bundle', bundle);
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

    const cells = host.querySelectorAll('.icon-cell');
    expect(cells.length).toBe(4);
    expect(host.textContent).toContain('circle-check');
  });

  it('tags alias entries with their parent', async () => {
    const fixture = TestBed.createComponent(IconGrid);
    fixture.componentRef.setInput('entries', entries);
    fixture.componentRef.setInput('bundle', bundle);
    fixture.componentRef.setInput('cols', 2);
    fixture.componentRef.setInput('viewportHeight', 600);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
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

    const aliasTag = host.querySelector('.alias-tag');
    expect(aliasTag).not.toBeNull();
    expect(aliasTag?.textContent).toContain('alias of circle-check');
  });

  it('emits the clicked entry', async () => {
    const fixture = TestBed.createComponent(IconGrid);
    fixture.componentRef.setInput('entries', entries);
    fixture.componentRef.setInput('bundle', bundle);
    fixture.componentRef.setInput('cols', 2);
    fixture.componentRef.setInput('viewportHeight', 600);
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();

    const host = fixture.nativeElement as HTMLElement;
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

    const emitted: IconIndexEntry[] = [];
    fixture.componentInstance.iconSelect.subscribe((entry: IconIndexEntry) =>
      emitted.push(entry),
    );

    const cells = host.querySelectorAll('.icon-cell');
    expect(cells.length).toBeGreaterThan(0);
    (cells[0] as HTMLButtonElement).click();
    expect(emitted.length).toBe(1);
  });
});
