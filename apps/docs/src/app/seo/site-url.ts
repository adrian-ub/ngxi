/**
 * Canonical site origin used for per-page SEO (canonical links, Open Graph,
 * JSON-LD). Must stay in sync with `SITE_URL` in
 * `apps/docs/scripts/seo.ts`, which emits the sitemap and AI-discovery files
 * against the same origin (default `https://ngxi.adrianub.dev`, overridable
 * via the `SITE_URL` environment variable).
 */
export const SITE_URL = 'https://ngxi.adrianub.dev';
