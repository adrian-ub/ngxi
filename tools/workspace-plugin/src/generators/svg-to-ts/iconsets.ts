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
        getIconName: (name) =>  `lucide-${name}`,
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
        getIconName: (name) => `si-${name}`,
        svg: {
          colorAttr: 'fill',
        },
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
        getIconName: (name) => `hero-${name}`,
      },
      {
        input: 'node_modules/heroicons/24/solid',
        output: 'solid',
        glob: '**/*.svg',
        getIconName: (name) => {
          return `hero-${name}-solid`;
        },
      },
      {
        input: 'node_modules/heroicons/20/solid',
        output: 'mini',
        glob: '**/*.svg',
        getIconName: (name) =>  `hero-${name}-mini`,
      },
      {
        input: 'node_modules/heroicons/16/solid',
        output: 'micro',
        glob: '**/*.svg',
        getIconName: (name) => `hero-${name}-micro`,
      },
    ],
  },
];
