import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { Theme } from './theme';

describe('Theme', () => {
  afterEach(() => {
    TestBed.resetTestingModule();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
    document.documentElement.classList.remove('dark');
    localStorage.clear();
  });

  function injectService(): Theme {
    const service = TestBed.inject(Theme);
    TestBed.flushEffects();
    return service;
  }

  it('defaults to dark mode when the DOM already has the dark class', () => {
    document.documentElement.classList.add('dark');
    const service = injectService();
    expect(service.isDarkMode()).toBe(true);
  });

  it('toggles the theme and flips the html class', () => {
    document.documentElement.classList.add('dark');
    const service = injectService();

    service.toggle();
    TestBed.flushEffects();

    expect(service.isDarkMode()).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('persists the theme to localStorage on toggle', () => {
    document.documentElement.classList.add('dark');
    const service = injectService();

    service.toggle();
    TestBed.flushEffects();

    expect(localStorage.getItem('ngxi-theme')).toBe('light');
  });

  it('adopts a mismatched DOM class on first run without clobbering it', () => {
    const service = injectService();

    expect(service.isDarkMode()).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('ignores localStorage write failures', () => {
    document.documentElement.classList.add('dark');
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    const service = injectService();

    expect(() => {
      service.toggle();
      TestBed.flushEffects();
    }).not.toThrow();
    expect(service.isDarkMode()).toBe(false);
  });

  it('exits early when document is undefined', () => {
    vi.stubGlobal('document', undefined);
    const service = TestBed.inject(Theme);
    TestBed.flushEffects();
    expect(service.isDarkMode()).toBe(true);
  });
});
