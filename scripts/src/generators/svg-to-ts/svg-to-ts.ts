import type { IconifyJSON } from '@iconify/types'
import type { Tree } from '@nx/devkit'

import fsSync from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'

import { lookupCollection } from '@iconify/json'
import { loadNodeIcon } from '@iconify/utils/lib/loader/node-loader'
import { collections } from '@internal/collections'
import { formatFiles, names } from '@nx/devkit'
import c from 'ansis'
import * as cheerio from 'cheerio'
import ejs from 'ejs'
import ora from 'ora'

import pLimit from 'p-limit'

const templateIconDir = path.resolve(__dirname, './files/icon/__svgFileName__.ts.template')
const templateIcon = fsSync.readFileSync(templateIconDir, 'utf-8')

const CONCURRENCY_LIMIT = 20
const limit = pLimit(CONCURRENCY_LIMIT)

export async function svgToTsGenerator(tree: Tree) {
  for (const collection of collections) {
    const iconifyJSON = await lookupCollection(collection)

    if (!iconifyJSON?.icons || !Object.keys(iconifyJSON.icons).length)
      continue

    await cleanIconsetDirs(collection)
    await createIconset(iconifyJSON)
  }

  await formatFiles(tree)
}

async function createIconset(collection: IconifyJSON) {
  const libraryDir = path.resolve(`packages/${collection.prefix}`)
  const outputDir = path.join(libraryDir, 'src')
  const chunksDir = path.join(outputDir, 'chunks')
  await fs.mkdir(chunksDir, { recursive: true })

  const icons = await loadIconset(collection)
  const componentSnippets: string[] = []
  const progressBar = ora(`${c.green(collection.prefix)} 0/${Object.keys(icons).length}`).start()

  const renderTasks = Object.entries(icons).map(([iconName, svg], index) =>
    limit(async () => {
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
        ...substitutions,
      })

      componentSnippets[index] = generatedComponent
      progressBar.text = `${c.green(collection.prefix)} ${index + 1}/${Object.keys(icons).length} ${c.gray(iconName)}`
    }),
  )

  await Promise.all(renderTasks)
  progressBar.succeed(`${c.green(collection.prefix)} completed with ${Object.keys(icons).length} icons.`)

  if (!componentSnippets.length) {
    await fs.writeFile(path.join(outputDir, 'index.ts'), `
// Workaround for: https://github.com/microsoft/rushstack/issues/2806.
// This is a private export that can be removed at any time.
export const ɵɵtsModuleIndicatorApiExtractorWorkaround = true
    `.trimStart())
    return
  }

  const chunkSize = 500
  const chunkCount = Math.ceil(componentSnippets.length / chunkSize)
  const chunkFilenames: string[] = []

  const writeChunkTasks = Array.from({ length: chunkCount }).map((_, i) =>
    limit(async () => {
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
    }),
  )

  await Promise.all(writeChunkTasks)

  const indexTsContent = [
    `// Auto-generated entry point for ${collection.prefix}`,
    ...chunkFilenames.map(f => `export * from '${f.replace('.ts', '')}'`),
    '',
  ].join('\n')

  await fs.writeFile(path.join(outputDir, 'index.ts'), indexTsContent)

  await ensureNgPackageJson(libraryDir)
}

async function ensureNgPackageJson(directory: string) {
  const ngPackagePath = path.join(directory, 'ng-package.json')
  const ngPackageContent = {
    lib: {
      entryFile: 'src/index.ts',
    },
  }

  if (!fsSync.existsSync(ngPackagePath)) {
    await fs.writeFile(ngPackagePath, `${JSON.stringify(ngPackageContent, null, 2)}\n`, 'utf8')
  }
}

async function loadIconset(iconset: IconifyJSON) {
  const result: Record<string, string> = {}

  const tasks = Object.keys(iconset.icons).map(iconName =>
    limit(async () => {
      const svg = await loadNodeIcon(iconset.prefix, iconName)
      if (!svg) {
        console.error(`Failed to load icon: ${iconset.prefix}:${iconName}`)
        return
      }

      const $ = cheerio.load(svg, { xmlMode: true })
      $('*').each((_, el) => {
        if (el.type === 'tag' && el.tagName !== 'svg') {
          el.tagName = `svg:${el.tagName}`
        }
      })

      result[iconName] = $.xml()
    }),
  )

  await Promise.all(tasks)
  return result
}

async function cleanIconsetDirs(baseDir: string) {
  const dir = path.resolve('packages', baseDir, 'src')

  const chunks = path.resolve(dir, 'chunks')
  try {
    await fs.rm(chunks, { recursive: true, force: true })
  }
  catch {}

  const indexTs = path.resolve(dir, 'index.ts')
  try {
    await fs.writeFile(indexTs, `// Workaround for: https://github.com/microsoft/rushstack/issues/2806.\n// This is a private export that can be removed at any time.\nexport const ɵɵtsModuleIndicatorApiExtractorWorkaround = true\n`)
  }
  catch {}
}

export default svgToTsGenerator
