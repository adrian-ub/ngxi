import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUw3sIcon],svg[token-branded-uw3s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedUw3s0)" d="M15.148 8.62H8.62v6.528a6.085 6.085 0 0 1-5.48-7.365a6.083 6.083 0 0 1 12.008.837"></svg:path><svg:path fill="url(#tokenBrandedUw3s1)" d="M8.835 15.047A6.207 6.207 0 0 0 15.04 8.62H21V21H8.62v-5.964z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedUw3s0" x1="19.749" x2="2.991" y1="11.245" y2="15.33" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C3F5E9"></svg:stop><svg:stop offset=".17" stop-color="#C7C6E8"></svg:stop><svg:stop offset=".45" stop-color="#D196E5"></svg:stop><svg:stop offset=".69" stop-color="#7698EC"></svg:stop><svg:stop offset=".95" stop-color="#5693F0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedUw3s1" x1="20.404" x2="8.993" y1="8.942" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E9CFEB"></svg:stop><svg:stop offset=".2" stop-color="#AC90F4"></svg:stop><svg:stop offset=".49" stop-color="#7567F8"></svg:stop><svg:stop offset="1" stop-color="#3095F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedUw3sIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
