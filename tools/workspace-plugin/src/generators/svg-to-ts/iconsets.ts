import { Iconset } from './iconsets.d'

export const iconsets: Iconset[] = [
  {
    internalPackageName: 'lucide',
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
