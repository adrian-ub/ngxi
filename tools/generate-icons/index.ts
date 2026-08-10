import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import type { IconifyJSON } from '@iconify/types';
import {
  generateIcons,
  generateReadme,
  generateSecondaryEntry,
} from './generate';
import {
  filterIconifyJSON,
  readIconEntries,
  updateReference,
} from '../workspace-plugin/generators/icon-library/lib/reference';

function availableIconSets(): string[] {
  const packagesDir = join(process.cwd(), 'packages');
  if (!existsSync(packagesDir)) {
    return [];
  }
  return readdirSync(packagesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

function printUsage(): void {
  console.log(
    'Usage: pnpm generate-icons <set> [--reference-only] [--collection <id>] [--filter <glob>]',
  );
  console.log('');
  console.log(
    'Without flags, generates the Angular icon components for an icon',
  );
  console.log('set from packages/<set>/icon-set.json (scaffolded with');
  console.log('`pnpm nx g @ngxi/workspace-plugin:icon-library <set>`).');
  console.log('');
  console.log(
    'When the set is split into secondary entry points (icon-entries.json',
  );
  console.log(
    'present), each entry under <entry>/src/ gets its own self-contained',
  );
  console.log(
    'icon components here; nothing is shared with or imported from the',
  );
  console.log('primary entry.');
  console.log('');
  console.log(
    'With --reference-only, only refreshes packages/<set>/icon-set.json',
  );
  console.log('from @iconify/json (e.g. after upgrading @iconify/json).');
  console.log('');
  console.log('--collection sets the Iconify collection id when refreshing a');
  console.log('reference under a different name.');
  console.log(
    '--filter keeps only icons matching the glob (e.g. *-20-filled).',
  );
  console.log('');
  const sets = availableIconSets();
  if (sets.length > 0) {
    console.log(`Scaffolded icon sets (${sets.length}):`);
    for (const set of sets) {
      console.log(`  ${set}`);
    }
  } else {
    console.log('No icon sets found under packages/.');
  }
}

function argValue(args: string[], flag: string): string | undefined {
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : undefined;
}

async function main(): Promise<void> {
  const args = process.argv.slice(2);
  const referenceOnly = args.includes('--reference-only');
  const set = args.find((arg) => !arg.startsWith('--'));
  if (!set) {
    printUsage();
    process.exit(1);
  }
  const collection = argValue(args, '--collection') ?? set;
  const filter = argValue(args, '--filter');

  const projectRoot = join(process.cwd(), 'packages', set);
  if (!existsSync(projectRoot)) {
    console.error(`No icon library project found at packages/${set}.`);
    console.error(
      `Run \`pnpm nx g @ngxi/workspace-plugin:icon-library ${set}\` first.`,
    );
    process.exit(1);
  }

  if (referenceOnly) {
    try {
      const reference = updateReference(projectRoot, collection, filter);
      const filterLabel = filter ? ` (filter: ${filter})` : '';
      console.log(
        `icon-set.json: ${reference.changed ? 'written' : 'unchanged'}${filterLabel}`,
      );
      process.exit(0);
    } catch (error) {
      console.error(`Failed to refresh the reference for @ngxi/${set}:`);
      console.error(error instanceof Error ? error.message : error);
      process.exit(1);
    }
  }

  const referencePath = join(projectRoot, 'icon-set.json');
  if (!existsSync(referencePath)) {
    console.error(`Missing ${relative(process.cwd(), referencePath)}.`);
    console.error(
      `Run \`pnpm update-reference ${set}\` (or ` +
        `\`pnpm nx run ${set}:update-reference\`) first.`,
    );
    process.exit(1);
  }

  let data: IconifyJSON;
  try {
    data = JSON.parse(readFileSync(referencePath, 'utf-8')) as IconifyJSON;
  } catch (error) {
    console.error(`Failed to parse ${relative(process.cwd(), referencePath)}:`);
    console.error(error);
    process.exit(1);
  }

  const plan = readIconEntries(projectRoot);
  const entries = plan?.entries ?? [];
  let totalWritten = 0;
  let totalUnchanged = 0;

  // The library README is data-driven too: set info, icon count and a sample
  // icon come from the reference, so it is (re)generated here like the icon
  // components instead of being scaffolded with a stale generic template.
  const readmeResult = await generateReadme(projectRoot, data, set, entries);
  totalWritten += readmeResult.written;
  totalUnchanged += readmeResult.unchanged;
  for (const file of readmeResult.files) {
    console.log(`  ${relative(process.cwd(), join(projectRoot, file))}`);
  }

  if (entries.length > 0) {
    // Split collection: the primary barrel was written by the icon-library
    // generator; each secondary entry only gets its self-contained icon
    // components here (the SVG body is inline in each component's template,
    // so entries do not import anything from the primary).
    for (const entry of entries) {
      const entryData = filterIconifyJSON(data, entry.filter);
      const entryRoot = join(projectRoot, entry.name, 'src');
      const entrySetName = `${plan.collection}-${entry.name}`;
      const result = await generateSecondaryEntry(
        entryRoot,
        entryData,
        entrySetName,
      );
      totalWritten += result.written;
      totalUnchanged += result.unchanged;
      console.log(
        `Generated ${result.iconCount} icon components for ` +
          `@ngxi/${plan.collection}/${entry.name}: ` +
          `${result.written} written, ${result.unchanged} unchanged.`,
      );
      for (const file of result.files) {
        console.log(`  ${relative(process.cwd(), join(entryRoot, file))}`);
      }
    }
  } else {
    const result = await generateIcons(join(projectRoot, 'src'), data, set);
    totalWritten = result.written;
    totalUnchanged = result.unchanged;
    console.log(
      `Generated ${result.iconCount} icon components for @ngxi/${set}: ` +
        `${result.written} written, ${result.unchanged} unchanged.`,
    );
    for (const file of result.files) {
      console.log(
        `  ${relative(process.cwd(), join(projectRoot, 'src', file))}`,
      );
    }
  }
  if (totalWritten + totalUnchanged > 0) {
    console.log(`Total: ${totalWritten} written, ${totalUnchanged} unchanged.`);
  }
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
