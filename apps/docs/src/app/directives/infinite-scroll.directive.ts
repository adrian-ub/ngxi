import {
  AfterViewInit,
  DestroyRef,
  Directive,
  ElementRef,
  HostListener,
  OnDestroy,
  inject,
  input,
  output,
} from '@angular/core';

/**
 * Emits `sentinelVisible` once its host element scrolls into the viewport
 * (with a generous lookahead) so a parent can load the next page of content.
 * Typical use: an infinite-scroll sentinel at the bottom of a list.
 */
@Directive({
  selector: '[appInfiniteScroll]',
  standalone: true,
})
export class InfiniteScroll implements AfterViewInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  /** When true, the sentinel stops firing (e.g. no more pages to load). */
  readonly disabled = input(false);

  /** Root margin on each side, used to preload before the sentinel is visible. */
  readonly rootMargin = input('600px 0px');

  /** Fired when the sentinel scrolls into the viewport and is not disabled. */
  readonly sentinelVisible = output<void>();

  private observer?: IntersectionObserver;

  @HostListener('window:resize')
  protected onResize(): void {
    // Re-evaluate after layout shifts (an expanding grid changes the sentinel).
    this.observer?.disconnect();
    this.observe();
  }

  ngAfterViewInit(): void {
    this.observe();
  }

  private observe(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }
    this.observer?.disconnect();
    const host = this.element.nativeElement;
    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.disabled()) {
          return;
        }
        if (entries.some((entry) => entry.isIntersecting)) {
          this.sentinelVisible.emit();
        }
      },
      { rootMargin: this.rootMargin() },
    );
    this.observer.observe(host);
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
