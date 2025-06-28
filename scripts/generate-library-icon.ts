import fs from 'node:fs'
import path from 'node:path'

import { lookupCollection } from '@iconify/json'
import jc from '@iconify/json/collections.json'
import ejs from 'ejs'
import ora from 'ora'
import { x } from 'tinyexec'
import pkgInfo from '../package.json'

import { names } from './utils/names'

const TEMPLATE_DIR = 'scripts/files'
const PACKAGES_DIR = 'packages'
const VERSION = pkgInfo.version

const templates = {
  readme: fs.readFileSync(path.join(TEMPLATE_DIR, 'README.md.template'), 'utf-8'),
  directive: fs.readFileSync(path.join(TEMPLATE_DIR, 'directive.ts.template'), 'utf-8'),
  packageJSON: fs.readFileSync(path.join(TEMPLATE_DIR, 'package.json.template'), 'utf-8'),
}

const pkgOptions = {
  author: 'Adrián UB',
  githubRepo: 'https://github.com/adrian-ub/ngxi',
  funding: 'https://github.com/sponsors/adrian-ub',
}

export async function generateLibraryIcon(name: string) {
  const spinner = ora(`Generating library icon for ${name}`).start()

  const iconifyJSON = await lookupCollection(name)
  const importPath = `@ngxi/${name}`
  const packageDir = path.join(PACKAGES_DIR, name)

  await x('pnpm', ['create', 'charada@latest', '--template=lib-angular-vite', packageDir])

  updatePackageJson(packageDir, name, importPath, iconifyJSON)
  createReadme(packageDir, name, importPath, iconifyJSON)
  createDirective(packageDir, name)
  createIndex(packageDir, name)

  spinner.succeed(`Library icon for ${name} generated successfully`)
}

function updatePackageJson(packageDir: string, name: string, importPath: string, iconifyJSON: any) {
  const pkgPath = path.join(packageDir, 'package.json')
  const original = JSON.parse(templates.packageJSON)

  const updated = {
    ...original,
    name: importPath,
    version: VERSION,
    description: `Icon set ${iconifyJSON.info?.name} for Angular applications`,
    keywords: ['icon', 'iconify', 'icons', 'ngxi', name, 'angular'],
    author: pkgOptions.author,
    license: iconifyJSON.info?.license.spdx,
    funding: pkgOptions.funding,
    homepage: `${pkgOptions.githubRepo}#readme`,
    repository: {
      type: 'git',
      url: `${pkgOptions.githubRepo}.git`,
      directory: packageDir,
    },
    bugs: `${pkgOptions.githubRepo}/issues`,
    dependencies: {
      ...original.dependencies,
      ngxi: 'workspace:*',
    },
    scripts: {
      build: 'vite build',
      prepublishOnly: 'nr build',
    },
  }

  fs.writeFileSync(pkgPath, `${JSON.stringify(updated, null, 2)}\n`, 'utf-8')
}

export function createReadme(packageDir: string, name: string, importPath: string, iconifyJSON: any) {
  const firstIcon = jc[name as keyof typeof jc]?.samples?.[0] ?? Object.keys(iconifyJSON.icons)[0]
  const { propertyName: propertyIconName } = names(`${iconifyJSON.prefix}-${firstIcon}`)
  const { propertyName, className } = names(`ngxi-${name}`)

  const readme = ejs.render(templates.readme, {
    importPath,
    installationCommmand: `pnpm add ${importPath}`,
    propertyIconName,
    license: iconifyJSON.info?.license.title,
    name: iconifyJSON.info?.name,
    prefix: iconifyJSON.prefix,
    total: iconifyJSON.info?.total,
    author: iconifyJSON.info?.author.name,
    url: iconifyJSON.info?.author.url,
    licenseUrl: iconifyJSON.info?.license.url,
    authorUrl: iconifyJSON.info?.author.url,
    className,
    propertyName,
  })

  fs.writeFileSync(path.join(packageDir, 'README.md'), readme, 'utf-8')
}

function createDirective(packageDir: string, name: string) {
  const { propertyName, className } = names(`ngxi-${name}`)
  const directive = ejs.render(templates.directive, {
    propertyName,
    className,
  })

  const libDir = path.join(packageDir, 'src', 'lib')
  fs.mkdirSync(libDir, { recursive: true })
  fs.writeFileSync(path.join(libDir, `${names(name).fileName}.ts`), directive, 'utf-8')
}

function createIndex(packageDir: string, name: string) {
  const indexContent = `export * from './lib/${names(name).fileName}'\n`
  fs.writeFileSync(path.join(packageDir, 'src', 'index.ts'), indexContent, 'utf-8')
}
