// @vitest-environment node
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { IconifyJSON } from '@iconify/types';
import {
  generateIcons,
  generateReadme,
  generateSecondaryEntry,
} from './generate';
import {
  filterIconifyJSON,
  updateReference,
} from '../workspace-plugin/generators/icon-library/lib/reference';
import {
  buildReadme,
  pickReadmeUsage,
} from '../workspace-plugin/generators/icon-library/lib/generate-readme';
import {
  extractSvgBody,
  extractSvgRootAttributes,
  hasRenderableElements,
  hoistPresentationAttributes,
  prefixSvgTags,
} from '../workspace-plugin/generators/icon-library/lib/svg-component';
import {
  generateIconFileContent,
  type IconSetInfo,
} from '../workspace-plugin/generators/icon-library/lib/generate-icon-files';

describe('svg-component helpers', () => {
  it('extracts width/height/viewBox from the svg root', () => {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path d="M1 2"/></svg>';
    expect(extractSvgRootAttributes(svg)).toEqual({
      width: '50',
      height: '50',
      viewBox: '0 0 50 50',
    });
  });

  it('returns null for root attributes that are absent', () => {
    const svg = '<svg><path d="M1 2"/></svg>';
    expect(extractSvgRootAttributes(svg)).toEqual({
      width: null,
      height: null,
      viewBox: null,
    });
  });

  it('extracts the body between the svg tags', () => {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M1 2"/></svg>';
    expect(extractSvgBody(svg)).toBe('<path d="M1 2"/>');
  });

  it('hoists uniform presentation attributes and strips them from the body', () => {
    const body =
      '<path fill="currentColor" d="M1 2"/><path fill="currentColor" d="M3 4"/>';
    const { body: stripped, hoisted } = hoistPresentationAttributes(body);
    expect(stripped).toBe('<path d="M1 2"/><path d="M3 4"/>');
    expect(hoisted).toEqual({ fill: 'currentColor' });
  });

  it('hoists all five stroke attributes when uniform', () => {
    const body =
      '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 2"/>';
    const { body: stripped, hoisted } = hoistPresentationAttributes(body);
    expect(stripped).toBe('<path d="M1 2"/>');
    expect(hoisted).toEqual({
      fill: 'none',
      stroke: 'currentColor',
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-width': '2',
    });
  });

  it('does not hoist an attribute whose values differ across elements', () => {
    const body = '<path fill="red" d="M1 2"/><path fill="blue" d="M3 4"/>';
    const { body: stripped, hoisted } = hoistPresentationAttributes(body);
    expect(stripped).toBe(body);
    expect(hoisted).toEqual({});
  });

  it('strips the title element', () => {
    const body = '<title>An icon</title><path d="M1 2"/>';
    const { body: stripped } = hoistPresentationAttributes(body);
    expect(stripped).toBe('<path d="M1 2"/>');
  });

  it('prefixes every known element tag with svg:', () => {
    const body =
      '<g fill="red"><path d="M1 2"/><circle cx="1" cy="2" r="3"/></g>';
    expect(prefixSvgTags(body)).toBe(
      '<svg:g fill="red"><svg:path d="M1 2"/><svg:circle cx="1" cy="2" r="3"/></svg:g>',
    );
  });

  it('prefixes gradient, filter and text element tags with svg:', () => {
    const body =
      '<defs><linearGradient id="g"><stop offset="0"/></linearGradient>' +
      '<radialGradient id="r"/><filter id="f"><feGaussianBlur stdDeviation="1"/>' +
      '</filter></defs><text><tspan>hi</tspan></text>';
    expect(prefixSvgTags(body)).toBe(
      '<svg:defs><svg:linearGradient id="g"><svg:stop offset="0"/></svg:linearGradient>' +
        '<svg:radialGradient id="r"/><svg:filter id="f"><svg:feGaussianBlur stdDeviation="1"/>' +
        '</svg:filter></svg:defs><svg:text><svg:tspan>hi</svg:tspan></svg:text>',
    );
  });

  it('hasRenderableElements reports whether elements survive hoisting', () => {
    expect(hasRenderableElements('<path d="M1 2"/>')).toBe(true);
    expect(hasRenderableElements('<g></g>')).toBe(true);
    expect(hasRenderableElements('<title>An icon</title>')).toBe(true);
    expect(hasRenderableElements('')).toBe(false);
  });
});

