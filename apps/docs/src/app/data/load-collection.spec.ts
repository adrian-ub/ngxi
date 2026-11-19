import type { IconifyJSON } from '@iconify/types';
import { describe, expect, it } from 'vitest';
import { deriveIconEntry } from './load-collection';

const data: IconifyJSON = {
  prefix: 'uix',
  icons: {
    '3d-printer': { body: '<path d="M1 2"/>' },
    airplane: { body: '<path d="M3 4"/>' },
    zoom: { body: '<path d="M5 6"/>' },
  },
};

const split = {
  hasBaseIcons: false,
  entries: [
    { name: 'n3', filter: '3*' },
    { name: 'a', filter: 'a*' },
    { name: 'z', filter: 'z*' },
  ],
};

describe('deriveIconEntry with a prefix-split plan', () => {
  it('imports icons from the matching secondary entry point', () => {
    const entry = deriveIconEntry('uix', 'airplane', data, split);
    expect(entry?.entry).toBe('a');
    expect(entry?.importFrom).toBe('@ngxi/uix/a');
  });

  it('matches digit-prefixed entries as well', () => {
    const entry = deriveIconEntry('uix', '3d-printer', data, split);
    expect(entry?.entry).toBe('n3');
    expect(entry?.importFrom).toBe('@ngxi/uix/n3');
  });

  it('returns a base icon with no entry', () => {
    const baseSplit = {
      hasBaseIcons: true,
      entries: [{ name: 'z', filter: 'z*' }],
    };
    const entry = deriveIconEntry('uix', 'airplane', data, baseSplit);
    expect(entry?.entry).toBeUndefined();
    expect(entry?.importFrom).toBe('@ngxi/uix');
  });
});
