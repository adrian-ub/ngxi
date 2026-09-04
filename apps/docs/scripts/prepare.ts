import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { emitSeoFiles } from './seo';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const out = path.resolve(__dirname, '../public');

async function readJSON(file: string) {
  return JSON.parse(await fsp.readFile(file, 'utf-8'));
}

async function writeJSON(file: string, data: any) {
  await fsp.writeFile(file, JSON.stringify(data));
}

function ObjectPick(source: Record<string, any>, keys: string[]) {
  const obj: Record<string, any> = {};
  for (const key of keys) obj[key] = source[key];
  return obj;
}

function humanFileSize(size: number) {
  const i = Math.floor(Math.log(size) / Math.log(1024));
  const v = size / 1024 ** i;
  return `${v.toFixed(2)} ${['B', 'kB', 'MB', 'GB', 'TB'][i]}`;
}

/** Icon bodies per chunk for the collection grid's progressive loading. */
const CHUNK_SIZE = 500;

async function prepareJSON() {
  const dir = path.resolve(__dirname, '../../../node_modules/@iconify/json');
  const packagesDir = path.resolve(__dirname, '../../../packages');
  const collectionsDir = path.resolve(__dirname, '../public/collections');

  const raw = await readJSON(path.join(dir, 'collections.json'));
  await fsp.mkdir(collectionsDir, { recursive: true });

  // Only document iconsets that are actually scaffolded as an @ngxi package,
  // so the docs never advertise an icon library we don't ship. A collection
  // present in @iconify/json but missing a packages/<id> folder is skipped
  // with a warning (scaffold it with `nx g icon-library <id>`).
  const packaged = new Set(
    (await fsp.readdir(packagesDir, { withFileTypes: true }))
      .filter((e) => e.isDirectory())
      .map((e) => e.name),
  );
  const all = Object.entries(raw).map(([id, v]) => ({
    ...(v as any),
    id,
    category: (v as any).hidden
      ? 'Deprecated / Unavailable'
      : (v as any).category,
  }));
  const skipped = all.filter((c) => !packaged.has(c.id));
  if (skipped.length > 0) {
    console.warn(
      `[prepare] Skipping ${skipped.length} Iconify collection(s) without a ` +
        `packages/<id> package: ${skipped.map((c) => c.id).sort().join(', ')}`,
    );
  }
  const collections = all.filter((c) => packaged.has(c.id));

  const collectionsMeta = [];

  for (const info of collections) {
    const setData = await readJSON(path.join(dir, 'json', `${info.id}.json`));

    const icons = Object.keys(setData.icons);
    const categories = setData.categories;
    const meta = { ...info, icons, categories };
    const metaFilePath = path.join(collectionsDir, `${info.id}-meta.json`);

    await writeJSON(metaFilePath, meta);

    // Emit the full IconifyJSON payload gzip-compressed so the file stays far
    // below the 25 MiB per-file limit on static hosts (Cloudflare Pages).
    // The docs client decompresses it on fetch.
    const rawFilePath = path.join(collectionsDir, `${info.id}.json.gz`);
    await fsp.writeFile(
      rawFilePath,
      gzipSync(JSON.stringify(setData), { level: 9 }),
    );

    // Emit paginated gzip chunks of icon bodies (no aliases/metadata) so the
    // grid can render the first viewport almost instantly — a ~40KB chunk
    // instead of a multi-MB full bundle — and pull more on demand. Names are
    // indexed in the same order as `icons` in the meta file, so the client can
    // request exactly the chunk covering its visible range.
    for (let start = 0; start < icons.length; start += CHUNK_SIZE) {
      const slice = icons.slice(start, start + CHUNK_SIZE);
      const chunkIcons: Record<string, unknown> = {};
      for (const name of slice) {
        const ic = setData.icons[name];
        chunkIcons[name] = { body: ic.body, width: ic.width, height: ic.height };
      }
      const chunk = {
        prefix: setData.prefix,
        width: setData.width,
        height: setData.height,
        icons: chunkIcons,
      };
      const chunkFile = path.join(
        collectionsDir,
        `${info.id}.icons.${start / CHUNK_SIZE}.json.gz`,
      );
      await fsp.writeFile(
        chunkFile,
        gzipSync(JSON.stringify(chunk), { level: 9 }),
      );
    }

    collectionsMeta.push(meta);

    info.sampleIcons = icons.slice(0, 6);
    if (info.id === 'logos') {
      info.sampleIcons = [
        'angular',
        'vitejs',
        'vitest',
        'analog',
        'github-icon',
        'eslint',
      ];
    }

    info.prepacked = {
      prefix: setData.prefix,
      width: setData.width,
      height: setData.height,
      icons: ObjectPick(setData.icons, info.sampleIcons),
    };
    info.size = humanFileSize(fs.statSync(rawFilePath).size);
  }

  await writeJSON(path.join(out, 'collections-meta.json'), collectionsMeta);
  const infoOut = path.resolve(__dirname, '../src/app/data');
  await writeJSON(path.join(infoOut, 'collections-info.json'), collections);

  // Generate SEO files (they read the per-collection meta JSONs, not a manifest)
  const seoResult = emitSeoFiles(process.cwd());
  console.log(
    `SEO: ${seoResult.written} written, ${seoResult.unchanged} unchanged`,
  );
}

prepareJSON();
