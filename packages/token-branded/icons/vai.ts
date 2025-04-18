import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVaiIcon],svg[token-branded-vai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedVai0)" d="m7.522 5.582l3.884 3.799a.36.36 0 0 1 0 .513L7.518 13.7a.38.38 0 0 1-.527 0L3.107 9.898a.36.36 0 0 1 0-.513l3.889-3.803a.38.38 0 0 1 .526 0m4.743 4.717L16.15 14.1a.36.36 0 0 1 0 .513l-3.888 3.803a.38.38 0 0 1-.526 0L7.85 14.62a.36.36 0 0 1 0-.513l3.888-3.807a.38.38 0 0 1 .526 0m4.744-4.717l3.883 3.799a.36.36 0 0 1 0 .513L17.005 13.7a.38.38 0 0 1-.526 0l-3.884-3.803a.36.36 0 0 1 0-.513l3.888-3.803a.38.38 0 0 1 .527 0"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedVai0" x1="19.619" x2="9.3" y1="7.171" y2="16.838" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#5C84F9"></svg:stop><svg:stop offset=".28" stop-color="#5D70F8"></svg:stop><svg:stop offset=".57" stop-color="#5F5BF6"></svg:stop><svg:stop offset="1" stop-color="#6349F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedVaiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
