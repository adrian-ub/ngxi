import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedHookIcon],svg[token-branded-hook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedHook0)" d="M7.482 7.5c2.155 0 3.51 1.395 3.915 2.088l-3.213.693l.89-.693C7.037 8.134 4.35 9.97 4.35 11.883c0 1.534 1.278 2.529 1.854 2.835c-1.737-.243-2.889-1.422-3.006-1.8A3.6 3.6 0 0 1 3 11.883C3 9.732 4.786 7.5 7.482 7.5"></svg:path><svg:path fill="url(#tokenBrandedHook1)" d="M16.517 16.5c-2.155 0-3.51-1.395-3.915-2.088l3.213-.693l-.89.693c2.038 1.454 4.724-.383 4.724-2.295c0-1.534-1.278-2.529-1.854-2.835c1.737.243 2.89 1.422 3.006 1.8c.095.306.198.68.198 1.035c0 2.156-1.786 4.383-4.482 4.383"></svg:path><svg:path fill="url(#tokenBrandedHook2)" d="M6.407 14.893a3.92 3.92 0 0 1-3.24-1.62c.247 1.53 2.025 3.227 4.37 3.227c1.88 0 3.518-1.643 4.103-2.466l2.313-3.416c.432-.526 1.67-1.58 3.132-1.58s3.217 1.054 3.915 1.58c-.297-1.03-1.498-3.087-3.915-3.087s-4.063 1.71-4.59 2.565c-.877 1.188-2.713 3.65-3.046 3.938c-.414.36-.81.859-3.042.859"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedHook0" x1="18.019" x2="15.702" y1="8.28" y2="17.43" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#68D869"></svg:stop><svg:stop offset=".8" stop-color="#C6F88A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedHook1" x1="11.999" x2="16.093" y1="16.5" y2="7.344" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1CD7CA"></svg:stop><svg:stop offset=".39" stop-color="#1BB8CA"></svg:stop><svg:stop offset="1" stop-color="#1CD7CA"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedHook2" x1="3.162" x2="18.84" y1="16.499" y2="2.716" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#ADF160"></svg:stop><svg:stop offset=".65" stop-color="#17B6D7"></svg:stop><svg:stop offset=".92" stop-color="#0061A0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedHookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