describe('generateIconFileContent', () => {
  const setInfo: IconSetInfo = {
    name: 'Test Icons',
    author: { name: 'Test Author' },
    license: { title: 'MIT' },
  };

  it('emits a self-contained ei-style component', () => {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><path fill="currentColor" d="M42 20h-2"/><path fill="currentColor" d="M29 26h-8"/></svg>';
    const content = generateIconFileContent(
      setInfo,
      'archive',
      svg,
      'BASE64',
      'ei',
    );

    // Self-contained: no imports of the deleted base files, shared template or config.
    expect(content).not.toMatch(/-icon-base|-icon-template|-config|types'/);
    expect(content).toContain("from '@angular/core';");

    expect(content).toContain("selector: 'svg[eiArchive]',");
    expect(content).toContain('export class EiArchive {');
    expect(content).toContain('<svg eiArchive></svg>');
    expect(content).toContain("'[attr.aria-hidden]': 'ariaHidden()',");
    expect(content).toContain("'[attr.xmlns]': 'xmlns',");
    expect(content).toContain("'[attr.width]': 'width()',");
    expect(content).toContain("'[attr.height]': 'height()',");
    expect(content).toContain("'[attr.viewBox]': 'viewBox()',");
    expect(content).toContain("'[attr.fill]': 'fill()',");
    expect(content).toContain("'data-slot': 'icon',");
    expect(content).toContain('encapsulation: ViewEncapsulation.None,');

    // Input defaults come from the real SVG data, never hardcoded to 24.
    expect(content).toContain("readonly width = input<string | number>('50');");
    expect(content).toContain(
      "readonly height = input<string | number>('50');",
    );
    expect(content).toContain("readonly viewBox = input<string>('0 0 50 50');");
    expect(content).toContain("readonly fill = input<string>('currentColor');");

    expect(content).toContain(
      "readonly ariaHidden = input<boolean | 'true' | 'false'>(true);",
    );
    expect(content).toContain('Icon from Test Icons by Test Author - MIT');
    expect(content).toContain('@component @name EiArchive');
    expect(content).toContain(
      '@preview ![img](data:image/svg+xml;base64,BASE64)',
    );
    expect(content).toContain('https://icon-sets.iconify.design/ei/archive');
  });

  it('emits stroke inputs with kebab aliases when the stroke attributes are uniform', () => {
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>';
    const content = generateIconFileContent(
      setInfo,
      'activity',
      svg,
      'B64',
      'lucide',
    );

    expect(content).toContain(
      "readonly stroke = input<string>('currentColor');",
    );
    expect(content).toContain(
      "readonly strokeWidth = input<string | number>('2', { alias: 'stroke-width' });",
    );
    expect(content).toContain(
      "readonly strokeLinecap = input<string>('round', { alias: 'stroke-linecap' });",
    );
    expect(content).toContain(
      "readonly strokeLinejoin = input<string>('round', { alias: 'stroke-linejoin' });",
    );
    expect(content).toContain("'[attr.stroke-width]': 'strokeWidth()',");
    expect(content).toContain("'[attr.stroke-linecap]': 'strokeLinecap()',");
    expect(content).toContain("'[attr.stroke-linejoin]': 'strokeLinejoin()',");
  });

  it('leaves differing presentation attributes inline and emits no input for them', () => {
    const svg =
      '<svg width="24" height="24" viewBox="0 0 24 24"><path fill="red" d="M1 2"/><path fill="blue" d="M3 4"/></svg>';
    const content = generateIconFileContent(
      setInfo,
      'multi',
      svg,
      'B64',
      'test',
    );
    expect(content).not.toContain('readonly fill =');
    expect(content).toContain('fill="red"');
    expect(content).toContain('fill="blue"');
  });
});

describe('generate-icons script', () => {
  const fixture: IconifyJSON = {
    prefix: 'test',
    width: 24,
    height: 24,
    icons: {
      'arrow-down': { body: '<path d="M12 5v14" />' },
      circle: { body: '<circle cx="12" cy="12" r="10" />' },
      layers: {
        body: '<g fill="red"><path d="M1 2" /><circle cx="1" cy="2" r="3" /></g>',
        width: 40,
        height: 36,
      },
      'title-only': { body: '<title>Just a title</title>' },
    },
    info: {
      name: 'Test Icons',
      author: { name: 'Test Author' },
      license: { title: 'MIT', spdx: 'MIT' },
    },
  };

  let tempRoot: string;

  beforeAll(() => {
    tempRoot = mkdtempSync(join(tmpdir(), 'generate-icons-'));
  });

  afterAll(() => {
    rmSync(tempRoot, { recursive: true, force: true });
  });

  it('writes one component per icon and the icons barrel', async () => {
    const result = await generateIcons(join(tempRoot, 'src'), fixture, 'test');

    expect(result.iconCount).toBe(4);

    // The package barrel is rendered by the icon-library generator from
    // templates, not by this script, and the base files are gone entirely.
    expect(existsSync(join(tempRoot, 'src/lib/types.ts'))).toBe(false);
    expect(existsSync(join(tempRoot, 'src/index.ts'))).toBe(false);

    const arrowDown = readFileSync(
      join(tempRoot, 'src/lib/icons/arrow-down.ts'),
      'utf-8',
    );
    expect(arrowDown).toContain('TestArrowDown');
    expect(arrowDown).toContain('svg[testArrowDown]');
    expect(arrowDown).toContain('Icon from Test Icons by Test Author - MIT');
    expect(arrowDown).toContain('@component @name TestArrowDown');
    expect(arrowDown).toContain('@preview ![img](data:image/svg+xml;base64,');
    expect(arrowDown).toContain(
      'https://icon-sets.iconify.design/test/arrow-down',
    );
    // Self-contained component: only the @angular/core import remains.
    expect(arrowDown).not.toMatch(
      /from '[^']*icon-base'|from '[^']*icon-template'|from '[^']*types'/,
    );

    const layers = readFileSync(
      join(tempRoot, 'src/lib/icons/layers.ts'),
      'utf-8',
    );
    // Per-icon native size overrides the set-wide default; <g> nesting survives.
    expect(layers).toContain("readonly width = input<string | number>('40');");
    expect(layers).toContain("readonly height = input<string | number>('36');");
    expect(layers).toContain("readonly viewBox = input<string>('0 0 40 36');");
    expect(layers).toContain("readonly fill = input<string>('red');");
    expect(layers).toContain('<svg:g>');
    expect(layers).toContain('</svg:g>');

    // An icon whose body renders nothing after hoisting is skipped.
    expect(existsSync(join(tempRoot, 'src/lib/icons/title-only.ts'))).toBe(
      false,
    );

    const barrel = readFileSync(
      join(tempRoot, 'src/lib/icons/index.ts'),
      'utf-8',
    );
    expect(barrel).toContain("export { TestArrowDown } from './arrow-down';");
    expect(barrel).not.toContain('title-only');

    expect(result.files).toContain('lib/icons/arrow-down.ts');
    expect(result.files).toContain('lib/icons/index.ts');
    expect(result.files).not.toContain('lib/test-icon-base.ts');
    expect(result.files).not.toContain('index.ts');
    expect(result.written).toBeGreaterThan(0);
  });

  it('is idempotent: re-running writes nothing and reports everything unchanged', async () => {
    const sourceRoot = join(tempRoot, 'src');
    await generateIcons(sourceRoot, fixture, 'test');
    const result = await generateIcons(sourceRoot, fixture, 'test');

    expect(result.written).toBe(0);
    expect(result.unchanged).toBeGreaterThan(0);
    expect(result.files).toEqual([]);
  });

  it('generates a self-contained secondary entry with only icon components', async () => {
    const entryRoot = join(tempRoot, 'split', '20-filled', 'src');
    const result = await generateSecondaryEntry(
      entryRoot,
      fixture,
      // The caller passes the collection as the component prefix: the icon
      // name already carries the entry suffix, so the entry is not repeated.
      'fluent',
    );

    expect(result.iconCount).toBe(4);
    expect(existsSync(join(entryRoot, 'lib/icons/arrow-down.ts'))).toBe(true);

    // Nothing from the old shared base is duplicated into the entry.
    expect(existsSync(join(entryRoot, 'lib/fluent-icon-base.ts'))).toBe(false);
    expect(existsSync(join(entryRoot, 'lib/fluent-config.ts'))).toBe(false);
    expect(existsSync(join(entryRoot, 'lib/types.ts'))).toBe(false);

    // The entry's src/index.ts barrel is rendered by the icon-library
    // generator from templates, not by this script.
    expect(existsSync(join(entryRoot, 'index.ts'))).toBe(false);

    const arrowDown = readFileSync(
      join(entryRoot, 'lib/icons/arrow-down.ts'),
      'utf-8',
    );
    // Component is prefixed with the collection only (the icon name keeps its
    // own suffix) and is fully self-contained: it no longer imports the
    // primary base.
    expect(arrowDown).toContain('FluentArrowDown');
    expect(arrowDown).toContain('svg[fluentArrowDown]');
    expect(arrowDown).not.toContain("from '../../../../src/lib/");
    expect(arrowDown).not.toMatch(/fluent-icon-base|fluent-icon-template/);
    expect(arrowDown).toContain('Icon from Test Icons by Test Author - MIT');
    expect(arrowDown).toContain('@preview ![img](data:image/svg+xml;base64,');

    expect(result.files).toContain('lib/icons/arrow-down.ts');
    expect(result.files).not.toContain('index.ts');
    expect(result.written).toBeGreaterThan(0);
  });

  it('filterIconifyJSON keeps only matching icons and aliases whose parent survives', () => {
    const withAliases: IconifyJSON = {
      prefix: 'test',
      icons: {
        'arrow-down-20-filled': { body: '<path d="M1 2" />' },
        'circle-20-filled': { body: '<circle cx="1" cy="1" r="1" />' },
        'arrow-down-24-filled': { body: '<path d="M3 4" />' },
      },
      aliases: {
        'arrow-down-20': { parent: 'arrow-down-20-filled' },
        'orphan-20': { parent: 'orphan-20-filled' },
      },
    };

    const filtered = filterIconifyJSON(withAliases, '*-20-filled');
    expect(Object.keys(filtered.icons)).toEqual([
      'arrow-down-20-filled',
      'circle-20-filled',
    ]);
    expect(filtered.aliases).toEqual({
      'arrow-down-20': { parent: 'arrow-down-20-filled' },
    });
  });
});

