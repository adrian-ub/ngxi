import { generateFiles, names, Tree, updateJson } from "@nx/devkit";
import { libraryGenerator, UnitTestRunner } from '@nx/angular/generators';
import * as path from 'node:path';

import { IconLibraryGeneratorSchema } from "../schema";


export async function generateIconLibrary(tree: Tree, schema: IconLibraryGeneratorSchema) {
  const { fileName } = names(schema.name);
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
    unitTestRunner: UnitTestRunner.None,
    sourceDir: libraryRoot,
  });


  tree.delete(`${libraryRoot}/src/lib`);
  tree.delete(`${libraryRoot}/src/index.ts`);
  tree.write(`${libraryRoot}/index.ts`, '');

  const gitHubRepositoryUrl = 'https://github.com/adrian-ub/ngxi';
  updateJson(tree, `${libraryRoot}/package.json`, (json) => {
    json = {
      ...json,
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

  generateFiles(tree, path.join(__dirname, '..', 'files', 'library'), libraryRoot, {
    fileName,
  });
}
