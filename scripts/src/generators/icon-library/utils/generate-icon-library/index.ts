import type { Tree } from '@nx/devkit'
import type { PackageJson } from 'nx/src/utils/package-json'
import type { IconLibraryGeneratorSchema } from '../../schema'

import * as path from 'node:path'

import { lookupCollection, lookupCollections } from '@iconify/json'
import { libraryGenerator, librarySecondaryEntryPointGenerator, UnitTestRunner } from '@nx/angular/generators'
import { generateFiles, names, readJson, updateJson } from '@nx/devkit'

export async function generateIconLibrary(tree: Tree, options: IconLibraryGeneratorSchema) {
  const iconifyJSON = await lookupCollection(options.name)

  if (!iconifyJSON) {
    throw new Error(`Collection ${options.name} not found in iconify collections`)
  }

  const jc = await lookupCollections()

  const projectRoot = `packages/${options.name}`
  const importPath = `@ngxi/${options.name}`

  await libraryGenerator(tree, {
    name: options.name,
    publishable: true,
    commonModule: false,
    directory: projectRoot,
    importPath,
    prefix: iconifyJSON.prefix,
    skipTests: true,
    unitTestRunner: UnitTestRunner.None,
    linter: 'none',
    flat: true,
    strict: true,
    standalone: true,
    simpleName: true,
    skipFormat: true,
    inlineTemplate: true,
    inlineStyle: true,
  })

  tree.delete(`${projectRoot}/src/lib/${options.name}.component.ts`)
  tree.write(`${projectRoot}/src/index.ts`, `// Workaround for: https://github.com/microsoft/rushstack/issues/2806.
// This is a private export that can be removed at any time.
export const ɵɵtsModuleIndicatorApiExtractorWorkaround = true
`)

  const { version } = readJson<PackageJson>(tree, 'package.json')

  const optionsPkg = {
    author: 'Adrián UB',
    githubRepo: 'https://github.com/adrian-ub/ngxi',
    funding: 'https://github.com/sponsors/adrian-ub',
  }

  updateJson(tree, `${projectRoot}/package.json`, (json) => {
    delete json.peerDependencies
    json = {
      ...json,
      version,
      author: optionsPkg.author,
      license: iconifyJSON.info?.license.spdx,
      funding: optionsPkg.funding,
      homepage: `${optionsPkg.githubRepo}/tree/main/${projectRoot}#readme`,
      repository: {
        type: 'git',
        url: optionsPkg.githubRepo,
        directory: `${projectRoot}`,
      },
      bugs: `${optionsPkg.githubRepo}/issues`,
      sideEffects: false,
      publishConfig: {
        directory: 'dist',
      },
    }
    return json
  })

  updateJson(tree, `${projectRoot}/ng-package.json`, (json) => {
    json.dest = 'dist'
    return json
  })

  const firstIcon = jc[options.name as keyof typeof jc]?.samples?.[0] ?? Object.keys(iconifyJSON.icons)[0]
  const { className, propertyName } = names(`${iconifyJSON.prefix}-${firstIcon}-icon`)

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    importPath,
    installationCommmand: `npm install ${importPath}`,
    className,
    propertyName,
    license: iconifyJSON.info?.license.title,
    name: iconifyJSON.info?.name,
    prefix: iconifyJSON.prefix,
    total: iconifyJSON.info?.total,
    author: iconifyJSON.info?.author.name,
    url: iconifyJSON.info?.author.url,
    licenseUrl: iconifyJSON.info?.license.url,
    authorUrl: iconifyJSON.info?.author.url,
  })

  updateJson(tree, `${projectRoot}/project.json`, (json) => {
    json.targets.build.executor = '@nx/angular:ng-packagr-lite'
    return json
  })

  const secondEntryPoints = Object.keys(iconifyJSON.suffixes || {}).filter(Boolean)

  for (const secondEntryPoint of secondEntryPoints) {
    await librarySecondaryEntryPointGenerator(tree, {
      library: options.name,
      name: names(secondEntryPoint).fileName,
      skipFormat: true,
      skipModule: true,
    })
  }
}
