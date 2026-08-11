/**
 * Builds the SVG string for a single Iconify icon without depending on the
 * ESM-only `@iconify/tools` package.
 *
 * Nx loads local `.ts` generators by transpiling them to CJS, which rewrites
 * `await import('@iconify/tools')` into `require('@iconify/tools')`. That fails
 * with `ERR_PACKAGE_PATH_NOT_EXPORTED` because the package ships an ESM-only
 * exports map (only the `"import"` condition, no `default`/`require`). This is
 * a faithful, pure equivalent of `IconSet.toString(name)` for the data returned
 * by `lookupCollection`.
 */

import type { IconifyJSON } from '@iconify/types';

export function iconifyIconToSvg(set: IconifyJSON, name: string): string {
  const icon = set.icons[name];
  if (!icon) {
    throw new Error(`Icon "${name}" not found in icon set`);
  }
  const width = icon.width ?? set.width ?? 24;
  const height = icon.height ?? set.height ?? 24;
  // `viewBox` is not part of `@iconify/types`; preserved for compatibility with
  // callers that pass a pre-computed viewBox.
  const iconViewBox = (icon as { viewBox?: [number, number, number, number] })
    .viewBox;
  const viewBox = iconViewBox?.join(' ') ?? `0 0 ${width} ${height}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="${viewBox}">${icon.body}</svg>`;
}
