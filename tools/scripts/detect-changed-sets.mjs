#!/usr/bin/env node
/**
 * Detects which icon sets changed since the last release by comparing the
 * `lastModified` timestamp from the installed @iconify/json package with the
 * committed `packages/<set>/meta.json` snapshot of each scaffolded library.
 *
 * The installed package is the single source of truth: `icon-set.json` is
 * regenerated at build time from node_modules/@iconify/json, so comparing
 * that package's metadata is the only change signal we trust.
 *
 * Outputs the changed prefixes (newline separated) to the file given as the
 * first argument (defaults to /tmp/changed-sets.txt) and prints a summary.
 *
 * Usage: node tools/scripts/detect-changed-sets.mjs [output-file]
 */
import { readFileSync, readdirSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ICONIFY_DIR = 'node_modules/@iconify/json/json';
const PACKAGES_DIR = 'packages';
const OUTPUT_FILE = process.argv[2] ?? '/tmp/changed-sets.txt';

// 1. Read lastModified from every set in the installed package
const installed = {};
for (const file of readdirSync(ICONIFY_DIR).filter((f) => f.endsWith('.json'))) {
  const data = JSON.parse(readFileSync(join(ICONIFY_DIR, file), 'utf8'));
  if (data.lastModified) {
    installed[file.replace('.json', '')] = data.lastModified;
  }
}

// 2. Compare against each package's meta.json snapshot
const changed = [];
for (const prefix of Object.keys(installed)) {
  const metaPath = join(PACKAGES_DIR, prefix, 'meta.json');
  if (!existsSync(metaPath)) {
    continue; // not scaffolded as an ngxi library
  }
  const meta = JSON.parse(readFileSync(metaPath, 'utf8'));
  if (meta.lastModified !== installed[prefix]) {
    changed.push(prefix);
  }
}

// 3. Report and persist
if (changed.length === 0) {
  console.log('No icon sets changed.');
} else {
  console.log(
    `Changed icon sets (${changed.length}): ${changed.join(', ')}`,
  );
  writeFileSync(OUTPUT_FILE, changed.join('\n') + '\n');
}