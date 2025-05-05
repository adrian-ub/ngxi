import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execa } from 'execa'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const ICONIFY_COLLECTION = path.resolve(__dirname, '../collections.ts')

// @see https://github.com/adrian-ub/ngxi/issues/10
const EXCLUDED_COLLECTIONS = ['arcticons', 'fluent', 'fluent-emoji', 'ic', 'material-symbols', 'material-symbols-light', 'mdi', 'ph', 'solar', 'table']

async function update() {
  try {
    execa('nip', ['@iconify/json@latest', '--catalog=dev', '-d', '--yes'])
    const collections: string[] = []
    const res = await fetch('https://api.github.com/repos/iconify/icon-sets/contents/json')
    const data = await res.json() as Array<{ name: string, type: 'file' | 'dir' }>

    for (const item of data) {
      if (item.type === 'file' && item.name.endsWith('.json')) {
        const collectionName = item.name.replace(/\.json$/, '')
        if (!EXCLUDED_COLLECTIONS.includes(collectionName)) {
          collections.push(collectionName)
        }
      }
    }

    await writeFile(
      ICONIFY_COLLECTION,
      `export default ${JSON.stringify(collections)}`,
      'utf-8',
    )
  }
  catch (err) {
    console.log(err)
  }
}

update()
