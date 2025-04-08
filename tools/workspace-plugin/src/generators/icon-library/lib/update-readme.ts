import { Tree } from '@nx/devkit';

export function updateReadme(tree: Tree, iconsetName: string) {
  const readmePath = 'README.md';
  if (!tree.exists(readmePath)) return;

  const name = iconsetName;
  const pkg = `@ngxi/${name}`;
  const entry = `| \`${pkg}\` | [![Ngxi ${name} version][${name}-ngxi-version-src]][${name}-ngxi-href] | ![${name} downloads][${name}-ngxi-downloads-src] | ![${name} license][${name}-ngxi-license] |`;

  const badgeBlock = `\n[${name}-ngxi-version-src]: https://img.shields.io/npm/v/${pkg}?style=flat&colorA=080f12&colorB=1fa669\n[${name}-ngxi-href]: https://www.npmjs.com/package/${pkg}\n[${name}-ngxi-downloads-src]: https://img.shields.io/npm/dm/${pkg}?style=flat&colorA=080f12&colorB=1fa669\n[${name}-ngxi-license]: https://img.shields.io/npm/l/${pkg}`;

  const content = tree.read(readmePath, 'utf-8') ?? '';
  const lines = content.split('\n');

  const tableStart = lines.findIndex(l => l.includes('| Package |'));
  const tableEnd = lines.findIndex((l, i) => i > tableStart && !l.trim().startsWith('|'));

  const tableEntries = lines.slice(tableStart + 2, tableEnd);
  const alreadyExists = tableEntries.some(line => line.includes(pkg));

  if (alreadyExists) return;

  const updatedTable = [...tableEntries, entry].sort();
  const updatedLines = [
    ...lines.slice(0, tableStart + 2),
    ...updatedTable,
    ...lines.slice(tableEnd),
    badgeBlock.trim()
  ];

  tree.write(readmePath, updatedLines.join('\n'));
}
