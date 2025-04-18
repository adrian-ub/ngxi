import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXyIcon],svg[token-branded-xy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedXy0)" d="m3 17.906l6.187-6.75l-4.5-5.062h6.188l1.688 1.687L16.5 3.844H21L5.813 20.156zm9.844-3.375l1.406 1.688h6.469l-4.5-5.063z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedXy0" x1="16.661" x2="7.098" y1="5.009" y2="19.595" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#13C0E4"></svg:stop><svg:stop offset="1" stop-color="#1033B3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedXyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
