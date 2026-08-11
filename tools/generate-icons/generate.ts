import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import type { IconifyJSON } from '@iconify/types';
import {
  generateIconFileContent,
  generateIconsBarrel,
  iconComponentFileStem,
  type IconSetInfo,
} from '../workspace-plugin/generators/icon-library/lib/generate-icon-files';
import { iconCollidingNames } from '../workspace-plugin/generators/icon-library/lib/naming';
import {
  buildReadme,
  type ReadmeEntry,
} from '../workspace-plugin/generators/icon-library/lib/generate-readme';
import { iconifyIconToSvg } from '../workspace-plugin/generators/icon-library/lib/iconify-svg';
import {
  extractSvgBody,
  hasRenderableElements,
  hoistPresentationAttributes,
} from '../workspace-plugin/generators/icon-library/lib/svg-component';

export interface GenerateIconsResult {
  iconCount: number;
  written: number;
  unchanged: number;
  files: string[];
}

function writeIfChanged(
  projectRoot: string,
  filePath: string,
  content: string,
  result: GenerateIconsResult,
): void {
  let existing: string | null = null;
  try {
    existing = readFileSync(filePath, 'utf-8');
  } catch {
    existing = null;
  }
  if (existing === content) {
    result.unchanged += 1;
    return;
  }
  mkdirSync(dirname(filePath), { recursive: true });
  writeFileSync(filePath, content);
  result.written += 1;
  result.files.push(relative(projectRoot, filePath));
}

/**
 * Generates the library README.md from the Iconify reference (set info, icon
 * count and a sample icon for the usage example) into `projectRoot`, using the
 * real filesystem with write-if-changed semantics.
 *
 * `entries` is the split plan of the collection (from icon-entries.json); for
 * split collections the usage example imports from the matching secondary
 * entry point.
 */
export async function generateReadme(
  projectRoot: string,
  data: IconifyJSON,
  collection: string,
  entries: ReadmeEntry[] = [],
): Promise<GenerateIconsResult> {
  const result: GenerateIconsResult = {
    iconCount: 0,
    written: 0,
    unchanged: 0,
    files: [],
  };
  writeIfChanged(
    projectRoot,
    join(projectRoot, 'README.md'),
    buildReadme(collection, data, entries),
    result,
  );
  return result;
}

/**
 * Generates the icon components (one SELF-CONTAINED Angular component per
 * icon, SVG body inline in its template, and the icons barrel) into
 * `sourceRoot` (the `src/` directory of a library or of one of its secondary
 * entry points) using the real filesystem.
 *
 * `setName` names the generated module (e.g. `ei` or `fluent-20-filled`): the
 * component names and selectors derive from it.
 *
 * The package barrel is written by the icon-library generator from templates,
 * so only the icon components (which depend on icon-set.json) land here.
 * Files whose content is already identical on disk are left untouched
 * (write-if-changed), so re-running the script leaves the working tree clean.
 */
async function generateIconComponents(
  sourceRoot: string,
  data: IconifyJSON,
  setName: string,
): Promise<GenerateIconsResult> {
  const result: GenerateIconsResult = {
    iconCount: Object.keys(data.icons).length,
    written: 0,
    unchanged: 0,
    files: [],
  };

  const setInfo: IconSetInfo = {
    name: data.info?.name,
    author: data.info?.author,
    license: data.info?.license,
  };

  // The set of icon names whose plain PascalCase form collides with another
  // icon (e.g. `mp-3-01` vs `mp-301`), precomputed once per scope. Iconify
  // sets are deduplicated by name, so `data.icons` keys are unique.
  const collidingNames = iconCollidingNames(setName, Object.keys(data.icons));

  const iconNames: string[] = [];
  for (const iconName of Object.keys(data.icons)) {
    const svg = iconifyIconToSvg(data, iconName);
    const { body } = hoistPresentationAttributes(extractSvgBody(svg));
    if (!hasRenderableElements(body)) {
      continue;
    }
    iconNames.push(iconName);
    writeIfChanged(
      sourceRoot,
      join(sourceRoot, 'lib/icons', `${iconComponentFileStem(iconName)}.ts`),
      generateIconFileContent(
        setInfo,
        iconName,
        svg,
        Buffer.from(svg, 'utf-8').toString('base64'),
        setName,
        collidingNames,
      ),
      result,
    );
  }

  writeIfChanged(
    sourceRoot,
    join(sourceRoot, 'lib/icons/index.ts'),
    generateIconsBarrel(iconNames, setName, collidingNames),
    result,
  );

  return result;
}

export async function generateIcons(
  sourceRoot: string,
  data: IconifyJSON,
  setName: string,
): Promise<GenerateIconsResult> {
  return generateIconComponents(sourceRoot, data, setName);
}

/**
 * Generates ONE secondary entry point of a split collection: only the icon
 * components (`sourceRoot/lib/icons`) plus the icons barrel.
 *
 * Each component is fully self-contained (the SVG body is inline in its
 * template), so an entry imports nothing from the primary entry.
 */
export async function generateSecondaryEntry(
  sourceRoot: string,
  data: IconifyJSON,
  entrySetName: string,
): Promise<GenerateIconsResult> {
  return generateIconComponents(sourceRoot, data, entrySetName);
}
