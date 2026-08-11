#!/usr/bin/env node
/**
 * Computes the Iconify icon sets not yet scaffolded as ngxi icon libraries
 * and prints a GitHub issue body tracking them.
 *
 * Existing icon libraries are discovered through Nx: every scaffolded icon
 * library owns a `generate-icons` target, so `nx show projects --with-target
 * generate-icons` is the authoritative list of sets already in the workspace.
 *
 * Usage: node tools/scripts/missing-icon-sets.mjs > /tmp/tracker-body.md
 */
import { execSync } from 'node:child_process';

const existingProjects = JSON.parse(
  execSync('pnpm nx show projects --with-target generate-icons --json', {
    encoding: 'utf-8',
    stdio: ['ignore', 'pipe', 'inherit'],
  }),
);
const existing = new Set(existingProjects);

const response = await fetch(
  'https://api.iconify.design/collections?hidden=false',
);
if (!response.ok) {
  throw new Error(
    `Iconify collections API failed: ${response.status} ${response.statusText}`,
  );
}
const collections = await response.json();

const escape = (value) => String(value).replace(/\|/g, '\\|');

const missing = Object.entries(collections)
  .filter(([prefix]) => !existing.has(prefix))
  .map(([prefix, info]) => ({
    prefix,
    name: escape(info.name ?? prefix),
    total: info.total ?? 0,
    license: escape(info.license?.title ?? ''),
  }))
  .sort((a, b) => a.prefix.localeCompare(b.prefix));

const rows = missing
  .map(
    (set) =>
      `| \`${set.prefix}\` | ${set.name} | ${set.total} | ${set.license} |`,
  )
  .join('\n');

const body = `<!-- ngxi:icon-sets-tracker -->
## Icon sets missing in ngxi

Updated: ${new Date().toISOString()}

**Iconify sets:** ${Object.keys(collections).length} · **In ngxi:** ${existing.size} · **Missing:** ${missing.length}

Scaffold a missing set with: \`pnpm nx g icon-library <prefix>\`

| Set | Name | Icons | License |
| --- | --- | --- | --- |
${rows || '_All Iconify icon sets are already scaffolded._'}
`;

process.stdout.write(body);
