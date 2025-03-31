import { generateFiles, logger, names, Tree } from "@nx/devkit";
import * as fs from 'fs';
import * as path from "path";
import * as cheerio from 'cheerio';

export interface GenerateIconsComponent {
  iconLibraryName: string;
  iconsSourcePath: string;
  iconPrefix: string;
}

const globalIndex: string[] = [];

export async function generateIcons(tree: Tree, options: GenerateIconsComponent) {
  removeOldIcons(options);
  generateIcon(tree, options, options.iconsSourcePath);
  const indexPath = path.join('libs', options.iconLibraryName, 'index.ts');
  const indexContent = globalIndex.join('\n');
  tree.write(indexPath, indexContent);
}

function generateIcon(tree: Tree, options: GenerateIconsComponent, parentDir: string) {
  tree.children(parentDir).forEach((dir) => {
    const dirPath = path.join(parentDir, dir);
    const stat = fs.statSync(dirPath);

    if (stat.isDirectory()) {
      generateIcon(tree, options, dirPath);
      return;
    }

    if (!dir.endsWith('.svg')) {
      return;
    }

    const iconName = path.basename(dirPath, '.svg');
    const svgContent = fs.readFileSync(dirPath, 'utf-8').toString();

    const $ = cheerio.load(svgContent);
    const svgElement = $('svg');
    const svgAttributes = Object.entries(svgElement[0].attribs).map(([name, value]) => {
      const transformedName = names(name).propertyName;
      return { originalName: name, transformedName, value };
    }).filter(attr => attr.originalName !== 'role');

    const svgContentWithoutAttributes = getSvgContenInside(svgContent);
    const newIconDir = path.relative(options.iconsSourcePath, path.join(path.dirname(dirPath), iconName));

    const { className, name, propertyName } = names(options.iconPrefix + '-' + iconName)

    generateFiles(tree, path.join(__dirname, './files'), path.join('libs', options.iconLibraryName, newIconDir), {
      svgFileName: iconName,
      iconDir: newIconDir,
      svgContent: svgContentWithoutAttributes.toString(),
      className,
      name,
      propertyName,
      svgAttributes
    });

    globalIndex.push(`export * from './${newIconDir}/${iconName}';`);
  });
}

function removeOldIcons(options: GenerateIconsComponent) {
  const pathLibrary = path.join('libs', options.iconLibraryName);
  if (!fs.existsSync(pathLibrary)) {
    logger.info(`Path ${pathLibrary} does not exist. Skipping removal of old icons.`);
    return;
  }

  const rootItems = fs.readdirSync(pathLibrary);
  for (const item of rootItems) {
    const itemPath = path.join(pathLibrary, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      searchAndRemoveIconDirs(itemPath);
    }
  }
}

function searchAndRemoveIconDirs(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  const items = fs.readdirSync(dirPath);

  if (items.includes('ng-package.json')) {
    logger.info(`Removing icon directory: ${dirPath}`);
    fs.rmSync(dirPath, { recursive: true, force: true });
    return;
  }

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      searchAndRemoveIconDirs(itemPath);
    }
  }
}


function getSvgContenInside(svgContentFile: string) {
  const regex = /<svg[^>]*>([\s\S]*)<\/svg>/;
  const matches = regex.exec(svgContentFile) ?? [];
  let svgContent = matches.length > 1 ? matches[1] : '';

  const prefix = 'svg:';

  svgContent = svgContent.replace(
    /<(\/?)(circle|rect|path|line|polygon|polyline|ellipse|text|mask|g|clipPath|defs|stop|use|marker|title)([^>]*)>/gi,
    (match, closing, tagName, attributes) => {
      return `<${closing}${prefix}${tagName}${attributes}>`;
    },
  );

  return svgContent;
}
