import fs from 'node:fs'
import fsp from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'

import { locate } from '@iconify/json'
import jc from '@iconify/json/collections.json'
import { x } from 'tinyexec'

import localJc from '../collections.json'
import { generateLibraryIcon } from './generate-library-icon'
import { svgToTs } from './svg-to-ts'

const JSON_DIR = path.resolve('json')
const PACKAGES_DIR = path.resolve('packages')

main().catch((err) => {
  console.error('❌ Unexpected error:', err)
  process.exit(1)
})

async function main() {
  fs.mkdirSync(JSON_DIR, { recursive: true })

  const differences = diffCollections(localJc, jc)
  const changedKeys = Object.keys(differences)
  if (!changedKeys.length) {
    console.log('✅ No changes in icon sets')
    return
  }

  const changesMd: string[] = []

  for (const key of changedKeys) {
    const { type } = differences[key]
    const newSetRaw = JSON.parse(fs.readFileSync(locate(key), 'utf8'))
    const newSet = { icons: newSetRaw.icons ?? {} }

    const snapshotPath = path.join(JSON_DIR, `${key}.json`)
    const oldSet = fs.existsSync(snapshotPath)
      ? JSON.parse(fs.readFileSync(snapshotPath, 'utf8'))
      : { icons: {} }

    const diff = diffIconSet(oldSet, newSet)

    const log: string[] = [`## ${key}`, `📦 ${type.toUpperCase()}`]

    if (diff.added.length)
      log.push(`🆕 Added: ${diff.added.join(', ')}`)
    if (diff.modified.length)
      log.push(`✏️ Modified: ${diff.modified.join(', ')}`)
    if (diff.removed.length)
      log.push(`🗑️ Removed: ${diff.removed.join(', ')}`)

    changesMd.push(log.join('\n'))

    const pkgPath = path.join(PACKAGES_DIR, key)
    if (!fs.existsSync(pkgPath)) {
      await generateLibraryIcon(key)
    }
    else {
      console.log(`ℹ️ Skipped library creation for "${key}" (already exists)`)
    }

    await svgToTs(key)
    await fsp.writeFile(snapshotPath, JSON.stringify(newSet, null, 2))
  }

  await Promise.all([
    fsp.writeFile('collections.json', JSON.stringify(jc, null, 2)),
    fsp.writeFile('collections.md', generateCollectionMarkdown(jc)),
    fsp.writeFile('last-icon-update.md', changesMd.join('\n\n')),
  ])

  await x('pnpm', ['install'])
  await x('git', ['add', '*'])
  await x('git', ['commit', '-m', `feat: update icons-set`])
}

function diffCollections(prev: Record<string, any>, next: Record<string, any>) {
  const result: Record<string, { type: 'added' | 'removed' | 'modified', changes?: string[] }> = {}
  const allKeys = new Set([...Object.keys(prev), ...Object.keys(next)])

  for (const key of allKeys) {
    const oldVal = prev[key]
    const newVal = next[key]

    if (!oldVal && newVal) {
      result[key] = { type: 'added' }
    }
    else if (oldVal && !newVal) {
      result[key] = { type: 'removed' }
    }
    else {
      const changes = Object.keys(newVal).filter(prop => JSON.stringify(oldVal[prop]) !== JSON.stringify(newVal[prop]))
      if (changes.length)
        result[key] = { type: 'modified', changes }
    }
  }

  return result
}

function diffIconSet(prev: any, next: any) {
  const added: string[] = []
  const removed: string[] = []
  const modified: string[] = []

  const prevIcons = prev.icons || {}
  const nextIcons = next.icons || {}

  const keys = new Set([...Object.keys(prevIcons), ...Object.keys(nextIcons)])

  for (const key of keys) {
    if (!prevIcons[key] && nextIcons[key])
      added.push(key)
    else if (prevIcons[key] && !nextIcons[key])
      removed.push(key)
    else if (JSON.stringify(prevIcons[key]) !== JSON.stringify(nextIcons[key]))
      modified.push(key)
  }

  return { added, removed, modified }
}

function generateCollectionMarkdown(collections: Record<string, any>): string {
  const visible = Object.entries(collections)
    .filter(([_, val]) => !val.hidden)
    .map(([key, val]) => ({ key, ...val }))

  const lines = ['# List of icon sets', '']

  for (const c of visible) {
    lines.push(`## ${c.name}`)
    lines.push(`* Number of icons: ${c.total}`)
    lines.push(`* Author: ${c.author.name}`)
    if ('url' in c.author)
      lines.push(`* URL: ${c.author.url}`)
    lines.push(`* License: ${c.license.title}`)
    if ('url' in c.license)
      lines.push(`* License URL: ${c.license.url}`)
    if ('version' in c)
      lines.push(`* Version: ${c.version}`)
    lines.push(`* Palette: ${c.palette ? 'Colorful' : 'Colorless'}`)
    lines.push(`* Icon set prefix: \`${c.key}\``)
    lines.push('')
  }

  return lines.join('\n')
}
