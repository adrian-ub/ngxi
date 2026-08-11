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
import { gunzipSync } from 'node:zlib';
import type { IconifyJSON } from '@iconify/types';
import {
  buildIconsAsset,
  buildManifest,
  buildLlmsFullTxt,
  buildLlmsTxt,
  buildRobotsTxt,
  buildSamplesAsset,
  buildSetIndex,
  buildSitemap,
  effectiveSiteUrl,
  emitDocsManifest,
  emitSiteDiscoveryFiles,
  renderIconSvgForManifest,
  sampleBody,
  setCategories,
  writeIfChanged,
  writeIfChangedBuffer,
} from './generate';

const lucideFixture: IconifyJSON = {
  prefix: 'lucide',
  width: 24,
  height: 24,
  icons: {
    'circle-check': { body: '<path d="M1 2" />' },
    award: { body: '<path d="M3 4" />' },
    'arrow-up-right': { body: '<path d="M5 6" />' },
  },
  aliases: {
    check: { parent: 'circle-check' },
    'orphan-alias': { parent: 'missing-icon' },
  },
  info: {
    name: 'Lucide',
    author: { name: 'Lucide Contributors' },
    license: { title: 'ISC', spdx: 'ISC' },
    category: 'UI 24px',
    samples: ['circle-check', 'award'],
  },
};

describe('buildSetIndex', () => {
  it('derives className and selectorAttr from the shared naming helpers', () => {
    const index = buildSetIndex('lucide', lucideFixture);
    const circleCheck = index.find((e) => e.name === 'circle-check');
    expect(circleCheck?.className).toBe('LucideCircleCheck');
    expect(circleCheck?.selectorAttr).toBe('lucideCircleCheck');
    expect(circleCheck?.importFrom).toBe('@ngxi/lucide');
    expect(circleCheck?.entry).toBeUndefined();
    expect(circleCheck?.aliasOf).toBeUndefined();
  });

  it('tags aliases with their importable parent and drops orphan aliases', () => {
    const index = buildSetIndex('lucide', lucideFixture);
    const check = index.find((e) => e.name === 'check');
    expect(check?.aliasOf).toBe('circle-check');
    // An alias has no component of its own: the entry points at the parent
    // component the user actually imports.
    expect(check?.className).toBe('LucideCircleCheck');
    expect(check?.selectorAttr).toBe('lucideCircleCheck');
    expect(index.find((e) => e.name === 'orphan-alias')).toBeUndefined();
  });

  it('orders entries deterministically by name', () => {
    const index = buildSetIndex('lucide', lucideFixture);
    expect(index.map((e) => e.name)).toEqual([
      'arrow-up-right',
      'award',
      'check',
      'circle-check',
    ]);
  });

  it('records per-icon categories and inherits them for aliases', () => {
    const categorized: IconifyJSON = {
      ...lucideFixture,
      categories: {
        'UI 24px': ['circle-check'],
        Arrows: ['arrow-up-right'],
      },
    };
    const index = buildSetIndex('lucide', categorized);
    expect(index.find((e) => e.name === 'circle-check')?.categories).toEqual([
      'UI 24px',
    ]);
    expect(index.find((e) => e.name === 'arrow-up-right')?.categories).toEqual([
      'Arrows',
    ]);
    // The alias resolves to its parent for category lookup.
    expect(index.find((e) => e.name === 'check')?.categories).toEqual([
      'UI 24px',
    ]);
    // Icons listed in no category carry no categories field.
    expect(index.find((e) => e.name === 'award')?.categories).toBeUndefined();
  });

  it('omits the categories field when the set has no categories map', () => {
    const index = buildSetIndex('lucide', lucideFixture);
    expect(
      index.find((e) => e.name === 'circle-check')?.categories,
    ).toBeUndefined();
  });

  it('assigns split-set icons to their entry with entry-scoped imports and names', () => {
    const splitFixture: IconifyJSON = {
      prefix: 'fluent',
      icons: {
        'accessibility-20-filled': { body: '<path d="M1 2" />' },
        'accessibility-24-filled': { body: '<path d="M3 4" />' },
        'arrow-up-20-regular': { body: '<path d="M5 6" />' },
      },
      aliases: { 'a11y-20': { parent: 'accessibility-20-filled' } },
      info: {
        name: 'Fluent',
        author: { name: 'Microsoft' },
        license: { title: 'MIT' },
      },
    };
    const entries = [
      { name: '20-filled', filter: '*-20-filled' },
      { name: '24-filled', filter: '*-24-filled' },
    ];
    const index = buildSetIndex('fluent', splitFixture, entries);

    const acc = index.find((e) => e.name === 'accessibility-20-filled');
    expect(acc?.entry).toBe('20-filled');
    expect(acc?.importFrom).toBe('@ngxi/fluent/20-filled');
    // Entry components are prefixed with the collection only; the icon name
    // already carries the entry suffix (`accessibility-20-filled`).
    expect(acc?.className).toBe('FluentAccessibility20Filled');
    expect(acc?.selectorAttr).toBe('fluentAccessibility20Filled');

    // Icons outside every entry filter stay in the primary entry.
    const arrow = index.find((e) => e.name === 'arrow-up-20-regular');
    expect(arrow?.entry).toBeUndefined();
    expect(arrow?.importFrom).toBe('@ngxi/fluent');

    // An alias whose own name matches no filter inherits its parent's entry.
    const alias = index.find((e) => e.name === 'a11y-20');
    expect(alias?.aliasOf).toBe('accessibility-20-filled');
    expect(alias?.entry).toBe('20-filled');
    expect(alias?.importFrom).toBe('@ngxi/fluent/20-filled');
    expect(alias?.className).toBe('FluentAccessibility20Filled');
  });
});

