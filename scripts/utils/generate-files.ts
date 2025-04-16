import fs from 'node:fs/promises'
import path from 'node:path'
import ejs from 'ejs'
import { logger } from './logger'
import { names } from './names'
import * as strings from './strings'

/**
 * Generate files from template folder into a target folder.
 *
 * @param templateDir Path to template folder
 * @param outputDir Path to output folder
 * @param context Object with variables for EJS and dynamic filenames
 */
export async function generateFiles(
  templateDir: string,
  outputDir: string,
  context: Record<string, any>,
  config?: {
    silentLogger?: boolean
  },
) {
  const { silentLogger } = config || {}
  const fullContext = {
    ...context,
    ...strings,
    names,
  }

  async function renderDir(src: string, dest: string) {
    const entries = await fs.readdir(src, { withFileTypes: true })

    for (const entry of entries) {
      const originalName = entry.name
      const srcPath = path.join(src, originalName)

      const resolvedName = originalName
        .replace(/__(\w+)__/g, (_, key) =>
          key in fullContext ? strings.dasherize(String(fullContext[key as keyof typeof strings])) : key)
        .replace(/\.template$/, '')

      const destPath = path.join(dest, resolvedName)

      if (entry.isDirectory()) {
        await fs.mkdir(destPath, { recursive: true })
        await renderDir(srcPath, destPath)
      }
      else {
        const template = await fs.readFile(srcPath, 'utf-8')
        const rendered = ejs.render(template, fullContext)
        await fs.mkdir(path.dirname(destPath), { recursive: true })
        await fs.writeFile(destPath, rendered)
        if (!silentLogger)
          logger.info(`Generated: ${destPath}`)
      }
    }
  }

  await fs.mkdir(outputDir, { recursive: true })
  await renderDir(templateDir, outputDir)
}
