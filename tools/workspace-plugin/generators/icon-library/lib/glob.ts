/**
 * Converts a simple `*` glob (e.g. `*-20-filled`) into an anchored RegExp.
 */
export function globToRegExp(glob: string): RegExp {
  const pattern = glob
    .split('*')
    .map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('.*');
  return new RegExp(`^${pattern}$`);
}
