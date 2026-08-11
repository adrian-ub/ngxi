// @vitest-environment node
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import type { IconifyJSON } from '@iconify/types';
import { renderIconSvg, setWorkspaceRoot } from './icon-svg';

const lucideFixture: IconifyJSON = {
  prefix: 'lucide',
  width: 24,
  height: 24,
  icons: {
    'circle-check': { body: '<path d="M1 2" />' },
    award: { body: '<path d="M3 4" />' },
  },
  aliases: {
    check: { parent: 'circle-check' },
    'orphan-alias': { parent: 'missing-icon' },
  },
};

describe('renderIconSvg', () => {
  let tempRoot: string;

  beforeEach(() => {
    tempRoot = mkdtempSync(join(tmpdir(), 'icon-svg-'));
    mkdirSync(join(tempRoot, 'packages/lucide'), { recursive: true });
    writeFileSync(
      join(tempRoot, 'packages/lucide/icon-set.json'),
      JSON.stringify(lucideFixture),
    );
    setWorkspaceRoot(tempRoot);
  });

  afterEach(() => {
    rmSync(tempRoot, { recursive: true, force: true });
  });

  it('renders a known icon as a well-formed standalone svg document', () => {
    // The exact document starts with `<svg` and ends with `</svg>`, which is
    // the docs client's trust gate requirement.
    expect(renderIconSvg('lucide', 'circle-check')).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2" /></svg>',
    );
  });

  it('resolves an alias to its parent icon body', () => {
    const alias = renderIconSvg('lucide', 'check');
    expect(alias).toBe(renderIconSvg('lucide', 'circle-check'));
  });

  it('defaults missing reference dimensions to the 24px grid', () => {
    const slim: IconifyJSON = {
      prefix: 'slim',
      icons: { a: { body: '<path d="M1 2" />' } },
    };
    mkdirSync(join(tempRoot, 'packages/slim'), { recursive: true });
    writeFileSync(
      join(tempRoot, 'packages/slim/icon-set.json'),
      JSON.stringify(slim),
    );
    expect(renderIconSvg('slim', 'a')).toBe(
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2" /></svg>',
    );
  });

  it('returns undefined for an unknown icon and an orphaned alias', () => {
    expect(renderIconSvg('lucide', 'missing')).toBeUndefined();
    expect(renderIconSvg('lucide', 'orphan-alias')).toBeUndefined();
  });

  it('returns undefined for an unknown collection', () => {
    expect(renderIconSvg('no-such-set', 'circle-check')).toBeUndefined();
  });
});
