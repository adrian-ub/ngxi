import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execa } from 'execa'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ICONIFY_COLLECTION = path.resolve(__dirname, '../collections.ts')
const PACKAGE_JSON = path.resolve(__dirname, '../package.json')

async function update() {
  try {
    execa('ni', ['@iconify/json@latest', '-D'])
    const collections: string[] = []
    const res = await fetch('https://api.github.com/repos/iconify/icon-sets/contents/json')
    const data = await res.json() as Array<{ name: string, type: 'file' | 'dir' }>

    for (const item of data) {
      if (item.type === 'file' && item.name.endsWith('.json')) {
        collections.push(item.name.replace(/\.json$/, ''))
      }
    }

    await writeFile(
      ICONIFY_COLLECTION,
      `export default ${JSON.stringify(collections)}`,
      'utf-8',
    )

    execa('eslint', ['--fix', '--no-ignore', ICONIFY_COLLECTION, PACKAGE_JSON])
  }
  catch (err) {
    console.log(err)
  }
}

update()
