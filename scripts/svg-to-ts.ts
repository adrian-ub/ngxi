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

  const globalIndex: string[] = []

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

      globalIndex.push(generatedComponent)
      progressBar.update(index + 1, { name: iconName })
    }),
  )

  await Promise.all(tasks)

  progressBar.update(iconEntries.length, { name: '' })
  progressBar.stop()

  if (!globalIndex.length) {
    globalIndex.push(`// Workaround for: https://github.com/microsoft/rushstack/issues/2806.
// This is a private export that can be removed at any time.
export const ɵɵtsModuleIndicatorApiExtractorWorkaround = true
`)
  }

  globalIndex.unshift('import { Component, input } from \'@angular/core\'', '')

  await fs.writeFile(`${libraryDir}/index.ts`, globalIndex.join('\n'))
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
