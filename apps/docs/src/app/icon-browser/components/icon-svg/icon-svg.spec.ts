import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { IconSvg } from './icon-svg';
import type { IconIndexEntry } from '../../../services/manifest.service';
import type { IconSetBundle } from '../../../services/icon-set.service';
import {
  trustIconBody,
  type TrustedIconBody,
} from '../../../services/trusted-icon-body';

function asTrusted(body: string): TrustedIconBody {
  return body as TrustedIconBody;
}

const entry: IconIndexEntry = {
  name: 'circle-check',
  className: 'LucideCircleCheck',
  selectorAttr: 'lucideCircleCheck',
  importFrom: '@ngxi/lucide',
};

const aliasEntry: IconIndexEntry = {
  name: 'check',
  aliasOf: 'circle-check',
  className: 'LucideCircleCheck',
  selectorAttr: 'lucideCircleCheck',
  importFrom: '@ngxi/lucide',
};

const bundle: IconSetBundle = {
  collection: 'lucide',
  viewBox: '0 0 24 24',
  bodies: new Map([['circle-check', asTrusted('<path d="M1 2"/>')]]),
  aliases: new Map([['check', 'circle-check']]),
  index: [entry, aliasEntry],
};

describe('IconSvg', () => {
  let sanitizer: DomSanitizer;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconSvg],
    }).compileComponents();
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('creates the component', () => {
    const fixture = TestBed.createComponent(IconSvg);
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', bundle);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders the trusted body for a direct icon', () => {
    const fixture = TestBed.createComponent(IconSvg);
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', bundle);
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).not.toBeNull();
    // Browser normalizes self-closing tags to open/close pairs
    expect(svg?.innerHTML).toContain('<path d="M1 2"></path>');
    expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
  });

  it('renders the parent body for an alias', () => {
    const fixture = TestBed.createComponent(IconSvg);
    fixture.componentRef.setInput('entry', aliasEntry);
    fixture.componentRef.setInput('bundle', bundle);
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg?.innerHTML).toContain('<path d="M1 2"></path>');
  });

  it('returns null safeBody when bundle is missing', () => {
    const fixture = TestBed.createComponent(IconSvg);
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', undefined);
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).not.toBeNull();
    // innerHTML should be empty or not set when safeBody is null
    expect(svg?.innerHTML).toBe('');
  });

  it('falls back to default viewBox when bundle has no dimensions', () => {
    const slimBundle: IconSetBundle = {
      ...bundle,
      viewBox: undefined as any,
    };
    const fixture = TestBed.createComponent(IconSvg);
    fixture.componentRef.setInput('entry', entry);
    fixture.componentRef.setInput('bundle', slimBundle);
    fixture.detectChanges();

    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg?.getAttribute('viewBox')).toBe('0 0 24 24');
  });

  describe('validateBody static helper', () => {
    it('accepts a plain SVG body', () => {
      expect(IconSvg.validateBody('<path d="M1 2"/>')).not.toBeNull();
    });

    it('rejects script elements', () => {
      expect(IconSvg.validateBody('<script>evil()</script>')).toBeNull();
    });

    it('rejects foreignObject elements', () => {
      expect(
        IconSvg.validateBody('<foreignObject><div/></foreignObject>'),
      ).toBeNull();
    });

    it('rejects inline event handlers', () => {
      expect(
        IconSvg.validateBody('<path onclick="evil()" d="M1 2"/>'),
      ).toBeNull();
    });

    it('rejects href attributes', () => {
      expect(IconSvg.validateBody('<use href="http://evil" />')).toBeNull();
    });

    it('rejects style url() references', () => {
      expect(
        IconSvg.validateBody('<path style="fill:url(#x)" d="M1 2"/>'),
      ).toBeNull();
    });

    it('rejects embedded svg root', () => {
      expect(IconSvg.validateBody('<svg><path/></svg>')).toBeNull();
    });
  });
});
