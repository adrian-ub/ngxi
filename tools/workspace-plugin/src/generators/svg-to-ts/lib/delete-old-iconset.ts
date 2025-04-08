import { IconifyJSON } from '@iconify/types';
import { readProjectConfiguration, Tree } from '@nx/devkit';
import fg from 'fast-glob';
import path from 'path';
import { rmSync } from 'fs';
import cliProgress from 'cli-progress';

export async function deleteOldIconset(tree: Tree, collection: IconifyJSON) {
  const { sourceRoot } = readProjectConfiguration(tree, collection.prefix);

  const files = await fg(`**/ng-package.json`, {
    cwd: sourceRoot,
    ignore: ['ng-package.json'],
    onlyFiles: true,
  });

  const progressBar = new cliProgress.SingleBar(
    {
      format: `Cleaning ${collection.prefix} | {bar} {value}/{total}`,
      barCompleteChar: '█',
      barIncompleteChar: '░',
      hideCursor: true,
    },
    cliProgress.Presets.shades_classic
  );

  progressBar.start(files.length, 0);

  for (const file of files) {
    const dir = path.join(sourceRoot, path.dirname(file));
    rmSync(dir, { recursive: true, force: true });
    progressBar.increment();
  }

  progressBar.stop();
}
