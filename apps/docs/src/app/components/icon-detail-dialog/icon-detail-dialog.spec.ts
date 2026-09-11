import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { IconDetailDialog } from './icon-detail-dialog';

// `loadCollection` is a plain ESM export: Angular's unit-test system blocks
// `vi.mock` for relative imports and `vi.spyOn` cannot redefine ESM exports.
// The component loads data through `loadCollection`, which fetches
// `/collections/{id}.json.gz`. Stubbing the global `fetch` is the supported
// way to control that data without mocking the module.
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

const mockSplitCollectionData = {
  prefix: 'fluent',
  icons: {
    'accessibility-20-filled': {
      body: '<path d="M1 2"/>',
      width: 24,
      height: 24,
    },
  },
};

const mockSplitPlan = {
  hasBaseIcons: false,
  entries: [{ name: '20-filled', suffix: '20-filled' }],
};

describe('IconDetailDialog', () => {
  const createFixture = (iconName = 'test-icon') => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    fixture.componentRef.setInput('iconName', iconName);
    fixture.componentRef.setInput('collection', 'test-set');
    return fixture;
  };

  beforeEach(async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async (url: string | URL | Request) => {
        const resolved = typeof url === 'string' ? url : url instanceof URL ? url.pathname : url.url;
        const data = resolved.includes('fluent')
          ? mockSplitCollectionData
          : mockCollectionData;
        return {
          ok: true,
          // `loadCollection` checks `response.body` before the content-encoding
          // branch; with `gzip` it reads `response.text()` and never touches body.
          body: new ReadableStream(),
          headers: {
            get: (name: string) => (name === 'content-encoding' ? 'gzip' : ''),
          },
          text: async () => JSON.stringify(data),
        };
      }),
    );

    await TestBed.configureTestingModule({
      imports: [IconDetailDialog],
    }).compileComponents();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
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
      "import { TestSetTestIcon } from '@ngxi/test-set';",
    );
  });

  it('computes import snippet from the secondary entry point when the collection is split', async () => {
    const fixture = TestBed.createComponent(IconDetailDialog);
    fixture.componentRef.setInput('iconName', 'accessibility-20-filled');
    fixture.componentRef.setInput('collection', 'fluent');
    fixture.componentRef.setInput('split', mockSplitPlan);
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.importSnippet()).toBe(
      "import { FluentAccessibility20Filled } from '@ngxi/fluent/20-filled';",
    );
  });

  it('computes template snippet correctly', async () => {
    const fixture = createFixture();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.templateSnippet()).toContain('<svg');
    expect(fixture.componentInstance.templateSnippet()).toContain('testSetTestIcon');
  });

  it('injects the canonical svg resolved from the collection', async () => {
    const fixture = createFixture();
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.rawSvgSnippet()).toContain('<svg');
    expect(fixture.componentInstance.rawSvgSnippet()).toContain('M1 2');
  });

  it('fails closed to an empty preview when the icon is missing', async () => {
    const fixture = createFixture('missing-icon');
    await fixture.whenStable();
    fixture.detectChanges();
    expect(fixture.componentInstance.rawSvgSnippet()).toBe('');
  });
});