describe('generateReadme', () => {
  const lucideFixture: IconifyJSON = {
    prefix: 'lucide',
    width: 24,
    height: 24,
    icons: {
      'circle-check': { body: '<path stroke="currentColor" d="M1 2" />' },
      award: { body: '<path stroke="currentColor" d="M3 4" />' },
    },
    info: {
      name: 'Lucide',
      total: 2,
      author: {
        name: 'Lucide Contributors',
        url: 'https://github.com/lucide-icons/lucide',
      },
      license: { title: 'ISC', spdx: 'ISC' },
      samples: ['circle-check', 'award'],
    },
  };

  it('renders the full README from the reference info and sample icon', () => {
    const readme = buildReadme('lucide', lucideFixture);

    expect(readme).toContain('# @ngxi/lucide');
    expect(readme).toContain('Name: Lucide');
    expect(readme).toContain('Prefix: lucide');
    expect(readme).toContain('Icons: 2');
    expect(readme).toContain('License: ISC');
    expect(readme).toContain('Author: Lucide Contributors');
    expect(readme).toContain('Website: https://github.com/lucide-icons/lucide');
    expect(readme).toContain('pnpm add @ngxi/lucide');

    // Usage example matches how the components are generated: first sample
    // icon, class and selector derived from the set + icon names.
    expect(readme).toContain(
      "import { LucideCircleCheck } from '@ngxi/lucide'",
    );
    expect(readme).toContain('imports: [LucideCircleCheck],');
    expect(readme).toContain('template: `<svg lucideCircleCheck></svg>`');

    expect(readme).toContain(
      'ISC License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)',
    );

    // Badges use the package import path, the ngxi repo and the monochrome
    // black style (grey label + black value) of @openng/optimus-ui.
    expect(readme).toContain(
      'https://img.shields.io/npm/v/@ngxi/lucide?color=black',
    );
    expect(readme).toContain('https://npmx.dev/package/@ngxi/lucide');
    expect(readme).toContain('https://www.jsdocs.io/package/@ngxi/lucide');
    expect(readme).toContain(
      'https://img.shields.io/github/license/adrian-ub/ngxi.svg?color=black',
    );
    expect(readme).toContain(
      'https://github.com/adrian-ub/ngxi/blob/main/LICENSE',
    );
    expect(readme).toContain(
      'https://img.shields.io/badge/jsdocs-reference-black.svg',
    );
  });

  it('falls back to the first canonical icon when samples are absent', () => {
    const withoutSamples: IconifyJSON = {
      prefix: 'ei',
      icons: { archive: { body: '<path d="M1 2" />' } },
      info: {
        name: 'Evil Icons',
        author: { name: 'Alexander Madyankin' },
        license: { title: 'MIT' },
      },
    };
    expect(pickReadmeUsage('ei', withoutSamples)).toEqual({
      importFrom: '@ngxi/ei',
      className: 'EiArchive',
      selectorAttr: 'eiArchive',
    });
  });

  it('skips sample icons that are only aliases', () => {
    const withAliasSample: IconifyJSON = {
      prefix: 'test',
      icons: { 'real-icon': { body: '<path d="M1 2" />' } },
      aliases: { 'alias-only': { parent: 'real-icon' } },
      info: {
        name: 'Test',
        author: { name: 'T' },
        license: { title: 'MIT' },
        samples: ['alias-only', 'real-icon'],
      },
    };
    expect(pickReadmeUsage('test', withAliasSample).className).toBe(
      'TestRealIcon',
    );
  });

  it('uses the matching secondary entry for split collections', () => {
    const splitFixture: IconifyJSON = {
      prefix: 'fluent',
      icons: {
        'accessibility-20-filled': { body: '<path d="M1 2" />' },
        'accessibility-24-filled': { body: '<path d="M3 4" />' },
        'arrow-up-20-regular': { body: '<path d="M5 6" />' },
      },
      info: {
        name: 'Fluent',
        author: { name: 'Microsoft' },
        license: { title: 'MIT' },
        samples: ['accessibility-20-filled'],
      },
    };
    const entries = [
      { name: '20-filled', filter: '*-20-filled' },
      { name: '24-filled', filter: '*-24-filled' },
    ];
    const readme = buildReadme('fluent', splitFixture, entries);

    // The icon name keeps its suffix (matching how the entry components are
    // generated from the filtered reference), prefixed with the collection
    // only — the entry name is never repeated.
    expect(readme).toContain(
      "import { FluentAccessibility20Filled } from '@ngxi/fluent/20-filled'",
    );
    expect(readme).toContain(
      'template: `<svg fluentAccessibility20Filled></svg>`',
    );
  });

  it('writes the README into the library root with write-if-changed semantics', async () => {
    const setRoot = join(tmpdir(), 'generate-icons-readme');
    rmSync(setRoot, { recursive: true, force: true });
    mkdirSync(setRoot, { recursive: true });

    try {
      const first = await generateReadme(setRoot, lucideFixture, 'lucide');
      expect(first.written).toBe(1);
      expect(existsSync(join(setRoot, 'README.md'))).toBe(true);

      const second = await generateReadme(setRoot, lucideFixture, 'lucide');
      expect(second.written).toBe(0);
      expect(second.unchanged).toBe(1);
    } finally {
      rmSync(setRoot, { recursive: true, force: true });
    }
  });
});

describe('updateReference', () => {
  it('copies the real ei reference JSON on the first run and leaves it untouched on the second', () => {
    const setRoot = join(tmpdir(), 'generate-icons-ref');
    rmSync(setRoot, { recursive: true, force: true });
    mkdirSync(setRoot, { recursive: true });

    try {
      const first = updateReference(setRoot, 'ei');
      expect(first.changed).toBe(true);

      const referencePath = join(setRoot, 'icon-set.json');
      expect(existsSync(referencePath)).toBe(true);
      const data = JSON.parse(
        readFileSync(referencePath, 'utf-8'),
      ) as IconifyJSON;
      expect(data.prefix).toBe('ei');
      expect(Object.keys(data.icons).length).toBeGreaterThan(0);

      const second = updateReference(setRoot, 'ei');
      expect(second.changed).toBe(false);
    } finally {
      rmSync(setRoot, { recursive: true, force: true });
    }
  });
});
