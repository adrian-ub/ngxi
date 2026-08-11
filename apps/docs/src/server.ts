import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { dirname, resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderIconSvg } from './server/icon-svg';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Render a single icon as a standalone SVG on demand
 * (`/icons/<collection>/<name>.svg`). Per-icon SVG files are no longer
 * emitted by the docs manifest generator; the same `@iconify/utils` logic the
 * generator used is now served here, so the URL shape is unchanged. Non-`.svg`
 * requests (the light `<collection>.index.json` / `<collection>.samples.json`
 * assets) fall through to the static route below.
 */
app.get('/icons/:collection/:name', (req, res, next) => {
  const name = req.params['name'];
  if (!name.endsWith('.svg')) {
    next();
    return;
  }
  const svg = renderIconSvg(
    req.params['collection'],
    name.replace(/\.svg$/, ''),
  );
  if (svg === undefined) {
    res.status(404).send('Not found');
    return;
  }
  res.setHeader('Content-Type', 'image/svg+xml');
  res.setHeader(
    'Cache-Control',
    'public, max-age=3600, stale-while-revalidate=86400',
  );
  res.send(svg);
});

/**
 * Serve freshly generated docs manifest assets (apps/docs/public/icons,
 * emitted by the cacheable `generate-docs-manifest` target before every
 * build) with no-store caching: the files are regenerated whenever the icon
 * references change, so the browser must always fetch the current bytes.
 */
app.get('/icons/:file(.*)', (req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  res.sendFile(
    join(browserDistFolder, 'icons', req.params['file']),
    (error) => {
      if (error) {
        next(error);
      }
    },
  );
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use('/**', (req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
