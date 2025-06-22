import fs from 'node:fs/promises'
import path from 'node:path'

import { locate } from '@iconify/json'
import { defaultIconCustomisations } from '@iconify/utils/lib/customisations/defaults'
import { parseIconSet } from '@iconify/utils/lib/icon-set/parse'
import { iconToSVG } from '@iconify/utils/lib/svg/build'

import { names } from './utils/names'

const OUTPUT_DIR = 'packages'
const ICON_FILE = 'icons.ts'
const INDEX_FILE = 'index.ts'

export async function svgToTs(name: string) {
  const iconSetPath = locate(name)
  const iconSetRaw = await fs.readFile(iconSetPath, 'utf8')
  const iconSet = JSON.parse(iconSetRaw)

  const iconEntries: string[] = []

  parseIconSet(iconSet, (iconName, iconData) => {
    if (!iconData)
      return console.error(`❌ Failed to parse icon ${iconName}`)

    const render = iconToSVG(iconData, {
      ...defaultIconCustomisations,
      height: 'auto',
    })

    const iconNames = names(`${name}-${iconName}`)

    const iconConst = `export const ${iconNames.propertyName}: Icon = ${JSON.stringify({
      body: render.body,
      width: render.attributes.width ? Number(render.attributes.width) : undefined,
      height: render.attributes.height ? Number(render.attributes.height) : undefined,
      viewBox: render.attributes.viewBox,
    }, null, 2)}`

    iconEntries.push(iconConst)
  })

  const outputPath = path.join(OUTPUT_DIR, name, 'src', 'lib')
  await fs.mkdir(outputPath, { recursive: true })

  const iconFilePath = path.join(outputPath, ICON_FILE)
  const iconFileContent = `import type { Icon } from 'ngxi'

${iconEntries.join('\n\n')}`
  await fs.writeFile(iconFilePath, iconFileContent, 'utf8')

  const exports = [
    `export * from './lib/${path.basename(ICON_FILE, '.ts')}'`,
    `export * from './lib/${names(name).fileName}'`,
  ]

  const indexFilePath = path.join(OUTPUT_DIR, name, 'src', INDEX_FILE)
  await fs.writeFile(indexFilePath, exports.join('\n'), 'utf8')

  console.log(`✅ Generated ${iconEntries.length} icons for '${name}'`)
}
