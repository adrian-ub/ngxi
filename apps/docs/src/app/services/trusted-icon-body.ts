/**
 * A brand for SVG bodies that passed the structural validation gate.
 *
 * This is the ONLY type that `icon-svg` is allowed to render, and the only
 * place a `TrustedIconBody` is created is `icon-set.service`, after the body
 * has been verified to come from a repo-owned `/icons/<set>.json` asset AND
 * to pass the structural SVG-body checks below. The brand is compile-time
 * only: at runtime a trusted body is the plain string it started as.
 */
export type TrustedIconBody = string & {
  readonly __trustedIconBody: unique symbol;
};

/** Elements that must never appear in an icon body. */
const UNSAFE_ELEMENT_PATTERNS = [/<script\b/i, /<foreignObject\b/i];

/**
 * Attributes that must never appear: event handlers (`on*=`), links
 * (`href`/`xlink:href`) and `style` values referencing external resources
 * (`url()`). Plain `style` attributes without `url()` stay allowed — Iconify
 * bodies use them for per-path fills.
 */
const UNSAFE_ATTRIBUTE_PATTERNS = [
  /\son[a-z]+\s*=/i,
  /(?:\s|:)href\s*=/i,
  /\sstyle\s*=\s*(["'])[^"']*\burl\(/i,
];

/**
 * Validates that `body` is a single-layer SVG fragment safe to inject inside
 * an app-owned `<svg>` element.
 *
 * Provenance (the body comes from a repo-owned `icon-set.json`) is the
 * primary guarantee; this structural check is defense-in-depth. Returns the
 * branded body when valid, `null` otherwise.
 */
export function trustIconBody(body: string): TrustedIconBody | null {
  if (body.trim() === '' || !body.trim().startsWith('<')) {
    return null;
  }
  if (/<svg\b|<\/svg\b/i.test(body)) {
    return null;
  }
  if (UNSAFE_ELEMENT_PATTERNS.some((pattern) => pattern.test(body))) {
    return null;
  }
  if (UNSAFE_ATTRIBUTE_PATTERNS.some((pattern) => pattern.test(body))) {
    return null;
  }
  return body as TrustedIconBody;
}
