import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs'
import { basename, join, resolve } from 'node:path'
import process from 'node:process'

import { performCompilation, readConfiguration } from '@angular/compiler-cli'

import { build } from 'esbuild'
import ts from 'typescript'

import { logger } from './utils/logger'

interface BuildOptions {
  tsconfig: string
  entryPoints: string[]
  outputPath: string
  packageJsonPath: string
  external?: string[]
  readmePath?: string
}

export async function buildNgxiLibrary(options: BuildOptions) {
  const { tsconfig, entryPoints, outputPath, readmePath, packageJsonPath, external = [] } = options

  if (existsSync(outputPath))
    rmSync(outputPath, { recursive: true })
  mkdirSync(outputPath, { recursive: true })

  logger.info('Compiling with ngc...')

  const angularCompilerConfig = readConfiguration(tsconfig)
  const result = performCompilation({
    ...angularCompilerConfig,
  })

  if (result.diagnostics?.length) {
    const hasError = result.diagnostics.some(d => d.category === ts.DiagnosticCategory.Error)
    if (hasError) {
      logger.error('Compilation errors detected:')
      for (const diagnostic of result.diagnostics) {
        const msg = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n')
        logger.error(msg)
      }
      process.exit(1)
    }
  }

  logger.success('Angular compilation completed')

  const outDir = outputPath

  logger.info('Bundling with esbuild...')
  for (const entry of entryPoints) {
    const fileName = basename(entry).replace(/\.(ts|js)$/, '')
    await build({
      charset: 'utf8',
      entryPoints: [entry],
      outfile: join(outputPath, 'fesm2022', `${fileName}.mjs`),
      format: 'esm',
      sourcemap: true,
      bundle: true,
      target: 'es2022',
      external,
      loader: {
        '.json': 'json',
      },
    })
  }

  const pkgRaw = readFileSync(packageJsonPath, 'utf8')
  const pkgJson = JSON.parse(pkgRaw)

  delete pkgJson.scripts
  delete pkgJson.devDependencies

  const pkg = {
    ...pkgJson,
    type: 'module',
    exports: Object.fromEntries(
      entryPoints.map((entry) => {
        const name = basename(entry).replace(/\.(ts|js)$/, '')
        return [
          `.`,
          {
            default: `./fesm2022/${name}.mjs`,
            types: `./${name}.d.ts`,
          },
        ]
      }),
    ),
  }

  writeFileSync(join(outputPath, 'package.json'), JSON.stringify(pkg, null, 2))

  if (readmePath && existsSync(readmePath)) {
    copyFileSync(readmePath, join(outputPath, 'README.md'))
  }

  const removeJsFiles = (dir: string) => {
    for (const file of readdirSync(dir)) {
      const fullPath = join(dir, file)
      const stat = statSync(fullPath)
      if (stat.isDirectory()) {
        removeJsFiles(fullPath)
      }
      else if (file.endsWith('.js') || file.endsWith('.js.map')) {
        unlinkSync(fullPath)
      }
    }
  }

  removeJsFiles(outDir)

  logger.success(`Library built successfully at ${outputPath}`)
}

const args = process.argv.slice(2)
const packageName = args[0]

if (!packageName) {
  logger.error('Please provide a package name as the first argument.')
  process.exit(1)
}

const base = resolve('packages', packageName)

buildNgxiLibrary({
  tsconfig: join(base, 'tsconfig.lib.prod.json'),
  entryPoints: [join(base, 'dist/index.js')],
  outputPath: resolve(base, 'dist'),
  readmePath: join(base, 'README.md'),
  packageJsonPath: join(base, 'package.json'),
  external: ['@angular/core', '@angular/common'],
})