describe('buildManifest', () => {
  it('returns an empty set list when packages/ has no sets', () => {
    expect(buildManifest([])).toEqual({ sets: [] });
  });

  it('collects set-level metadata without timestamps', () => {
    const manifest = buildManifest([
      { collection: 'lucide', data: lucideFixture },
    ]);
    expect(manifest.sets).toHaveLength(1);
    const set = manifest.sets[0];
    expect(set.collection).toBe('lucide');
    expect(set.package).toBe('@ngxi/lucide');
    expect(set.name).toBe('Lucide');
    expect(set.iconCount).toBe(3);
    expect(set.aliasCount).toBe(2);
    expect(set.license).toBe('ISC');
    expect(set.author).toBe('Lucide Contributors');
    expect(set.samples).toEqual(['circle-check', 'award']);
    expect(set.categories).toEqual(['UI 24px']);
    expect(set.assets).toEqual({
      index: 'icons/lucide.index.json',
      samples: 'icons/lucide.samples.json',
    });
  });

  it('is byte-stable: identical input produces identical output, no timestamps', () => {
    const sets = [
      { collection: 'lucide', data: lucideFixture },
      {
        collection: 'ei',
        data: {
          prefix: 'ei',
          icons: { archive: { body: '<path d="M1 2" />' } },
          info: {
            name: 'Evil Icons',
            author: { name: 'Alexander Madyankin' },
            license: { title: 'MIT' },
          },
        },
      },
    ];
    const first = JSON.stringify(buildManifest(sets));
    const second = JSON.stringify(buildManifest(sets));
    expect(second).toBe(first);
    expect(first).not.toMatch(/\d{4}-\d{2}-\d{2}T/);
  });

  it('sorts sets by collection name', () => {
    const manifest = buildManifest([
      { collection: 'lucide', data: lucideFixture },
      {
        collection: 'ei',
        data: {
          prefix: 'ei',
          icons: { archive: { body: '<path d="M1 2" />' } },
          info: {
            name: 'Evil Icons',
            author: { name: 'A' },
            license: { title: 'MIT' },
          },
        },
      },
    ]);
    expect(manifest.sets.map((s) => s.collection)).toEqual(['ei', 'lucide']);
  });

  it('falls back to the first canonical icon when samples are absent or alias-only', () => {
    const noSamples: IconifyJSON = {
      ...lucideFixture,
      info: {
        ...lucideFixture.info,
        samples: undefined,
      },
    };
    const aliasOnlySamples: IconifyJSON = {
      ...lucideFixture,
      info: {
        ...lucideFixture.info,
        samples: ['check'],
      },
    };
    expect(
      buildManifest([{ collection: 'lucide', data: noSamples }]).sets[0]
        .samples,
    ).toEqual(['circle-check']);
    expect(
      buildManifest([{ collection: 'lucide', data: aliasOnlySamples }]).sets[0]
        .samples,
    ).toEqual(['circle-check']);
  });
});

