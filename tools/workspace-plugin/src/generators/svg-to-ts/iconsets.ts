import { Iconset } from './iconsets.d';
import { updatePkgToLatestVersion } from './lib/update-pkg-to-latest-version';

export const iconsets: Iconset[] = [
  {
    internalPackageName: 'lucide',
    preCreation: async () => {
      const pkgName = 'lucide-static';
      await updatePkgToLatestVersion(pkgName);
    },
    files: [
      {
        input: 'node_modules/lucide-static/icons',
        output: '/',
        glob: '*.svg',
        prefix: 'lucide',
      },
    ],
  },
  {
    internalPackageName: 'simple-icons',
    preCreation: async () => {
      const pkgName = 'simple-icons';
      await updatePkgToLatestVersion(pkgName);
    },
    files: [
      {
        input: 'node_modules/simple-icons/icons',
        output: '.',
        glob: '*.svg',
        prefix: 'si',
      },
    ],
  },
  {
    internalPackageName: 'heroicons',
    preCreation: async () => {
      const pkgName = 'heroicons';
      await updatePkgToLatestVersion(pkgName);
    },
    files: [
      {
        input: 'node_modules/heroicons/24/outline',
        output: '/',
        glob: '**/*.svg',
        prefix: 'hero',
        suffix: '',
      },
      {
        input: 'node_modules/heroicons/24/solid',
        output: 'solid',
        glob: '**/*.svg',
        prefix: 'hero',
        suffix: 'solid',
      },
      {
        input: 'node_modules/heroicons/20/solid',
        output: 'mini',
        glob: '**/*.svg',
        prefix: 'hero',
        suffix: 'mini',
      },
      {
        input: 'node_modules/heroicons/16/solid',
        output: 'micro',
        glob: '**/*.svg',
        prefix: 'hero',
        suffix: 'micro',
      },
    ],
  },
];
