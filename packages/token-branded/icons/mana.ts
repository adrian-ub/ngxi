import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedManaIcon],svg[token-branded-mana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedMana0)" d="M9.206 6.863v7.706h6.637z"></svg:path><svg:path fill="#fff" d="M3 14.569h6.206V6.863z"></svg:path><svg:path fill="#FF2D55" d="M6.251 19.064a10.7 10.7 0 0 0 6.165 1.926c2.312 0 4.449-.717 6.165-1.926z"></svg:path><svg:path fill="#FFBC5B" d="M3 14.57c.32.687.722 1.334 1.197 1.926H15.93v-1.927z"></svg:path><svg:path fill="url(#tokenBrandedMana1)" d="M16.29 12v5.78H21z"></svg:path><svg:path fill="#fff" d="M11.584 17.78h4.706V12z"></svg:path><svg:path fill="#FFC95B" d="M16.29 9.688a2.568 2.568 0 1 0 0-5.137a2.568 2.568 0 0 0 0 5.137m-7.084-4.11a1.284 1.284 0 1 0 0-2.568a1.284 1.284 0 0 0 0 2.568"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedMana0" x1="12.287" x2="12.287" y1="3.01" y2="20.991" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A524B3"></svg:stop><svg:stop offset="1" stop-color="#FF2D55"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedMana1" x1="11.995" x2="11.995" y1="3.01" y2="20.99" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A524B3"></svg:stop><svg:stop offset="1" stop-color="#FF2D55"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedManaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
