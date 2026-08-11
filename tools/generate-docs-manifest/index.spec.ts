// @vitest-environment node
import { spawnSync } from 'node:child_process';
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
} from 'node:fs';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { gunzipSync } from 'node:zlib';
import type { IconifyJSON } from '@iconify/types';

const repoRoot = fileURLToPath(new URL('../../', import.meta.url));
const cliPath = fileURLToPath(new URL('index.ts', import.meta.url));
const tsxBin = join(repoRoot, 'node_modules', '.bin', 'tsx');

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
  info: {
    name: 'Lucide',
    author: { name: 'Lucide Contributors' },
    license: { title: 'ISC', spdx: 'ISC' },
    samples: ['circle-check', 'award'],
  },
};

function runCli(cwd: string): {
  status: number;
  stdout: string;
  stderr: string;
} {
  const result = spawnSync(tsxBin, [cliPath], {
    cwd,
    encoding: 'utf-8',
  });
  return {
    status: result.status ?? -1,
    stdout: result.stdout ?? '',
    stderr: result.stderr ?? '',
  };
}

describe('generate-docs-manifest CLI', () => {
  it('exits non-zero when packages/ is missing', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-cli-'));
    try {
      const { status, stderr } = runCli(root);
      expect(status).not.toBe(0);
      expect(stderr).toMatch(/packages/i);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('exits non-zero when an icon-set.json is unparseable', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-cli-'));
    try {
      mkdirSync(join(root, 'packages/broken'), { recursive: true });
      const { writeFileSync } = require('node:fs') as typeof import('node:fs');
      writeFileSync(join(root, 'packages/broken/icon-set.json'), '{nope');

      const { status, stderr } = runCli(root);
      expect(status).not.toBe(0);
      expect(stderr).toMatch(/Failed to parse/i);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('scans packages and emits the index, samples, manifest and discovery files into apps/docs/public/icons', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-cli-'));
    try {
      const { writeFileSync } = require('node:fs') as typeof import('node:fs');
      mkdirSync(join(root, 'packages/lucide'), { recursive: true });
      writeFileSync(
        join(root, 'packages/lucide/icon-set.json'),
        JSON.stringify(lucideFixture),
      );

      const { status, stdout, stderr } = runCli(root);
      expect(stderr).toBe('');
      expect(status).toBe(0);
      expect(stdout).toContain('lucide');

      const outDir = join(root, 'apps/docs/public/icons');
      expect(existsSync(join(outDir, 'manifest.json'))).toBe(true);
      expect(existsSync(join(outDir, 'lucide.index.json'))).toBe(true);
      // The heavy verbatim <set>.json payload is never emitted.
      expect(existsSync(join(outDir, 'lucide.json'))).toBe(false);
      // No per-icon SVG directory: the client loads full SVGs from the
      // gzipped bundle instead of being emitted as files.
      expect(existsSync(join(outDir, 'lucide'))).toBe(false);
      expect(existsSync(join(outDir, 'lucide/circle-check.svg'))).toBe(false);
      // The gzipped client bundle is emitted and decompresses to the icons
      // payload (one full standalone svg per canonical icon).
      const gzFile = join(outDir, 'lucide.icons.json.gz');
      expect(existsSync(gzFile)).toBe(true);
      const bundle = JSON.parse(
        gunzipSync(readFileSync(gzFile)).toString('utf-8'),
      ) as { collection: string; icons: Record<string, string> };
      expect(bundle.collection).toBe('lucide');
      expect(Object.keys(bundle.icons).sort()).toEqual(['award', 'circle-check']);
      expect(bundle.icons['circle-check']).toBe(
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 2" /></svg>',
      );

      // The static lazy-import map is no longer emitted.
      expect(stdout).not.toMatch(/Icon library map/);
      const mapFile = join(
        root,
        'apps/docs/src/app/icon-browser/services/icon-library-map.generated.ts',
      );
      expect(existsSync(mapFile)).toBe(false);

      // Index carries the shared naming truth.
      const index = JSON.parse(
        readFileSync(join(outDir, 'lucide.index.json'), 'utf-8'),
      ) as { name: string; className: string; aliasOf?: string }[];
      const circleCheck = index.find((e) => e.name === 'circle-check');
      expect(circleCheck?.className).toBe('LucideCircleCheck');
      const check = index.find((e) => e.name === 'check');
      expect(check?.aliasOf).toBe('circle-check');
      // The samples showcase resolves sample names to their bodies.
      const samples = JSON.parse(
        readFileSync(join(outDir, 'lucide.samples.json'), 'utf-8'),
      ) as { viewBox: string; samples: Record<string, string> };
      expect(samples.viewBox).toBe('0 0 24 24');
      expect(samples.samples).toEqual({
        'circle-check': '<path d="M1 2" />',
        award: '<path d="M3 4" />',
      });
      // Manifest links the per-set assets.
      const manifest = JSON.parse(
        readFileSync(join(outDir, 'manifest.json'), 'utf-8'),
      ) as {
        sets: {
          collection: string;
          assets: { index: string; samples: string };
        }[];
      };
      expect(manifest.sets.map((s) => s.collection)).toEqual(['lucide']);
      expect(manifest.sets[0].assets).toEqual({
        index: 'icons/lucide.index.json',
        samples: 'icons/lucide.samples.json',
      });
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });

  it('is idempotent: a rerun exits zero and reports everything unchanged', () => {
    const root = mkdtempSync(join(tmpdir(), 'docs-manifest-cli-'));
    try {
      const { writeFileSync } = require('node:fs') as typeof import('node:fs');
      mkdirSync(join(root, 'packages/lucide'), { recursive: true });
      writeFileSync(
        join(root, 'packages/lucide/icon-set.json'),
        JSON.stringify(lucideFixture),
      );

      const first = runCli(root);
      const second = runCli(root);
      expect(first.status).toBe(0);
      expect(second.status).toBe(0);
      expect(second.stdout).toMatch(/0 written/);
    } finally {
      rmSync(root, { recursive: true, force: true });
    }
  });
});
