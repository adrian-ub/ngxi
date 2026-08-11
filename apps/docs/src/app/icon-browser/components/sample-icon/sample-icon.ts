import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { type TrustedIconBody } from '../../../services/trusted-icon-body';

/**
 * Renders ONE sample body from the per-set showcase asset
 * (`<collection>.samples.json`). Bodies reach this component only through
 * `IconSetService.samples()`, which already ran every body through the trust
 * gate (`trustIconBody`) and rejects the whole payload on any invalid body —
 * so this component only ever injects a `TrustedIconBody`.
 */
@Component({
  selector: 'app-sample-icon',
  imports: [],
  template: `
    <svg
      [attr.viewBox]="viewBox()"
      role="img"
      aria-hidden="true"
      focusable="false"
      [innerHTML]="safeBody()"
      width="16"
      height="16"
    ></svg>
  `,
  host: { class: 'block h-full w-full' },
})
export class SampleIcon {
  readonly body = input<TrustedIconBody | undefined>();
  readonly viewBox = input('0 0 24 24');

  private readonly sanitizer = inject(DomSanitizer);

  protected readonly safeBody = computed<SafeHtml | null>(() => {
    const body = this.body();
    return body ? this.sanitizer.bypassSecurityTrustHtml(body) : null;
  });
}
