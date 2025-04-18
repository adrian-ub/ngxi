import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedToshiIcon],svg[token-branded-toshi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedToshi0)" d="M3 4.658v1.904l1.843 1.824l4.016 1.09v.852l1.616 3.998v1.322l1.51 1.672v.033l.015-.014l.014.014v-.033l1.511-1.672v-1.326l1.61-3.998V9.47l4.027-1.09L21 6.562V4.658l-.488 1.322l-1.355.815l-4.017.696l-3.126-.692v-.004h-.028v.004l-3.127.692l-4.016-.696l-1.355-.815z"></svg:path><svg:path fill="url(#tokenBrandedToshi1)" d="m7.263 15.05l.975-4.386l1.535 3.723l-.355 1.516l2.108 2.179v1.26z"></svg:path><svg:path fill="url(#tokenBrandedToshi2)" d="m16.737 15.05l-.976-4.386l-1.534 3.723l.355 1.516l-2.108 2.179v1.26z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedToshi0" x1="3.9" x2="20.628" y1="7.31" y2="6.995" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#380D78"></svg:stop><svg:stop offset=".43" stop-color="#56758A"></svg:stop><svg:stop offset=".75" stop-color="#7BF29E"></svg:stop><svg:stop offset=".93" stop-color="#8FD5B8"></svg:stop><svg:stop offset="1" stop-color="#A7ACC2"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedToshi1" x1="3" x2="9.432" y1="9.675" y2="22.03" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#24153E"></svg:stop><svg:stop offset="1" stop-color="#77E397"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedToshi2" x1="14.605" x2="14.605" y1="10.664" y2="19.342" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A69BD7"></svg:stop><svg:stop offset=".3" stop-color="#84E7AE"></svg:stop><svg:stop offset=".48" stop-color="#70D78F"></svg:stop><svg:stop offset="1" stop-color="#3D5F5E"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedToshiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
