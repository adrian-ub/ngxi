import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKyveIcon],svg[token-branded-kyve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKyve0)" d="M3.964 21L7.77 3h3.446l-1.582 7.45h.624L15.992 3h4.044v.347l-6.892 8.486v.399l4.417 8.51V21h-3.844l-3.761-7.45h-.984L7.384 21z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKyve0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#151E1D"></svg:stop><svg:stop offset="1" stop-color="#23584E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKyveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
