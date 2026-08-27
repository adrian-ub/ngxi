import fs from 'node:fs';
import fsp from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { emitSeoFiles, type SetMeta, type DocsManifest } from './seo';

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

async function prepareJSON() {
  const dir = path.resolve(__dirname, '../../../node_modules/@iconify/json');
  const collectionsDir = path.resolve(__dirname, '../public/collections');
  const iconsDir = path.resolve(__dirname, '../public/icons');

  const raw = await readJSON(path.join(dir, 'collections.json'));
  await fsp.mkdir(collectionsDir, { recursive: true });
  await fsp.mkdir(iconsDir, { recursive: true });

  const collections = Object.entries(raw).map(([id, v]) => ({
    ...(v as any),
    id,
    category: (v as any).hidden
      ? 'Deprecated / Unavailable'
      : (v as any).category,
  }));

  const collectionsMeta = [];
  const manifestSets: SetMeta[] = [];

  for (const info of collections) {
    const setData = await readJSON(path.join(dir, 'json', `${info.id}.json`));

    const icons = Object.keys(setData.icons);
    const categories = setData.categories;
    const meta = { ...info, icons, categories };
    const rawFilePath = path.join(collectionsDir, `${info.id}.json`);
    const metaFilePath = path.join(collectionsDir, `${info.id}-meta.json`);

    await writeJSON(rawFilePath, setData);
    await writeJSON(metaFilePath, meta);

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

    // Build manifest entry for SEO
    const iconCount = icons.length;
    const aliasCount = setData.aliases ? Object.keys(setData.aliases).length : 0;
    const info_ = setData.info;
    const setCategories = setData.categories
      ? Object.keys(setData.categories).sort()
      : info_?.category
        ? [info_.category]
        : [];

    manifestSets.push({
      collection: info.id,
      name: info_?.name ?? info.id,
      iconCount,
      aliasCount,
      license: info_?.license?.title ?? 'Unknown',
      author: info_?.author?.name ?? 'Unknown',
      ...(info_?.website ? { website: info_.website } : {}),
      categories: setCategories,
    });
  }

  await writeJSON(path.join(out, 'collections-meta.json'), collectionsMeta);
  const infoOut = path.resolve(__dirname, '../src/app/data');
  await writeJSON(path.join(infoOut, 'collections-info.json'), collections);

  // Write manifest.json for SEO files
  const manifest: DocsManifest = {
    sets: manifestSets.sort((a, b) => a.collection.localeCompare(b.collection)),
  };
  await writeJSON(path.join(iconsDir, 'manifest.json'), manifest);
  console.log(`Manifest: ${manifest.sets.length} sets`);

  // Generate SEO files
  const seoResult = emitSeoFiles(process.cwd());
  console.log(
    `SEO: ${seoResult.written} written, ${seoResult.unchanged} unchanged`,
  );
}

prepareJSON();
