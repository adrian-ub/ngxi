/**
 * Naming helpers for generated icon components, parametrized per icon set:
 * for `arrow-up-right` in set `tabler` the class is `TablerArrowUpRight` and
 * the selector is `svg[tablerArrowUpRight]`.
 */

export function kebabToPascalCase(name: string): string {
  return name
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('');
}

export function kebabToCamelCase(name: string): string {
  const pascal = kebabToPascalCase(name);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

export function kebabToUpperSnakeCase(name: string): string {
  return name
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.toUpperCase())
    .join('_');
}

/**
 * PascalCase that preserves every kebab segment boundary as an underscore, so
 * it is injective over kebab names: `mp-3-01` → `Mp_3_01`, `mp-301` →
 * `Mp_301`, `mp3-01` → `Mp3_01` are all distinct. Used to disambiguate icon
 * names whose plain PascalCase form collides (e.g. `1-9` vs `19`).
 */
function kebabToPascalCasePreserving(name: string): string {
  return name
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join('_');
}

/**
 * Precomputes the set of icon names whose plain PascalCase form collides with
 * another icon name in the same scope, so `iconComponentName` can resolve them
 * to their injective `_`-preserving form in O(1) per call.
 */
export function iconCollidingNames(
  setName: string,
  allKebabNames: string[],
): Set<string> {
  const byBase = new Map<string, string[]>();
  for (const name of allKebabNames) {
    const base = iconComponentName(setName, name);
    const group = byBase.get(base);
    if (group) {
      group.push(name);
    } else {
      byBase.set(base, [name]);
    }
  }
  const colliding = new Set<string>();
  for (const group of byBase.values()) {
    if (group.length > 1) {
      for (const name of group) {
        colliding.add(name);
      }
    }
  }
  return colliding;
}

/**
 * Resolves the component class name for one icon, disambiguating collisions
 * within the set.
 *
 * Pass the precomputed `collidingNames` (see `iconCollidingNames`) so colliding
 * icons fall back to `kebabToPascalCasePreserving`, which is injective: its
 * result always contains an underscore, so it can never equal a non-colliding
 * plain name (which never contains one), and two colliding names stay
 * distinct.
 */
export function iconComponentName(
  setName: string,
  kebabName: string,
  collidingNames?: Set<string>,
): string {
  if (collidingNames?.has(kebabName)) {
    return `${kebabToPascalCase(setName)}${kebabToPascalCasePreserving(kebabName)}`;
  }
  return `${kebabToPascalCase(setName)}${kebabToPascalCase(kebabName)}`;
}

export function iconComponentSelector(
  setName: string,
  kebabName: string,
  collidingNames?: Set<string>,
): string {
  const className = iconComponentName(setName, kebabName, collidingNames);
  return `svg[${className.charAt(0).toLowerCase()}${className.slice(1)}]`;
}
