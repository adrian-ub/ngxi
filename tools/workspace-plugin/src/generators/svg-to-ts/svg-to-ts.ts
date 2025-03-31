import { formatFiles, Tree, readProjectConfiguration, logger, names, generateFiles } from '@nx/devkit';
import * as path from 'path';
import { sync } from 'glob';
import * as cheerio from 'cheerio';

import { iconsets } from './iconsets';
import { IconFile, Iconset } from './iconsets.d';
import { optimizeIcon } from './optimize-icon';

function deleteIconSet(tree: Tree, iconset: Iconset) {
  const iconConfig = readProjectConfiguration(tree, iconset.internalPackageName);
  const iconSourceRoot = iconConfig.sourceRoot;

  const mainNgPackageJson = `${iconSourceRoot}/ng-package.json`;
  const subNgPackageJsonFiles = sync(`${iconSourceRoot}/**/ng-package.json`, {
    ignore: mainNgPackageJson
  });

  for (const file of subNgPackageJsonFiles) {
    tree.delete(path.dirname(file));
  }

  tree.write(`${iconSourceRoot}/index.ts`, '');
}

function loadIconset(tree: Tree, iconset: Iconset) {
  const allIconPaths: string[] = [];
  const fileConfigs = iconset.files;

  const iconPathToConfigMap = new Map<string, IconFile>();

  for (const fileConfig of fileConfigs) {
    const relativeIconPaths = sync(fileConfig.glob, { cwd: fileConfig.input });

    const iconPaths = relativeIconPaths.map(relativePath => {
      const fullPath = path.join(fileConfig.input, relativePath)

      iconPathToConfigMap.set(fullPath, fileConfig);

      return fullPath;
    });

    allIconPaths.push(...iconPaths);
  }

  if (allIconPaths.length === 0) {
    throw new Error('No icons found for iconset: ' + JSON.stringify(iconset.files));
  }

  logger.info(`Found ${allIconPaths.length} icons for iconset: ${iconset.internalPackageName}`);

  const output: Record<string, {
    svg: string;
    newIconDir: string;
    fileConfig: IconFile;
  }> = {};

  for (const iconPath of allIconPaths) {
    const iconName = path.basename(iconPath, '.svg');
    let svg = tree.read(iconPath, 'utf-8').toString();
    svg = optimizeIcon(svg, iconset.svg, iconset.plugins);

    const fileConfig = iconPathToConfigMap.get(iconPath);
    if (!fileConfig) {
      logger.warn(`Could not find matching file configuration for icon: ${iconPath}`);
      continue;
    }

    const relativePath = path.relative(fileConfig.input, path.dirname(iconPath));
    const newIconDir = path.join(relativePath, path.basename(iconPath, '.svg'));

    output[iconName] = {
      svg,
      newIconDir,
      fileConfig
    };
  }

  return output;
}

function createIconset(tree: Tree, iconset: Iconset) {
  const icons = loadIconset(tree, iconset);
  const globalIndex: string[] = [];
  const iconPackageConfig = readProjectConfiguration(tree, iconset.internalPackageName);
  const iconPackageSourceRoot = iconPackageConfig.sourceRoot;
  const indexPackagePath = path.join(iconPackageSourceRoot, 'index.ts');

  for (const iconName in icons) {
    const icon = icons[iconName];
    const outputPath = icon.fileConfig.output;

    const $ = cheerio.load(icon.svg);
    const svgElement = $('svg');
    if (!svgElement) {
      throw new Error(`No SVG element found in icon: ${iconName}`);
    }
    const svgAttributes = Object.entries(svgElement[0].attribs || {}).map(([name, value]) => {
      const transformedName = names(name).propertyName;
      return { originalName: name, transformedName, value };
    });

    let insideSvgContent = svgElement.html();
    insideSvgContent = insideSvgContent.replace(
      /<(\/?)(circle|rect|path|line|polygon|polyline|ellipse|text|mask|g|clipPath|defs|stop|use|marker|title)([^>]*)>/gi,
      (match, closing, tagName, attributes) => {
        return `<${closing}svg:${tagName}${attributes}>`;
      }
    );

    const { propertyName, name, className } = names(`${iconset.prefix ? iconset.prefix + '-' : ''}${iconName}${iconset.suffix ? '-' + iconset.suffix : ''}`);

    const targetDir = path.join(iconPackageSourceRoot, outputPath, icon.newIconDir);

    generateFiles(
      tree,
      path.join(__dirname, 'files'),
      targetDir,
      {
        svgFileName: iconName,
        svgContent: insideSvgContent,
        propertyName,
        name,
        className,
        svgAttributes
      }
    );

    const relativePath = path.normalize(path.join(outputPath || '', icon.newIconDir, iconName));
    const exportPath = './' + relativePath.replace(/^[./\\]+/, '');

    globalIndex.push(`export * from '${exportPath}';`);
  }

  tree.write(indexPackagePath, globalIndex.join('\n'));
}

export async function svgToTsGenerator(tree: Tree) {
  for (const iconset of iconsets) {
    deleteIconSet(tree, iconset);
    createIconset(tree, iconset);
  }

  await formatFiles(tree);
}

export default svgToTsGenerator;
