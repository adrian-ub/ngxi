import type { IconifyJSON } from '@iconify/types';
import { globToRegExp } from './glob';
import {
  iconCollidingNames,
  iconComponentName,
  iconComponentSelector,
} from './naming';

/** Secondary entry point of a split collection (name + icon-name glob). */
export interface ReadmeEntry {
  name: string;
  filter: string;
}

/** The generated-code example rendered in the README usage section. */
export interface ReadmeUsage {
  /** Module the example imports the component from, e.g. `@ngxi/lucide`. */
  importFrom: string;
  /** Example component class, e.g. `LucideCircleCheck`. */
  className: string;
  /** Example component selector attribute, e.g. `lucideCircleCheck`. */
  selectorAttr: string;
}

/** GitHub repo used for the license badge links. */
const REPO = 'adrian-ub/ngxi';

/**
 * Badge color: monochrome black (grey label, black value), matching the
 * @openng/optimus-ui README badge style.
 */
const BADGE_COLOR = 'black';

function usageFor(
  setName: string,
  iconName: string,
  importFrom: string,
  collidingNames?: Set<string>,
): ReadmeUsage {
  return {
    importFrom,
    className: iconComponentName(setName, iconName, collidingNames),
    selectorAttr: iconComponentSelector(
      setName,
      iconName,
      collidingNames,
    ).slice(4, -1),
  };
}

/**
 * The colliding icon names of one scope: for a split collection, only the
 * icons matching the entry's filter (mirroring `filterIconifyJSON` used by the
 * generate-icons script); otherwise every icon of the set.
 */
function scopeCollidingNames(
  data: IconifyJSON,
  setName: string,
  entry?: ReadmeEntry,
): Set<string> {
  const all = Object.keys(data.icons);
  const names = entry
    ? all.filter((name) => globToRegExp(entry.filter).test(name))
    : all;
  return iconCollidingNames(setName, names);
}

/**
 * Picks the icon used in the README usage example: the set's first sample icon
 * (Iconify marks popular icons in `info.samples`) when it is a canonical icon
 * and, for split collections, belongs to one of the secondary entries;
 * otherwise the first canonical icon of the set (or of the first entry).
 */
export function pickReadmeUsage(
  collection: string,
  data: IconifyJSON,
  entries: ReadmeEntry[] = [],
): ReadmeUsage {
  const iconKeys = Object.keys(data.icons);
  const canonicalSamples = (data.info?.samples ?? []).filter(
    (name) => data.icons[name] !== undefined,
  );
  const candidates = canonicalSamples.length > 0 ? canonicalSamples : iconKeys;
  if (candidates.length === 0) {
    throw new Error(
      `No icons found in ${collection} to build a README usage example.`,
    );
  }
  if (entries.length === 0) {
    return usageFor(
      collection,
      candidates[0],
      `@ngxi/${collection}`,
      scopeCollidingNames(data, collection),
    );
  }
  for (const candidate of candidates) {
    for (const entry of entries) {
      if (globToRegExp(entry.filter).test(candidate)) {
        return usageFor(
          `${collection}-${entry.name}`,
          candidate,
          `@ngxi/${collection}/${entry.name}`,
          scopeCollidingNames(data, `${collection}-${entry.name}`, entry),
        );
      }
    }
  }
  const first = entries[0];
  const fallback = iconKeys.find((name) =>
    globToRegExp(first.filter).test(name),
  );
  return usageFor(
    `${collection}-${first.name}`,
    fallback ?? iconKeys[0],
    `@ngxi/${collection}/${first.name}`,
    scopeCollidingNames(data, `${collection}-${first.name}`, first),
  );
}

/**
 * Renders the library README.md from the Iconify reference: title, badges,
 * set info, install/usage example (picking a real sample icon), sponsors and
 * license sections.
 */
export function buildReadme(
  collection: string,
  data: IconifyJSON,
  entries: ReadmeEntry[] = [],
): string {
  const info = data.info;
  const usage = pickReadmeUsage(collection, data, entries);
  const name = info?.name ?? collection;
  const iconCount = Object.keys(data.icons).length;
  const license = info?.license?.title ?? info?.license?.spdx ?? 'UNLICENSED';
  const author = info?.author?.name ?? 'Unknown';
  const website = info?.author?.url ?? '';
  const importPath = `@ngxi/${collection}`;
  const websiteLine = website ? `- Website: ${website}\n` : '';

  return `# ${importPath}

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![bundle][bundle-src]][bundle-href]
[![JSDocs][jsdocs-src]][jsdocs-href]
[![License][license-src]][license-href]

## Icon Set Info

- Name: ${name}
- Prefix: ${collection}
- Icons: ${iconCount}
- License: ${license}
- Author: ${author}
${websiteLine}

## Installation

\`\`\`sh
pnpm add ${importPath}
\`\`\`

## Usage

\`\`\`ts
import { Component } from '@angular/core'
import { ${usage.className} } from '${usage.importFrom}'

@Component({
  imports: [${usage.className}],
  template: \`<svg ${usage.selectorAttr}></svg>\`
})
export default class {}
\`\`\`

## Sponsors

<p align="center">
  <a href="https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg">
    <img src='https://cdn.jsdelivr.net/gh/adrian-ub/static/sponsors.svg'/>
  </a>
</p>

## License

${license} License © 2025-PRESENT [Adrián UB](https://github.com/adrian-ub)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/${importPath}?color=${BADGE_COLOR}
[npm-version-href]: https://npmx.dev/package/${importPath}
[npm-downloads-src]: https://img.shields.io/npm/dm/${importPath}?color=${BADGE_COLOR}
[npm-downloads-href]: https://npmx.dev/package/${importPath}
[bundle-src]: https://img.shields.io/bundlephobia/minzip/${importPath}?color=${BADGE_COLOR}&label=minzip
[bundle-href]: https://bundlephobia.com/result?p=${importPath}
[license-src]: https://img.shields.io/github/license/${REPO}.svg?color=${BADGE_COLOR}
[license-href]: https://github.com/${REPO}/blob/main/LICENSE
[jsdocs-src]: https://img.shields.io/badge/jsdocs-reference-${BADGE_COLOR}.svg
[jsdocs-href]: https://www.jsdocs.io/package/${importPath}
`;
}
