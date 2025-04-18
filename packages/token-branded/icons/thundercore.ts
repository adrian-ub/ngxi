import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedThundercoreIcon],svg[token-branded-thundercore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedThundercore0)" d="M6.76 11.453a.4.4 0 0 0 .338.612h4.56a.191.191 0 0 1 .162.293l-4.474 7.164a.16.16 0 0 1-.225.05a9.01 9.01 0 0 1 4.592-16.571a.159.159 0 0 1 .137.242zm10.282-6.912a.16.16 0 0 0-.225.048l-4.406 7.059a.192.192 0 0 0 .162.292h4.56a.4.4 0 0 1 .337.612l-5.155 8.255a.125.125 0 0 0 .113.192A9.008 9.008 0 0 0 17.04 4.541z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedThundercore0" x1="10.772" x2="13.936" y1="6.715" y2="20.311" gradientUnits="userSpaceOnUse"><svg:stop offset=".18" stop-color="#00FFD5"></svg:stop><svg:stop offset=".23" stop-color="#00F8D5"></svg:stop><svg:stop offset=".31" stop-color="#00E4D5"></svg:stop><svg:stop offset=".4" stop-color="#00C3D5"></svg:stop><svg:stop offset=".51" stop-color="#0096D5"></svg:stop><svg:stop offset=".62" stop-color="#005CD5"></svg:stop><svg:stop offset=".74" stop-color="#0016D5"></svg:stop><svg:stop offset=".78" stop-color="#0000D5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedThundercoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