describe('setCategories', () => {
  it('prefers sorted data.categories keys over info.category', () => {
    const data: IconifyJSON = {
      ...lucideFixture,
      categories: { Arrows: ['arrow-up-right'], 'UI 24px': ['circle-check'] },
    };
    expect(setCategories(data)).toEqual(['Arrows', 'UI 24px']);
  });

  it('falls back to info.category when the set has no categories map', () => {
    expect(setCategories(lucideFixture)).toEqual(['UI 24px']);
  });

  it('returns empty when neither is present', () => {
    const data: IconifyJSON = {
      ...lucideFixture,
      info: { ...lucideFixture.info, category: undefined },
    };
    expect(setCategories({ ...data, categories: undefined })).toEqual([]);
  });
});

describe('sampleBody', () => {
  it('resolves canonical icons to their body', () => {
    expect(sampleBody(lucideFixture, 'circle-check')).toBe('<path d="M1 2" />');
  });

  it('follows alias chains to the canonical body', () => {
    expect(sampleBody(lucideFixture, 'check')).toBe('<path d="M1 2" />');
  });

  it('returns undefined for unresolvable names', () => {
    expect(sampleBody(lucideFixture, 'missing')).toBeUndefined();
  });
});

describe('buildSamplesAsset', () => {
  it('builds the showcase from canonical bodies and the reference viewBox', () => {
    const asset = buildSamplesAsset(lucideFixture, ['circle-check', 'award']);
    expect(asset.viewBox).toBe('0 0 24 24');
    expect(asset.samples).toEqual({
      'circle-check': '<path d="M1 2" />',
      award: '<path d="M3 4" />',
    });
  });

  it('resolves alias samples and skips names that cannot resolve', () => {
    const asset = buildSamplesAsset(lucideFixture, [
      'check',
      'missing',
      'award',
    ]);
    expect(asset.samples).toEqual({
      check: '<path d="M1 2" />',
      award: '<path d="M3 4" />',
    });
  });

  it('falls back to the default viewBox without reference dimensions', () => {
    const slim: IconifyJSON = {
      prefix: 'slim',
      icons: { a: { body: '<path d="M1 2" />' } },
    };
    expect(buildSamplesAsset(slim, ['a']).viewBox).toBe('0 0 24 24');
  });
});

describe('writeIfChanged', () => {
  let tempRoot: string;

  beforeAll(() => {
    tempRoot = mkdtempSync(join(tmpdir(), 'generate-docs-manifest-'));
  });

  afterAll(() => {
    rmSync(tempRoot, { recursive: true, force: true });
  });

  it('writes new content and reports written', () => {
    const file = join(tempRoot, 'new.json');
    expect(writeIfChanged(file, 'a')).toBe(true);
    expect(readFileSync(file, 'utf-8')).toBe('a');
  });

  it('no-ops on identical content', () => {
    const file = join(tempRoot, 'same.json');
    writeIfChanged(file, 'same');
    expect(writeIfChanged(file, 'same')).toBe(false);
  });

  it('overwrites changed content', () => {
    const file = join(tempRoot, 'changed.json');
    writeIfChanged(file, 'a');
    expect(writeIfChanged(file, 'b')).toBe(true);
    expect(readFileSync(file, 'utf-8')).toBe('b');
  });
});

describe('writeIfChangedBuffer', () => {
  let tempRoot: string;

  beforeAll(() => {
    tempRoot = mkdtempSync(join(tmpdir(), 'generate-docs-manifest-'));
  });

  afterAll(() => {
    rmSync(tempRoot, { recursive: true, force: true });
  });

  it('writes new bytes and reports written', () => {
    const file = join(tempRoot, 'new.bin');
    expect(writeIfChangedBuffer(file, Buffer.from([1, 2, 3]))).toBe(true);
    expect(readFileSync(file)).toEqual(Buffer.from([1, 2, 3]));
  });

  it('no-ops on identical bytes and overwrites changed bytes', () => {
    const file = join(tempRoot, 'same.bin');
    const content = Buffer.from([1, 2, 3]);
    writeIfChangedBuffer(file, content);
    expect(writeIfChangedBuffer(file, Buffer.from([1, 2, 3]))).toBe(false);
    expect(writeIfChangedBuffer(file, Buffer.from([9]))).toBe(true);
    expect(readFileSync(file)).toEqual(Buffer.from([9]));
  });
});

