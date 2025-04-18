import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPromIcon],svg[token-branded-prom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedProm0)" d="m17.38 5.172l-9.845 6.953a5.87 5.87 0 0 1-.893-3.132C6.643 5.682 9.356 3 12.708 3a6.07 6.07 0 0 1 4.673 2.172"></svg:path><svg:path fill="url(#tokenBrandedProm1)" d="M17.5 10.262a5.9 5.9 0 0 0-.892-3.133l-4.911 3.465l-4.936 3.48l-.261.186l.012 6.74s6.492-4.33 8.538-5.921c1.522-1.186 2.45-2.847 2.45-4.817"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedProm0" x1="14.355" x2="8.154" y1="3.24" y2="10.538" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E2D177"></svg:stop><svg:stop offset="1" stop-color="#EE448A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedProm1" x1="16.504" x2="7.202" y1="10.146" y2="17.523" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E2D177"></svg:stop><svg:stop offset="1" stop-color="#EE448A"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPromIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
