import { effect, signal, type Signal } from '@angular/core';

/**
 * Returns a read-only signal that mirrors `source` after `waitMs` of quiet
 * (the trailing edge of the last change). The initial value passes through
 * immediately; every later change cancels the pending timer and restarts it,
 * so rapid input (e.g. typing a search query) only settles once.
 *
 * Must be created in an injection context (it owns an `effect`); the pending
 * timer is cleared when that context is destroyed.
 */
export function debouncedSignal<T>(
  source: Signal<T>,
  waitMs: number,
): Signal<T> {
  const output = signal(source());
  let timer: ReturnType<typeof setTimeout> | undefined;

  effect((onCleanup) => {
    const value = source();
    if (timer !== undefined) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      output.set(value);
    }, waitMs);
    onCleanup(() => {
      if (timer !== undefined) {
        clearTimeout(timer);
        timer = undefined;
      }
    });
  });

  return output.asReadonly();
}
