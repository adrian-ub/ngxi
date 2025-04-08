import { readProjectConfiguration, Tree } from '@nx/devkit';
import path from 'path';
import { rmSync } from 'fs';
import cliProgress from 'cli-progress';
import { IconifyJSON } from '@iconify/types';

export async function deleteOldIconset(tree: Tree, collection: IconifyJSON) {
  const { sourceRoot } = readProjectConfiguration(tree, collection.prefix);
  const iconsDir = path.join(sourceRoot, 'icons');

  const progressBar = new cliProgress.SingleBar(
    {
      format: `Cleaning ${collection.prefix} | {bar} {value}/{total}`,
      barCompleteChar: '█',
      barIncompleteChar: '░',
      hideCursor: true,
    },
    cliProgress.Presets.shades_classic
  );

  progressBar.start(1, 0);

  try {
    rmSync(iconsDir, { recursive: true, force: true });
  } catch (e) { }

  progressBar.increment();
  progressBar.stop();
}
