import type { CustomPlugin } from 'svgo';

export interface IconFile {
  input: string;
  output: string;
  glob: string;
  filter?: (name: string) => boolean;
  prefix?: string;
  suffix?: string;
  svg?: SvgOptions;
  plugins?: CustomPlugin[];
}

export type IconFiles = IconFile[];

export interface Iconset {
  internalPackageName: string;
  files: IconFiles;
}

export interface SvgOptions {
  colorAttr?: 'fill' | 'stroke';
  removeStroke?: boolean;
  removeColor?: boolean;
  removeBackground?: boolean;
  strokeCurrentColor?: boolean;
  fillCurrentColor?: boolean;
}
