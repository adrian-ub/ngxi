import type { IconifyJSON } from '@iconify/types'

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { lookupCollection } from '@iconify/json'
import { loadNodeIcon } from '@iconify/utils/lib/loader/node-loader'
import * as cheerio from 'cheerio'
import { Presets, SingleBar } from 'cli-progress'
import { execa } from 'execa'

import pc from 'picocolors'
import collections from '~~/collections'
import { generateFiles } from './utils/generate-files'
import { names } from './utils/names'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const templateIconDir = path.resolve(__dirname, './files/icon')

async function svgToTs() {
  const libraries = []
  for (const collection of collections) {
    const iconifyJSON = await lookupCollection(collection)
    await deleteOldIconset(iconifyJSON)
    await createIconset(iconifyJSON)
    const libraryRoot = `packages/${iconifyJSON.prefix}`
    const libraryDir = path.resolve(__dirname, `../${libraryRoot}`)
    libraries.push(libraryDir)
  }

  execa('eslint', ['--fix', '--no-ignore', ...libraries])
}

async function createIconset(collection: IconifyJSON) {
  const libraryRoot = `packages/${collection.prefix}`
  const libraryDir = path.resolve(__dirname, `../${libraryRoot}`)
  const iconsDir = path.join(libraryDir, 'icons')

  await fs.mkdir(iconsDir, { recursive: true })

  const globalIndex: string[] = []

  const icons = await loadIconset(collection)

  const iconEntries = Object.entries(icons)

  const progressBar = new SingleBar({
    hideCursor: true,
    format: `${pc.green(collection.prefix)} {bar} {value}/{total} ${pc.gray('{name}')}`,
    linewrap: false,
    barsize: 40,
  }, Presets.shades_grey)

  progressBar.start(iconEntries.length, 0, { name: '' })

  for (const [index, iconEntry] of iconEntries.entries()) {
    const [iconName, svg] = iconEntry
    const iconNames = names(`${collection.prefix}-${iconName}`)
    const $ = cheerio.load(svg)
    const svgElement = $('svg')
    if (!svgElement)
      continue

    const svgAttributes = Object.entries(svgElement[0].attribs || {}).map(
      ([name, value]) => ({
        originalName: name,
        transformedName: names(name).propertyName,
        value,
      }),
    )

    const substitutions = {
      svgFileName: iconName,
      svgContent: svgElement.html(),
      propertyName: iconNames.propertyName,
      name: iconNames.name,
      className: iconNames.className,
      svgAttributes,
    }

    const filePath = path.join(iconsDir)
    const exportPath = `./icons/${iconName}`

    await generateFiles(templateIconDir, filePath, substitutions, { silentLogger: true })

    globalIndex.push(`export * from '${exportPath}'`)
    progressBar.update(index + 1, { name: iconName })
  }

  progressBar.update(iconEntries.length, { name: '' })
  progressBar.stop()

  await fs.writeFile(`${libraryDir}/index.ts`, globalIndex.sort().join('\n'))
}

async function loadIconset(iconset: IconifyJSON) {
  const result: Record<string, string> = {}

  for (const iconName of Object.keys(iconset.icons)) {
    const svg = await loadNodeIcon(iconset.prefix, iconName)
    if (!svg) {
      console.error(`Failed to load icon: ${iconset.prefix}:${iconName}`)
      continue
    }
    const $ = cheerio.load(svg, { xmlMode: true })

    $('*').each((_, el) => {
      const node = el
      if (node.type === 'tag' && typeof node.tagName === 'string' && node.tagName !== 'svg') {
        node.tagName = `svg:${node.tagName}`
      }
    })

    const optimized = $.xml()
    result[iconName] = optimized
  }

  return result
}

async function deleteOldIconset(collection: IconifyJSON) {
  const libraryRoot = `packages/${collection.prefix}`
  const libraryDir = path.resolve(__dirname, `../${libraryRoot}`)

  const iconsDir = path.join(libraryDir, 'icons')

  const progressBar = new SingleBar(
    {
      clearOnComplete: true,
      hideCursor: true,
      format: `{bar} {value}/{total} ${pc.gray(collection.prefix)}`,
      linewrap: false,
      barsize: 40,
    },
    Presets.shades_grey,
  )

  progressBar.start(1, 0)

  try {
    await fs.rm(iconsDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 1000 })
  }
  catch { }

  progressBar.increment()
  progressBar.stop()
}

svgToTs()
