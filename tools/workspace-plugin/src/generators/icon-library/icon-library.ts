import {
  formatFiles,
  generateFiles,
  names,
  readJson,
  Tree,
  writeJson,
} from '@nx/devkit';

import { libraryGenerator } from '@nx/angular/generators';
import { generatorGenerator } from '@nx/plugin/generators';
import { determineArtifactNameAndDirectoryOptions } from '@nx/devkit/src/generators/artifact-name-and-directory-utils';
import * as path from 'path';

import { IconLibraryGeneratorSchema } from './schema';

async function generateGeneratorIconLibrary(
  tree: Tree,
  options: IconLibraryGeneratorSchema
) {
  const pathGenerator = `tools/workspace-plugin/src/generators/${options.name}/${options.name}`;
  await generatorGenerator(tree, {
    path: pathGenerator,
    unitTestRunner: 'vitest',
  });

  const {
    artifactName: name,
    directory,
    fileName,
  } = await determineArtifactNameAndDirectoryOptions(tree, {
    path: pathGenerator,
    name: options.name,
    allowedFileExtensions: ['ts'],
    fileExtension: 'ts',
  });

  const { className, propertyName } = names(name);

  tree.delete(path.join(directory, 'files'));

  generateFiles(tree, path.join(__dirname, './files/generator'), directory, {
    fileName,
    className,
    propertyName,
    prefix: options.prefix,
    libraryName: options.name,
    iconsSourcePath: options.iconsSourcePath,
    generatorFnName: `${propertyName}Generator`,
    schemaInterfaceName: `${className}GeneratorSchema`,
  });
}

export async function iconLibraryGenerator(
  tree: Tree,
  options: IconLibraryGeneratorSchema
) {
  const { fileName } = names(options.name);
  const libraryRoot = `packages/${fileName}`;
  await libraryGenerator(tree, {
    directory: libraryRoot,
    publishable: true,
    importPath: `@ngxi/${options.name}`,
    skipModule: true,
    simpleName: true,
    flat: true,
    prefix: options.prefix,
    skipTests: true,
  });
  tree.delete(path.join(libraryRoot, 'src/lib'));
  tree.delete(path.join(libraryRoot, 'src/index.ts'));
  tree.write(path.join(libraryRoot, 'index.ts'), '');

  const projectJSON = readJson(tree, path.join(libraryRoot, 'project.json'));
  projectJSON.sourceRoot = projectJSON.sourceRoot.replace('/src', '');
  writeJson(tree, path.join(libraryRoot, 'project.json'), projectJSON);

  const ngPackageJSON = readJson(
    tree,
    path.join(libraryRoot, 'ng-package.json')
  );
  ngPackageJSON.lib.entryFile = ngPackageJSON.lib.entryFile.replace('src/', '');
  writeJson(tree, path.join(libraryRoot, 'ng-package.json'), ngPackageJSON);

  const packageJSON = readJson(tree, path.join(libraryRoot, 'package.json'));
  packageJSON.repository = {
    type: 'git',
    url: 'https://github.com/adrian-ub/ngxi',
    directory: libraryRoot,
  };
  packageJSON.peerDependencies = {
    ...packageJSON.peerDependencies,
    '@angular/core': '^17.0.0 || ^18.0.0 || ^19.0.0',
  };
  packageJSON.publishConfig = {
    access: 'public',
  };
  writeJson(tree, path.join(libraryRoot, 'package.json'), packageJSON);

  generateFiles(tree, path.join(__dirname, './files/library'), libraryRoot, {
    fileName,
  });

  await generateGeneratorIconLibrary(tree, options);
  await formatFiles(tree);
}

export default iconLibraryGenerator;
