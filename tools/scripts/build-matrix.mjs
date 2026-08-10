#!/usr/bin/env node
/**
 * Generates a GitHub Actions matrix that builds every @ngxi icon library.
 *
 * The matrix is derived dynamically from the workspace (not hardcoded):
 *   - every project owning a `generate-icons` target is an icon library;
 *   - icon count comes from the installed `@iconify/json/collections.json`
 *     index (the same source the scaffold and generator validate against);
 *   - libraries are bucketed by size so the biggest sets get their own job
 *     and more Node heap, while small sets share a job in a chunk.
 *
 * Usage:
 *   node tools/scripts/build-matrix.mjs            # all icon libraries
 *   node tools/scripts/build-matrix.mjs --affected # only changed ones
 *
 * Prints one compact JSON object for `strategy.matrix` (GitHub Actions):
 *   { "include": [ { "name": "...", "projects": "a,b,c", "node_options": "...", "parallel": 4 } ] }
 */
import { execSync } from 'node:child_process';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

// Bucket thresholds (icon count) -> how to run them.
// GitHub ubuntu-latest runners have 4 vCPU / 16 GB RAM; the heap limit is
// not a reservation, so parallel workers only allocate what they actually
// use. Big sets still get one dedicated job and the most heap.
const BUCKETS = [
  {
    min: 5000,
    name: 'xl',
    nodeOptions: '--max-old-space-size=12288',
    parallel: 1,
    chunk: 1,
  },
  {
    min: 2000,
    name: 'md',
    nodeOptions: '--max-old-space-size=8192',
    parallel: 1,
    chunk: 4,
  },
  {
    min: 0,
    name: 'sm',
    nodeOptions: '--max-old-space-size=4096',
    parallel: 2,
    chunk: 20,
  },
];

const affected = process.argv.includes('--affected');

function projectsWithGenerateIcons() {
  const args = [
    'nx',
    'show',
    'projects',
    '--with-target',
    'generate-icons',
    '--json',
  ];
  if (affected) {
    args.push('--affected', '--target', 'build');
  }
  return JSON.parse(
    execSync(`pnpm ${args.join(' ')}`, {
      encoding: 'utf-8',
      stdio: ['ignore', 'pipe', 'inherit'],
    }),
  );
}

function iconCounts() {
  let index;
  try {
    index = require('@iconify/json/collections.json');
  } catch {
    throw new Error(
      '@iconify/json/collections.json not found. Run pnpm install first.',
    );
  }
  return index;
}

function main() {
  const projects = projectsWithGenerateIcons();
  if (projects.length === 0) {
    throw new Error(
      'No icon library projects found via Nx (generate-icons target).',
    );
  }
  const counts = iconCounts();

  const buckets = BUCKETS.map((b) => ({ ...b, sets: [] }));
  for (const project of projects) {
    const total = counts[project]?.total ?? 0;
    const bucket = buckets.find((b) => total >= b.min);
    bucket.sets.push({ project, total });
  }

  const include = [];
  for (const bucket of buckets) {
    bucket.sets.sort((a, b) => b.total - a.total);
    for (let i = 0; i < bucket.sets.length; i += bucket.chunk) {
      const chunkSets = bucket.sets.slice(i, i + bucket.chunk);
      include.push({
        name: chunkSets
          .map((s) => s.project)
          .join(',')
          .slice(0, 60),
        projects: chunkSets.map((s) => s.project).join(','),
        node_options: bucket.nodeOptions,
        parallel: bucket.parallel,
      });
    }
  }

  process.stdout.write(JSON.stringify({ include }));
}

main();
