import { Iconset } from './iconsets.d'
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
  }
];
