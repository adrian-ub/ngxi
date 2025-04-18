import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNhtIcon],svg[token-branded-nht-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNht0)" d="M16.5 5.261c-.04 3.589-3.004 4.5-4.5 4.489l.006 3.864H21V5.25z"></svg:path><svg:path fill="url(#tokenBrandedNht1)" d="M16.793 18.75H12v-4.5h4.5v-9h.4A4.09 4.09 0 0 1 21 9.283v5.215a4.29 4.29 0 0 1-4.207 4.252"></svg:path><svg:path fill="url(#tokenBrandedNht2)" d="M7.5 14.25h9c-3.645 0-4.494 2.852-4.5 4.387c-.056-3.453-2.818-4.353-4.331-4.387z"></svg:path><svg:path fill="url(#tokenBrandedNht3)" d="M12.022 9.536v.506H7.376V5.283h.393a4.253 4.253 0 0 1 4.253 4.253"></svg:path><svg:path fill="url(#tokenBrandedNht4)" d="M3.107 18.75H3V9.3a4.05 4.05 0 0 1 4.05-4.05h.45c0 3.488 2.728 4.483 4.05 4.5h.793a4.085 4.085 0 0 1 4.157 4.073v.427h-9v.011a4.416 4.416 0 0 1-4.393 4.49"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNht0" x1="21" x2="12.01" y1="5.949" y2="16.33" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2F1E58"></svg:stop><svg:stop offset="1" stop-color="#4C318D"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNht1" x1="12.045" x2="9.691" y1="5.25" y2="20.777" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7B42A1"></svg:stop><svg:stop offset=".54" stop-color="#C75693"></svg:stop><svg:stop offset="1" stop-color="#A1467A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNht2" x1="5.745" x2="14.779" y1="5.821" y2="8.958" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#84354C"></svg:stop><svg:stop offset="1" stop-color="#B64A69"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNht3" x1="5.244" x2="10.083" y1="6.207" y2="19.947" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8454F4"></svg:stop><svg:stop offset="1" stop-color="#5D3BAC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedNht4" x1="5.756" x2="7.534" y1="5.779" y2="19.127" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8453EE"></svg:stop><svg:stop offset=".68" stop-color="#B456B2"></svg:stop><svg:stop offset=".98" stop-color="#201128"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNhtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
