import { libraryGenerator, UnitTestRunner } from '@nx/angular/generators';
import { generateFiles, logger, names, Tree, updateJson, readProjectConfiguration } from "@nx/devkit";
import { IconifyJSON } from '@iconify/types';
import * as path from "path";

function projectExists(tree: Tree, name: string): boolean {
  try {
    readProjectConfiguration(tree, name);
    return true;
  } catch {
    return false;
  }
}

export async function createLibrary(tree: Tree, collection: IconifyJSON) {

  try {

    const { fileName } = names(collection.prefix);

    if (projectExists(tree, fileName)) {
      return;
    }

    const libraryRoot = `packages/${fileName}`;

    await libraryGenerator(tree, {
      name: fileName,
      directory: libraryRoot,
      publishable: true,
      importPath: `@ngxi/${fileName}`,
      skipModule: true,
      simpleName: true,
      skipSelector: true,
      skipFormat: true,
      flat: true,
      prefix: '',
      skipTests: true,
      unitTestRunner: UnitTestRunner.None
    });

    tree.delete(`${libraryRoot}/src/lib`);
    tree.delete(`${libraryRoot}/src/index.ts`);
    tree.write(`${libraryRoot}/index.ts`, '');

    const gitHubRepositoryUrl = 'https://github.com/adrian-ub/ngxi';

    updateJson(tree, `${libraryRoot}/package.json`, (json) => {
      json = {
        ...json,
        license: collection.info.license.spdx,
        peerDependencies: {
          '@angular/core': '^17.0.0 || ^18.0.0 || ^19.0.0',
        },
        publishConfig: {
          access: 'public',
        },
        repository: {
          type: 'git',
          url: gitHubRepositoryUrl,
          directory: libraryRoot,
        },
        author: 'Adrián UB',
        funding: 'https://github.com/sponsors/adrian-ub',
        homepage: `${gitHubRepositoryUrl}/tree/main/${libraryRoot}#readme`,
        bugs: `${gitHubRepositoryUrl}/issues`,
      }

      return json;
    });

    updateJson(tree, `${libraryRoot}/project.json`, (json) => {
      json.sourceRoot = libraryRoot;
      return json;
    });

    updateJson(tree, `${libraryRoot}/ng-package.json`, (json) => {
      json.lib.entryFile = 'index.ts';
      return json;
    });

    updateJson(tree, `tsconfig.base.json`, (json) => {
      json.compilerOptions.paths = {
        ...json.compilerOptions.paths,
        [`@ngxi/${fileName}`]: [`${libraryRoot}/index.ts`],
      };
      return json;
    });

    generateFiles(tree, path.join(__dirname, '..', 'files', 'library'), libraryRoot, {
      fileName,
      LICENSE: collection.info.license.title,
    });

  } catch (error) {
    logger.error(error);
  }
}
