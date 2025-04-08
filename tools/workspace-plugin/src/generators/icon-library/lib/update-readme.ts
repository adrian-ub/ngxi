import { Tree } from '@nx/devkit';

const README_PATH = 'README.md';
const ICONSETS_PATH = 'tools/workspace-plugin/src/generators/svg-to-ts/icon-sets.json';

export function updateReadme(tree: Tree, iconsetName: string) {
  if (!tree.exists(README_PATH) || !tree.exists(ICONSETS_PATH)) return;

  const current = tree.read(README_PATH, 'utf-8') ?? '';
  const iconsets = JSON.parse(tree.read(ICONSETS_PATH, 'utf-8') ?? '[]') as string[];

  const rows = iconsets
    .sort()
    .map(
      (name) =>
        `| \`@ngxi/${name}\` | [![Ngxi ${name} version][${name}-ngxi-version-src]][${name}-ngxi-href] | ![${name} downloads][${name}-ngxi-downloads-src] | ![${name} license][${name}-ngxi-license] |`
    );

  const table = [
    '| Package | Version | Downloads | LICENSE |',
    '| :-- | :-: | :-: | :-: |',
    ...rows,
  ].join('\n');

  const newLinks = iconsets
    .sort()
    .map((name) => {
      return [
        `[${name}-ngxi-version-src]: https://img.shields.io/npm/v/@ngxi/${name}?style=flat&colorA=080f12&colorB=1fa669`,
        `[${name}-ngxi-href]: https://www.npmjs.com/package/@ngxi/${name}`,
        `[${name}-ngxi-downloads-src]: https://img.shields.io/npm/dm/@ngxi/${name}?style=flat&colorA=080f12&colorB=1fa669`,
        `[${name}-ngxi-license]: https://img.shields.io/npm/l/@ngxi/${name}`,
      ].join('\n');
    })
    .join('\n\n');

  // Inyectar los comentarios si no existen aún
  const startMarker = '<!-- ICONSETS:START -->';
  const endMarker = '<!-- ICONSETS:END -->';

  let updated = current;

  if (!current.includes(startMarker)) {
    updated += `\n\n${startMarker}\n${endMarker}`;
  }

  updated = updated.replace(
    new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`),
    [startMarker, table, endMarker].join('\n')
  );

  updated = replaceLinks(updated, newLinks);

  tree.write(README_PATH, updated.trimEnd() + '\n');
}

function replaceLinks(content: string, newLinks: string): string {
  const cleaned = content.replace(
    /\[[a-z0-9-]+-ngxi-(version-src|href|downloads-src|license)\]: .*\n?/gi,
    ''
  );
  return cleaned.trimEnd() + '\n\n' + newLinks.trim();
}