describe('renderIconSvgForManifest', () => {
  it('renders a known icon as a standalone svg document matching the SSR server', () => {
    expect(renderIconSvgForManifest(lucideFixture, 'circle-check')).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2" /></svg>',
    );
  });

  it('resolves an alias to its parent icon body', () => {
    expect(renderIconSvgForManifest(lucideFixture, 'check')).toBe(
      renderIconSvgForManifest(lucideFixture, 'circle-check'),
    );
  });

  it('defaults missing reference dimensions to the 24px grid', () => {
    const slim: IconifyJSON = {
      prefix: 'slim',
      icons: { a: { body: '<path d="M1 2" />' } },
    };
    expect(renderIconSvgForManifest(slim, 'a')).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2" /></svg>',
    );
  });

  it('returns undefined for an unknown icon and an orphaned alias', () => {
    expect(renderIconSvgForManifest(lucideFixture, 'missing')).toBeUndefined();
    expect(
      renderIconSvgForManifest(lucideFixture, 'orphan-alias'),
    ).toBeUndefined();
  });
});

describe('buildIconsAsset', () => {
  it('builds one full svg per canonical icon, no aliases', () => {
    const asset = buildIconsAsset('lucide', lucideFixture);
    expect(asset.collection).toBe('lucide');
    expect(Object.keys(asset.icons).sort()).toEqual([
      'arrow-up-right',
      'award',
      'circle-check',
    ]);
    expect(asset.icons['circle-check']).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2" /></svg>',
    );
    // Orphaned aliases must not leak into the bundle.
    expect(asset.icons['check']).toBeUndefined();
    expect(asset.icons['orphan-alias']).toBeUndefined();
  });
});

