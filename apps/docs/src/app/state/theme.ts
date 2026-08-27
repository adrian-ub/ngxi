import { Service, effect, signal } from '@angular/core';

/**
 * Light/dark theme state with DOM + localStorage side effects. The effect
 * adopts the class state applied by the bootstrap script on first run (so a
 * stored preference is never clobbered), then keeps the `html.dark` class and
 * `ngxi-theme` localStorage key in sync with the signal.
 */
@Service()
export class Theme {
  readonly isDarkMode = signal(true);
  private themeAdopted = false;

  toggle(): void {
    this.isDarkMode.update((dark) => !dark);
  }

  private readonly themeEffect = effect(() => {
    if (typeof document === 'undefined') return;
    const dark = this.isDarkMode();
    if (!this.themeAdopted) {
      this.themeAdopted = true;
      const applied = document.documentElement.classList.contains('dark');
      if (dark !== applied) {
        this.isDarkMode.set(applied);
        return;
      }
    }
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem('ngxi-theme', dark ? 'dark' : 'light');
    } catch {
      // ignore storage failures (private mode / disabled storage)
    }
  });
}
