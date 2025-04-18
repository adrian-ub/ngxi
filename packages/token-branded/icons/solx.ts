import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSolxIcon],svg[token-branded-solx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSolx0)" d="M18.367 8.625H14.25c0-1.485-1.553-2.194-2.25-2.25c-.793-.04-2.25.433-2.25 1.817c0 1.727.607 1.417 5.012 2.261c3.527.675 4.5 3.38 4.545 4.652c.112 1.969-1.17 5.895-7.2 5.895c-6.025 0-7.46-3.707-7.42-5.625h4.365c-.056 1.957 2.385 2.25 3.055 2.25c.675 0 2.705-.394 2.705-2.098s-1.67-1.62-2.323-1.665a27 27 0 0 1-1.614-.175c-4.388-.579-5.62-3.577-5.62-5.09C5.255 7.078 5.42 3 12 3c5.265 0 6.435 3.757 6.367 5.625"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSolx0" x1="20.42" x2="5.227" y1="9.092" y2="16.382" gradientUnits="userSpaceOnUse"><svg:stop offset=".03" stop-color="#E604B7"></svg:stop><svg:stop offset=".61" stop-color="#483EFF"></svg:stop><svg:stop offset="1" stop-color="#20BDFC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSolxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
