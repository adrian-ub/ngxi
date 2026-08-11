/**
 * Pure, regex-based helpers that turn a raw Iconify SVG string (as produced by
 * `iconifyIconToSvg`) into the pieces of a self-contained Angular icon
 * component. The Iconify body grammar is regular and values are double-quoted,
 * so plain regex parsing is sufficient.
 *
 * - `extractSvgRootAttributes` reads the presentation-neutral root attributes.
 * - `extractSvgBody` slices out the markup between `<svg ...>` and `</svg>`.
 * - `hoistPresentationAttributes` moves uniform presentation attributes from
 *   the body elements to host inputs (they only control the icon when hoisted).
 * - `prefixSvgTags` qualifies every element tag with the `svg:` namespace.
 * - `hasRenderableElements` tells callers whether a body still renders anything.
 */

export interface SvgRootAttributes {
  width: string | null;
  height: string | null;
  viewBox: string | null;
}

export interface HoistResult {
  body: string;
  hoisted: Record<string, string>;
}

/** Presentation attributes hoisted to host inputs when uniform across the body. */
export const PRESENTATION_ATTRIBUTES = [
  'fill',
  'stroke',
  'stroke-width',
  'stroke-linecap',
  'stroke-linejoin',
];

/** Alternation ordered longest-first so `stroke` never shadows `stroke-width`. */
const PRESENTATION_PATTERN =
  'stroke-width|stroke-linecap|stroke-linejoin|stroke|fill';

const PRESENTATION_TOKEN_RE = new RegExp(
  `\\s(${PRESENTATION_PATTERN})="([^"]*)"`,
  'g',
);

/**
 * Known SVG element tags qualified with the `svg:` namespace prefix.
 *
 * This is the full SVG 1.1 + SVG 2 element set (presentation, container,
 * gradient, filter, animation and text elements). A partial list broke sets
 * with gradients/filters (e.g. vscode-icons: NG8001 'linearGradient' is not
 * a known element), so every standard element is covered.
 */
const SVG_TAGS = [
  // Container / structural
  'svg',
  'g',
  'defs',
  'symbol',
  'use',
  'switch',
  // Shapes
  'circle',
  'ellipse',
  'line',
  'path',
  'polygon',
  'polyline',
  'rect',
  // Gradients
  'linearGradient',
  'radialGradient',
  'stop',
  'pattern',
  // Filters
  'filter',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feDropShadow',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  // Text
  'text',
  'tspan',
  'textPath',
  'font',
  'glyph',
  'missing-glyph',
  // Mask / clip / markers
  'mask',
  'clipPath',
  'marker',
  'view',
  'cursor',
  // Animation
  'animate',
  'animateMotion',
  'animateTransform',
  'set',
  'mpath',
  // Metadata / misc
  'title',
  'desc',
  'metadata',
  'a',
  'image',
  'foreignObject',
  'style',
  'script',
].join('|');

const SVG_TAG_RE = new RegExp(`<(/?)(${SVG_TAGS})\\b`, 'g');

/**
 * Reads the `width`, `height` and `viewBox` attributes from the `<svg ...>`
 * open tag, or `null` when absent.
 */
export function extractSvgRootAttributes(svg: string): SvgRootAttributes {
  const match = /<svg\b([^>]*)>/i.exec(svg);
  const attrs = match?.[1] ?? '';
  const read = (name: string): string | null => {
    const attrMatch = new RegExp(`\\s${name}="([^"]*)"`).exec(attrs);
    return attrMatch ? attrMatch[1] : null;
  };
  return {
    width: read('width'),
    height: read('height'),
    viewBox: read('viewBox'),
  };
}

/**
 * Returns the content between the `<svg ...>` open tag and `</svg>`.
 */
export function extractSvgBody(svg: string): string {
  const open = svg.indexOf('>');
  const close = svg.lastIndexOf('</svg>');
  if (open < 0 || close < open) {
    return '';
  }
  return svg.slice(open + 1, close);
}

/**
 * Strips `<title>...</title>` elements (the host `aria-hidden` input replaces
 * them) and hoists each presentation attribute found in the body:
 *
 * - zero occurrences: no input, attribute left untouched (nothing to hoist);
 * - all occurrences equal: every occurrence stripped, default captured;
 * - differing values (e.g. multi-color sets): no input, attributes left inline.
 */
export function hoistPresentationAttributes(body: string): HoistResult {
  let result = body
    .replace(/<title\b[^>]*\/>/gi, '')
    .replace(/<title\b[^>]*>[\s\S]*?<\/title\s*>/gi, '');

  const occurrences = [...result.matchAll(PRESENTATION_TOKEN_RE)];
  const valuesByName = new Map<string, string[]>();
  for (const [, name, value] of occurrences) {
    const values = valuesByName.get(name);
    if (values) {
      values.push(value);
    } else {
      valuesByName.set(name, [value]);
    }
  }

  const hoisted: Record<string, string> = {};
  for (const name of PRESENTATION_ATTRIBUTES) {
    const values = valuesByName.get(name);
    if (!values || new Set(values).size !== 1) {
      continue;
    }
    hoisted[name] = values[0];
    result = result.replace(new RegExp(`\\s${name}="[^"]*"`, 'g'), '');
  }
  return { body: result, hoisted };
}

/**
 * Qualifies every known element tag (and its closing tag) with the `svg:`
 * namespace. `<g>` nesting is kept as-is with its remaining attributes; it is
 * not flattened.
 */
export function prefixSvgTags(body: string): string {
  return body.replace(SVG_TAG_RE, '<$1svg:$2');
}

/**
 * Whether the body still contains at least one element after hoisting and
 * title removal. Used to skip icons whose hoisted body renders nothing.
 */
export function hasRenderableElements(body: string): boolean {
  // Fresh non-global regex: the shared global `SVG_TAG_RE` is stateful across
  // `.test()` calls via `lastIndex`.
  return new RegExp(`<(?:${SVG_TAGS})\\b`).test(body);
}
