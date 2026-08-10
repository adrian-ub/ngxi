import { TestBed } from '@angular/core/testing';
import { IconGrid } from './icon-grid';
import type { IconIndexEntry } from '../../../services/manifest.service';
import type { IconSetBundle } from '../../../services/icon-set.service';
import type { TrustedIconBody } from '../../../services/trusted-icon-body';

const entries: IconIndexEntry[] = [
  {
    name: 'award',
    className: 'LucideAward',
    selectorAttr: 'lucideAward',
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
  bodies: new Map<string, TrustedIconBody>([
    ['award', '<path d="M3 4"/>' as TrustedIconBody],
    ['star', '<path d="M5 6"/>' as TrustedIconBody],
  ]),
  aliases: new Map(),
  index: entries,
};

describe('icon-grid-diag', () => {
  it('dumps the rendered DOM', async () => {
    await TestBed.configureTestingModule({
      imports: [IconGrid],
    }).compileComponents();
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
    const html = (fixture.nativeElement as HTMLElement).outerHTML;
    // Diagnostic: capture actual DOM for reference
    expect(html.length).toBeGreaterThan(100);
    expect(html).toContain('cdk-virtual-scroll-viewport');
    expect(html).toContain('award');
    expect(html).toContain('star');
  });
});