describe('emitDocsManifest', () => {
  it('scans packages and emits manifest + per-set index, samples and gz bundle', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-emit-'));
    try {
      mkdirSync(join(root, 'packages/lucide'), { recursive: true });
      writeIfChanged(
        join(root, 'packages/lucide/icon-set.json'),
        JSON.stringify(lucideFixture),
      );
      // A directory without a reference is not a docs-able set.
      mkdirSync(join(root, 'packages/not-an-icon'), { recursive: true });

      const result = emitDocsManifest(root, join(root, 'public/icons'));

      expect(result.sets).toEqual(['lucide']);
      // The heavy verbatim <set>.json payload is never emitted.
      expect(existsSync(join(root, 'public/icons/lucide.json'))).toBe(false);
      const indexFile = readFileSync(
        join(root, 'public/icons/lucide.index.json'),
        'utf-8',
      );
      expect(JSON.parse(indexFile)).toEqual(
        buildSetIndex('lucide', lucideFixture),
      );
      const samplesFile = readFileSync(
        join(root, 'public/icons/lucide.samples.json'),
        'utf-8',
      );
      expect(JSON.parse(samplesFile)).toEqual(
        buildSamplesAsset(lucideFixture, ['circle-check', 'award']),
      );
      // The gzipped client bundle round-trips to the rendered icons asset.
      const gzFile = join(root, 'public/icons/lucide.icons.json.gz');
      expect(existsSync(gzFile)).toBe(true);
      const bundle = JSON.parse(
        gunzipSync(readFileSync(gzFile)).toString('utf-8'),
      );
      expect(bundle).toEqual(buildIconsAsset('lucide', lucideFixture));
      expect(bundle.icons['circle-check']).toContain('<svg');
      // The per-set SVG directory is no longer emitted: the client loads the
      // full SVGs from the gz bundle, so no `<collection>/*.svg` files exist.
      expect(existsSync(join(root, 'public/icons/lucide'))).toBe(false);
      const manifest = JSON.parse(
        readFileSync(join(root, 'public/icons/manifest.json'), 'utf-8'),
      ) as { sets: { collection: string; assets: unknown }[] };
      expect(manifest.sets.map((s) => s.collection)).toEqual(['lucide']);
      expect(manifest.sets[0].assets).toEqual({
        index: 'icons/lucide.index.json',
        samples: 'icons/lucide.samples.json',
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('removes a pre-existing stale per-set SVG directory', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-emit-'));
    try {
      mkdirSync(join(root, 'packages/lucide'), { recursive: true });
      writeIfChanged(
        join(root, 'packages/lucide/icon-set.json'),
        JSON.stringify(lucideFixture),
      );
      const svgDir = join(root, 'public/icons/lucide');
      mkdirSync(svgDir, { recursive: true });
      writeIfChanged(
        join(svgDir, 'circle-check.svg'),
        '<svg xmlns="http://www.w3.org/2000/svg"></svg>',
      );

      const result = emitDocsManifest(root, join(root, 'public/icons'));
      expect(result.sets).toEqual(['lucide']);
      expect(existsSync(svgDir)).toBe(false);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('is a no-op on rerun with identical content', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-emit-'));
    try {
      mkdirSync(join(root, 'packages/lucide'), { recursive: true });
      writeIfChanged(
        join(root, 'packages/lucide/icon-set.json'),
        JSON.stringify(lucideFixture),
      );
      const first = emitDocsManifest(root, join(root, 'public/icons'));
      const second = emitDocsManifest(root, join(root, 'public/icons'));
      expect(second.sets).toEqual(['lucide']);
      expect(second.written).toBe(0);
      // index + samples + gz bundle + manifest.
      expect(first.written + first.unchanged).toBe(4);
      expect(second.written + second.unchanged).toBe(4);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('throws when packages/ is missing', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-emit-'));
    try {
      expect(() => emitDocsManifest(root, join(root, 'public/icons'))).toThrow(
        /packages/,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('throws on an unparseable icon-set.json', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-emit-'));
    try {
      mkdirSync(join(root, 'packages/broken'), { recursive: true });
      writeIfChanged(join(root, 'packages/broken/icon-set.json'), '{nope');
      expect(() => emitDocsManifest(root, join(root, 'public/icons'))).toThrow(
        /Failed to parse/,
      );
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});

describe('site discovery files', () => {
  const discoveryManifest = buildManifest([
    { collection: 'lucide', data: lucideFixture },
    {
      collection: 'ei',
      data: {
        prefix: 'ei',
        icons: { archive: { body: '<path d="M1 2" />' } },
        info: {
          name: 'Evil Icons',
          author: { name: 'A' },
          license: { title: 'MIT' },
        },
      },
    },
  ]);

  const defaultSite = effectiveSiteUrl();

  it('resolves the site URL from the SITE_URL env var when set', () => {
    const previous = process.env.SITE_URL;
    try {
      process.env.SITE_URL = 'https://example.test';
      expect(effectiveSiteUrl()).toBe('https://example.test');
      expect(effectiveSiteUrl()).not.toBe(defaultSite);
    } finally {
      if (previous === undefined) {
        delete process.env.SITE_URL;
      } else {
        process.env.SITE_URL = previous;
      }
    }
  });

  it('buildSitemap lists the home page and every collection, no lastmod', () => {
    const sitemap = buildSitemap(discoveryManifest, defaultSite);
    expect(sitemap).toContain(
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    );
    expect(sitemap).toContain(`<loc>${defaultSite}/</loc>`);
    expect(sitemap).toContain(`<loc>${defaultSite}/collection/lucide</loc>`);
    expect(sitemap).toContain(`<loc>${defaultSite}/collection/ei</loc>`);
    expect(sitemap).not.toMatch(/lastmod/);
    expect(sitemap).not.toMatch(/\d{4}-\d{2}-\d{2}/);
  });

  it('buildRobotsTxt allows everything and points at the sitemap', () => {
    const robots = buildRobotsTxt(defaultSite);
    expect(robots).toContain('User-agent: *');
    expect(robots).toContain('Allow: /');
    expect(robots).toContain(`Sitemap: ${defaultSite}/sitemap.xml`);
  });

  it('buildLlmsTxt has the H1, summary, home link, one link per collection and the full index link', () => {
    const llms = buildLlmsTxt(discoveryManifest, defaultSite);
    expect(llms).toContain('# ngxi Icon Library');
    expect(llms).toContain('built on Iconify data');
    expect(llms).toContain('## Docs');
    expect(llms).toContain(`- [Home](${defaultSite}/)`);
    expect(llms).toContain(`- [Lucide](${defaultSite}/collection/lucide)`);
    expect(llms).toContain(`- [Evil Icons](${defaultSite}/collection/ei)`);
    expect(llms).toContain('## Reference');
    expect(llms).toContain(`- [Full index](${defaultSite}/llms-full.txt)`);
    expect(llms).not.toMatch(/\d{4}-\d{2}-\d{2}/);
  });

  it('buildLlmsFullTxt lists collection sections and icon names from the index', () => {
    const iconNames = (collection: string): string[] =>
      collection === 'lucide' ? ['award', 'check', 'circle-check'] : [];
    const full = buildLlmsFullTxt(discoveryManifest, defaultSite, iconNames);
    expect(full).toContain('# ngxi Icon Library');
    expect(full).toContain('## Lucide (lucide)');
    expect(full).toContain('- Package: `@ngxi/lucide`');
    expect(full).toContain('- Icons: 3');
    expect(full).toContain('- Aliases: 2');
    expect(full).toContain('- License: ISC');
    expect(full).toContain('- Author: Lucide Contributors');
    expect(full).toContain('- Categories: UI 24px');
    for (const name of ['award', 'check', 'circle-check']) {
      expect(full).toContain(`- ${name}`);
    }
    expect(full).toContain('## Evil Icons (ei)');
    expect(full).toContain('- (index unavailable)');
    expect(full).not.toMatch(/\d{4}-\d{2}-\d{2}/);
  });

  it('emitSiteDiscoveryFiles writes the four byte-stable files and no-ops on rerun', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-discovery-emit-'));
    try {
      const indexDir = join(root, 'apps/docs/public/icons');
      mkdirSync(indexDir, { recursive: true });
      writeIfChanged(
        join(indexDir, 'lucide.index.json'),
        JSON.stringify([
          { name: 'circle-check' },
          { name: 'award' },
          { name: 'check' },
        ]),
      );
      const outDir = join(root, 'apps/docs/public');

      const first = emitSiteDiscoveryFiles(root, outDir, discoveryManifest);
      expect(first.written).toBe(4);
      expect(first.unchanged).toBe(0);

      const sitemap = readFileSync(join(outDir, 'sitemap.xml'), 'utf-8');
      expect(sitemap).toContain(`<loc>${defaultSite}/</loc>`);
      expect(sitemap).toContain(`<loc>${defaultSite}/collection/lucide</loc>`);
      expect(sitemap).toContain(`<loc>${defaultSite}/collection/ei</loc>`);
      expect(sitemap).not.toMatch(/lastmod/);

      const robots = readFileSync(join(outDir, 'robots.txt'), 'utf-8');
      expect(robots).toContain(`Sitemap: ${defaultSite}/sitemap.xml`);

      const llms = readFileSync(join(outDir, 'llms.txt'), 'utf-8');
      expect(llms).toContain('# ngxi Icon Library');
      expect(llms).toContain('## Docs');
      expect(llms).toContain(`- [Home](${defaultSite}/)`);
      expect(llms).toContain(`- [Lucide](${defaultSite}/collection/lucide)`);
      expect(llms).toContain('## Reference');
      expect(llms).toContain(`- [Full index](${defaultSite}/llms-full.txt)`);

      const llmsFull = readFileSync(join(outDir, 'llms-full.txt'), 'utf-8');
      expect(llmsFull).toContain('## Lucide (lucide)');
      expect(llmsFull).toContain('- Package: `@ngxi/lucide`');
      for (const name of ['award', 'check', 'circle-check']) {
        expect(llmsFull).toContain(`- ${name}`);
      }

      const second = emitSiteDiscoveryFiles(root, outDir, discoveryManifest);
      expect(second.written).toBe(0);
      expect(second.unchanged).toBe(4);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
