import { formatFiles, Tree, readProjectConfiguration, names, generateFiles } from '@nx/devkit';
import * as path from 'path';
import { sync } from 'glob';
import * as cheerio from 'cheerio';

import { iconsets } from './iconsets';
import { IconFile, Iconset } from './iconsets.d';
import { optimizeIcon } from './optimize-icon';

const PATH_CLEANUP_REGEX = /^[./\\]+/;

const ROOT_PATHS = new Set(['/', '.', './', '', undefined, null]);

function deleteIconSet(tree: Tree, iconset: Iconset) {
  const { sourceRoot } = readProjectConfiguration(tree, iconset.internalPackageName);
  tree.write(`${sourceRoot}/index.ts`, '');

  sync(`${sourceRoot}/**/ng-package.json`, { ignore: `${sourceRoot}/ng-package.json` })
    .map(path.dirname)
    .forEach(dir => tree.delete(dir));
}

function collectIconPaths(iconset: Iconset) {
  const iconPathsData = iconset.files.flatMap(fileConfig => {
    const basePath = fileConfig.input;
    return sync(fileConfig.glob, { cwd: basePath }).map(relativePath => {
      const fullPath = path.join(basePath, relativePath);
      return { fullPath, fileConfig, relativePath };
    });
  });

  return iconPathsData;
}

function loadIconset(tree: Tree, iconset: Iconset) {
  const iconPathsData = collectIconPaths(iconset);

  if (iconPathsData.length === 0) {
    throw new Error('No icons found');
  }

  const output: Record<string, { svg: string; newIconDir: string; fileConfig: IconFile; iconName: string }> = {};
  const iconsByOutputDir = new Map();

  iconPathsData.forEach(({ fullPath, fileConfig }) => {
    const iconName = path.basename(fullPath, '.svg');
    const outputDir = fileConfig.output;

    let processedIcons = iconsByOutputDir.get(outputDir);
    if (!processedIcons) {
      processedIcons = new Set();
      iconsByOutputDir.set(outputDir, processedIcons);
    }

    if (processedIcons.has(iconName)) return;
    processedIcons.add(iconName);

    const svg = tree.read(fullPath, 'utf-8')?.toString();
    if (!svg) return;

    const optimizedSvg = optimizeIcon(svg, fileConfig.svg, fileConfig.plugins);
    const relPath = path.relative(fileConfig.input, path.dirname(fullPath));

    output[`${outputDir}:${iconName}`] = {
      svg: optimizedSvg,
      newIconDir: path.join(relPath, iconName),
      fileConfig,
      iconName
    };
  });

  return output;
}

function createIconset(tree: Tree, iconset: Iconset) {
  const icons = loadIconset(tree, iconset);
  const { sourceRoot } = readProjectConfiguration(tree, iconset.internalPackageName);
  const globalIndex = [];

  Object.entries(icons).forEach(([, icon]) => {
    const { iconName, fileConfig, svg, newIconDir } = icon;
    const outputPath = fileConfig.output;
    const isRoot = ROOT_PATHS.has(outputPath);

    const $ = cheerio.load(svg);
    const svgElement = $('svg');
    if (!svgElement) return;

    const svgAttributes = Object.entries(svgElement[0].attribs || {})
      .map(([name, value]) => ({
        originalName: name,
        transformedName: names(name).propertyName,
        value
      }));

    const componentName = names(
      fileConfig.getIconName(iconName)
    );

    const targetDir = path.join(
      sourceRoot,
      isRoot ? '' : outputPath || '',
      newIconDir
    );

    generateFiles(tree, path.join(__dirname, 'files'), targetDir, {
      svgFileName: iconName,
      svgContent: svgElement.html(),
      propertyName: componentName.propertyName,
      name: componentName.name,
      className: componentName.className,
      svgAttributes
    });

    const exportPath = './' + path.normalize(
      isRoot ? newIconDir : path.join(outputPath || '', newIconDir)
    ).replace(PATH_CLEANUP_REGEX, '');

    globalIndex.push(`export * from '${exportPath}';`);
  });

  tree.write(`${sourceRoot}/index.ts`, globalIndex.join('\n'));
}

export async function svgToTsGenerator(tree: Tree) {
  try {
    for (const iconset of iconsets) {
      await iconset.preCreation?.(tree);
      deleteIconSet(tree, iconset);
      createIconset(tree, iconset);
    }
  } finally {
    await formatFiles(tree);
  }
}

export default svgToTsGenerator;
