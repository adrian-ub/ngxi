/**
 * Bulk-scaffolds one @ngxi/<collection> library per Iconify collection found
 * in the `@iconify/json` official collection index, skipping collections that
 * already have a `packages/<collection>` directory.
 *
 * Usage:
 *   tsx tools/generate-all-icon-libraries/index.ts            # all collections
 *   tsx tools/generate-all-icon-libraries/index.ts --limit 3  # first N missing
 *   tsx tools/generate-all-icon-libraries/index.ts --set a b  # explicit ids
 *
 * Each scaffold runs the existing `icon-library` Nx generator, so the output
 * is identical to `nx g @ngxi/workspace-plugin:icon-library <collection>`
 * (split plans, targets, README, attribution) — this script only automates
 * the loop and reports failures instead of stopping on the first one.
 */
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { lookupCollections } from '@iconify/json';

async function availableCollections(): Promise<string[]> {
  // Use the OFFICIAL index (collections.json), NOT the raw json/*.json files:
  // the package ships a few legacy files that are no longer indexed (e.g.
  // bubbles, devicon-line, devicon-original, emblemicons, streamline-guidance),
  // and the generator validates against this same index.
  const collections = await lookupCollections();
  if (Object.keys(collections).length === 0) {
    throw new Error(
      '@iconify/json collection index is empty. Run pnpm install.',
    );
  }
  return Object.keys(collections).sort();
}

function scaffoldOne(collection: string): { ok: boolean; error?: string } {
  const packageDir = join(process.cwd(), 'packages', collection);
  if (existsSync(packageDir)) {
    return { ok: true, error: 'skipped (already scaffolded)' };
  }
  const result = spawnSync(
    'pnpm',
    ['nx', 'g', '@ngxi/workspace-plugin:icon-library', collection],
    { cwd: process.cwd(), stdio: 'pipe', encoding: 'utf-8', timeout: 300_000 },
  );
  if (result.status !== 0) {
    const stderr = (result.stderr || '').trim();
    const stdout = (result.stdout || '').trim();
    return {
      ok: false,
      error: stderr.slice(0, 400) || stdout.slice(0, 400),
    };
  }
  return { ok: true };
}

function main(): void {
  const args = process.argv.slice(2);
  const limitIdx = args.indexOf('--limit');
  const limit =
    limitIdx >= 0 ? Number(args[limitIdx + 1]) : Number.POSITIVE_INFINITY;
  const setIdx = args.indexOf('--set');
  const explicit =
    setIdx >= 0
      ? args.slice(setIdx + 1).filter((a) => !a.startsWith('--'))
      : [];

  void (async () => {
    const all = await availableCollections();
    const targets = explicit.length > 0 ? explicit : all;
    const todo = targets.filter(
      (c) => !existsSync(join(process.cwd(), 'packages', c)),
    );

    if (todo.length === 0) {
      console.log(
        'Nothing to scaffold: every requested collection already exists.',
      );
      return;
    }
    const batch = todo.slice(0, Number.isFinite(limit) ? limit : undefined);
    console.log(
      `Scaffolding ${batch.length} of ${todo.length} missing collection(s) (of ${all.length} available)...`,
    );

    const failed: { collection: string; error: string }[] = [];
    const t0 = Date.now();
    for (const collection of batch) {
      const { ok, error } = scaffoldOne(collection);
      if (ok) {
        console.log(`  ok   ${collection}`);
      } else {
        console.error(`  FAIL ${collection}: ${error ?? 'unknown'}`);
        failed.push({ collection, error: error ?? 'unknown' });
      }
    }
    const seconds = ((Date.now() - t0) / 1000).toFixed(0);
    console.log(
      `\nDone in ${seconds}s: ${batch.length - failed.length} scaffolded, ${failed.length} failed.`,
    );
    if (failed.length > 0) {
      console.log('Failures:');
      for (const f of failed) {
        console.log(`  - ${f.collection}: ${f.error}`);
      }
      process.exitCode = 1;
    }
  })();
}

main();
