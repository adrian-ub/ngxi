import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMoovIcon],svg[token-branded-moov-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMoov0)" d="m9.75 3.09l9.67 5.7c.2.12.33.34.33.58v5.28a.67.67 0 0 1-.33.579l-9.665 5.68a.65.65 0 0 1-.665 0l-4.515-2.72a.68.68 0 0 1-.325-.58v-11.3c0-.24.125-.46.33-.58L9.095 3.09c.2-.12.45-.12.655 0m-3 1.99v13.814c0 .2.22.33.395.23l11.974-6.93a.265.265 0 0 0 0-.455L7.14 4.85a.26.26 0 0 0-.39.23"></svg:path><svg:path fill="url(#tokenBrandedMoov1)" d="M9.25 13.824v-3.65a.67.67 0 0 1 1-.585l3.164 1.82c.45.26.45.91 0 1.17l-3.16 1.83a.67.67 0 0 1-1.004-.586"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMoov0" x1="12" x2="12" y1="3" y2="20.998" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF825F"></svg:stop><svg:stop offset="1" stop-color="#FF3E68"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMoov1" x1="11.5" x2="11.5" y1="9.499" y2="14.499" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF825F"></svg:stop><svg:stop offset="1" stop-color="#FF3E68"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedMoovIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
