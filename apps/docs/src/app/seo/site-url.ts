/**
 * Canonical site origin used for per-page SEO (canonical links, Open Graph,
 * JSON-LD). Must stay in sync with `SITE_URL` in
 * `tools/generate-docs-manifest/generate.ts`, which emits the sitemap and
 * AI-discovery files against the same origin (default `https://ngxi.adrianub.dev`,
 * overridable there via the `SITE_URL` environment variable).
 */
export const SITE_URL = 'https://ngxi.adrianub.dev';
