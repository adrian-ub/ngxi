import type { IconifyJSON } from '@iconify/types'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { execa } from 'execa'

import { version } from '~~/package.json'
import { angularPeerDepVersion, tsLibLatestVersion } from './utils/dependencies-version'
import { generateFiles } from './utils/generate-files'
import { names } from './utils/names'
import { offsetFromRoot } from './utils/offset-from-root'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const templateDir = path.resolve(__dirname, './files/library')

const defaultProps = {
  author: 'Adrián UB',
  githubRepo: 'https://github.com/adrian-ub/ngxi',
  funding: 'https://github.com/sponsors/adrian-ub',
}

export async function generateLibrary(collection: IconifyJSON) {
  const libraryRoot = `packages/${collection.prefix}`
  const libraryDir = path.resolve(__dirname, `../${libraryRoot}`)

  const { fileName } = names(collection.prefix)
  const rootOffset = offsetFromRoot(libraryRoot)
  const importPath = `@ngxi/${collection.prefix}`

  const firstIcon = Object.keys(collection.icons)[0]
  const { className, propertyName } = names(`${collection.prefix}-${firstIcon}-icon`)

  const pkgProps = {
    licensePkgJson: collection.info?.license.spdx,
    LICENSE: collection.info?.license.title,
    libraryRoot,
    fileName,
    importPath,
    angularPeerDepVersion,
    rootOffset,
    version,
    rootTsConfig: path.join(rootOffset, 'tsconfig.json'),
    installationCommmand: `npm install ${importPath}`,
    className,
    propertyName,
    tsLibLatestVersion,
  }

  await generateFiles(templateDir, libraryDir, {
    ...defaultProps,
    ...pkgProps,
  })

  execa('eslint', ['--fix', '--no-ignore', libraryDir])
}
