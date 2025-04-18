import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWagmiIcon],svg[token-branded-wagmi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedWagmi0)" d="M3.116 4.286H3v6.14l9 7.727l9-8.145V4.325l-9 7.495zm13.796 0L12 8.53L7.089 4.286zM21 13.878l-6.943 5.837H21zm-10.993 5.837L3 13.672v6.043z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedWagmi0" x1="3" x2="20.161" y1="10.788" y2="10.788" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#DCC093"></svg:stop><svg:stop offset="1" stop-color="#C4A878"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedWagmiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
