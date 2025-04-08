import { IconifyJSON } from '@iconify/types';
import { names, readProjectConfiguration, Tree } from '@nx/devkit';
import { loadNodeIcon } from '@iconify/utils/lib/loader/node-loader';
import * as cheerio from 'cheerio';
import path from 'path';
import { CustomPlugin, optimize } from 'svgo';
import pLimit from 'p-limit';
import { readFileSync } from 'fs';
import ejs from 'ejs';
import cliProgress from 'cli-progress';
import { writeFileSync, mkdirSync } from 'fs';

const templateCache = {
  directive: readFileSync(
    path.join(__dirname, '..', 'files', 'second-entry', '__svgFileName__.ts.template'),
    'utf-8'
  ),
  index: readFileSync(
    path.join(__dirname, '..', 'files', 'second-entry', 'index.ts.template'),
    'utf-8'
  ),
  package: readFileSync(
    path.join(__dirname, '..', 'files', 'second-entry', 'ng-package.json.template'),
    'utf-8'
  ),
};

async function loadIconset(iconset: IconifyJSON) {
  const result: Record<string, string> = {};
  const limit = pLimit(10);

  const tasks = Object.keys(iconset.icons).map(iconName =>
    limit(async () => {
      const svg = await loadNodeIcon(iconset.prefix, iconName);
      const optimized = optimize(svg, {
        plugins: [
          {
            name: 'namespaceSvgElements',
            type: 'visitor',
            description: 'add prefix',
            params: {},
            fn: () => ({
              element: {
                enter: (node) => {
                  if (node.name !== 'svg') {
                    node.name = `svg:${node.name}`;
                  }
                }
              }
            }),
          } as CustomPlugin,
        ],
        js2svg: { useShortTags: false },
      }).data;
      result[iconName] = optimized;
    })
  );

  await Promise.all(tasks);
  return result;
}

export async function createIconset(tree: Tree, iconset: IconifyJSON) {
  const icons = await loadIconset(iconset);
  const { sourceRoot } = readProjectConfiguration(tree, iconset.prefix);
  const iconsDir = path.join(sourceRoot, 'icons');
  mkdirSync(iconsDir, { recursive: true });

  const globalIndex: string[] = [];

  const iconEntries = Object.entries(icons);
  const progressBar = new cliProgress.SingleBar(
    {
      format: `Generating ${iconset.prefix} | {bar} {value}/{total} icons`,
      barCompleteChar: '█',
      barIncompleteChar: '░',
      hideCursor: true,
    },
    cliProgress.Presets.shades_classic
  );
  progressBar.start(iconEntries.length, 0);

  for (let i = 0; i < iconEntries.length; i++) {
    const [iconName, svg] = iconEntries[i];
    const iconNames = names(`${iconset.prefix}-${iconName}`);
    const $ = cheerio.load(svg);
    const svgElement = $('svg');
    if (!svgElement) continue;

    const svgAttributes = Object.entries(svgElement[0].attribs || {}).map(
      ([name, value]) => ({
        originalName: name,
        transformedName: names(name).propertyName,
        value,
      })
    );

    const substitutions = {
      svgFileName: iconName,
      svgContent: svgElement.html(),
      propertyName: iconNames.propertyName,
      name: iconNames.name,
      className: iconNames.className,
      svgAttributes,
    };

    const fileName = `${iconName}.ts`;
    const filePath = path.join(iconsDir, fileName);
    const exportPath = `./icons/${iconName}`;

    writeFileSync(filePath, ejs.render(templateCache.directive, substitutions));
    globalIndex.push(`export * from '${exportPath}';`);

    progressBar.increment();
  }

  progressBar.stop();

  tree.write(`${sourceRoot}/index.ts`, globalIndex.join('\n'));
}
