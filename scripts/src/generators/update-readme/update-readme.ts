import type { Tree } from '@nx/devkit'
import { collections } from '@ngxi/collections'

import { formatFiles } from '@nx/devkit'

const ICONSETS_START_MARKER = '<!-- ICONSETS:START -->'
const ICONSETS_END_MARKER = '<!-- ICONSETS:END -->'
const ICONLINKS_START_MARKER = '<!-- ICONLINKS:START -->'
const ICONLINKS_END_MARKER = '<!-- ICONLINKS:END -->'

export async function updateReadmeGenerator(tree: Tree) {
  const currentREADME = tree.read('README.md')?.toString() ?? ''

  const table = generateTable(collections)
  const links = generateLinks(collections)
  const newREADME = updateReadmeContent(currentREADME, table, links)

  tree.write('README.md', newREADME)

  await formatFiles(tree)
}

function generateTable(iconsets: string[]): string {
  const rows = iconsets
    .sort()
    .map(
      name =>
        `| \`@ngxi/${name}\` | [![Ngxi ${name} version][${name}-ngxi-version-src]][${name}-ngxi-href] | ![${name} downloads][${name}-ngxi-downloads-src] | ![${name} license][${name}-ngxi-license] |`,
    )

  return [
    '| Package | Version | Downloads | LICENSE |',
    '| :-- | :-: | :-: | :-: |',
    ...rows,
  ].join('\n')
}

function generateLinks(iconsets: string[]): string {
  return iconsets
    .sort()
    .map((name) => {
      return [
        `[${name}-ngxi-version-src]: https://img.shields.io/npm/v/@ngxi/${name}?style=flat&colorA=080f12&colorB=1fa669`,
        `[${name}-ngxi-href]: https://www.npmjs.com/package/@ngxi/${name}`,
        `[${name}-ngxi-downloads-src]: https://img.shields.io/npm/dm/@ngxi/${name}?style=flat&colorA=080f12&colorB=1fa669`,
        `[${name}-ngxi-license]: https://img.shields.io/npm/l/@ngxi/${name}`,
      ].join('\n')
    })
    .join('\n\n')
}

function updateReadmeContent(
  content: string,
  table: string,
  newLinks: string,
): string {
  let updatedContent = replaceSection(content, ICONSETS_START_MARKER, ICONSETS_END_MARKER, table)
  updatedContent = replaceSection(updatedContent, ICONLINKS_START_MARKER, ICONLINKS_END_MARKER, newLinks.trim())
  return updatedContent
}

function replaceSection(
  content: string,
  startMarker: string,
  endMarker: string,
  replacement: string,
): string {
  const regex = new RegExp(`${startMarker}[\\s\\S]*?${endMarker}`)
  return content.replace(regex, [startMarker, replacement, endMarker].join('\n'))
}

export default updateReadmeGenerator
