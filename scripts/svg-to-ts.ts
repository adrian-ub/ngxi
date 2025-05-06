import type { IconifyJSON } from '@iconify/types'

import fsSync from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { lookupCollection } from '@iconify/json'
import { loadNodeIcon } from '@iconify/utils/lib/loader/node-loader'
import * as cheerio from 'cheerio'
import { Presets, SingleBar } from 'cli-progress'
import ejs from 'ejs'
import pLimit from 'p-limit'
import pc from 'picocolors'

import collections from '~~/collections'

import { names } from './utils/names'

import * as strings from './utils/strings'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const templateIconDir = path.resolve(__dirname, './files/icon/__svgFileName__.ts.template')

const templateIcon = fsSync.readFileSync(templateIconDir, 'utf-8')

async function svgToTs() {
  const limitCollections = pLimit(3)

  const tasks = collections.map(collection =>
    limitCollections(async () => {
      const iconifyJSON = await lookupCollection(collection)
      await createIconset(iconifyJSON)
    }),
  )

  await Promise.all(tasks)
}

async function createIconset(collection: IconifyJSON) {
  const libraryRoot = `packages/${collection.prefix}`
  const libraryDir = path.resolve(__dirname, `../${libraryRoot}`)

  const componentSnippets: string[] = []

  const icons = await loadIconset(collection)
  const iconEntries = Object.entries(icons)

  const progressBar = new SingleBar({
    hideCursor: true,
    format: `{bar} ${pc.green(collection.prefix)} {value}/{total} ${pc.gray('{name}')}`,
    linewrap: false,
    barsize: 40,
  }, Presets.shades_grey)

  progressBar.start(iconEntries.length, 0, { name: '' })

  const createIconsetLimit = pLimit(5)

  const tasks = iconEntries.map(([iconName, svg], index) =>
    createIconsetLimit(async () => {
      const iconNames = names(`${collection.prefix}-${iconName}`)
      const $ = cheerio.load(svg)
      const svgElement = $('svg')
      if (!svgElement)
        return

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

      const generatedComponent = ejs.render(templateIcon, {
        names,
        ...strings,
        ...substitutions,
      })

      componentSnippets.push(generatedComponent)
      progressBar.update(index + 1, { name: iconName })
    }),
  )

  await Promise.all(tasks)

  progressBar.update(iconEntries.length, { name: '' })
  progressBar.stop()

  // Si no hay componentes, agrega el workaround
  if (!componentSnippets.length) {
    await fs.writeFile(`${libraryDir}/index.ts`, `
// Workaround for: https://github.com/microsoft/rushstack/issues/2806.
// This is a private export that can be removed at any time.
export const ɵɵtsModuleIndicatorApiExtractorWorkaround = true
    `.trimStart())
    return
  }

  // Divide en chunks
  const chunkSize = 500
  const chunksDir = path.resolve(libraryDir, 'chunks')
  await fs.mkdir(chunksDir, { recursive: true })

  const chunkCount = Math.ceil(componentSnippets.length / chunkSize)
  const chunkFilenames: string[] = []

  for (let i = 0; i < chunkCount; i++) {
    const start = i * chunkSize
    const end = start + chunkSize
    const chunk = componentSnippets.slice(start, end)
    const chunkFilename = `chunk-${i}.ts`
    chunkFilenames.push(`./chunks/${chunkFilename}`)
    await fs.writeFile(path.join(chunksDir, chunkFilename), [
      `import { Component, input } from '@angular/core'`,
      '',
      ...chunk,
    ].join('\n'))
  }

  const indexTsContent = [
    `// Auto-generated entry point for ${collection.prefix}`,
    ...chunkFilenames.map(f => `export * from '${f.replace('.ts', '')}'`),
    '',
  ].join('\n')

  await fs.writeFile(`${libraryDir}/index.ts`, indexTsContent)
}

async function loadIconset(iconset: IconifyJSON) {
  const result: Record<string, string> = {}
  const limitIcons = pLimit(10)

  const tasks = Object.keys(iconset.icons).map(iconName =>
    limitIcons(async () => {
      const svg = await loadNodeIcon(iconset.prefix, iconName)
      if (!svg) {
        console.error(`Failed to load icon: ${iconset.prefix}:${iconName}`)
        return
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
    }),
  )

  await Promise.all(tasks)

  return result
}

svgToTs()
