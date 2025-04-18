import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedQsrIcon],svg[token-branded-qsr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedQsr0)" d="m16.477 21l-5.04-9.281L3 7.635v-.698A3.937 3.937 0 0 1 6.937 3h.585l5.04 9.281L21 16.236v.826A3.937 3.937 0 0 1 17.063 21z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedQsr0" x1="4.687" x2="19.312" y1="5.25" y2="19.875" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#A745F5"></svg:stop><svg:stop offset=".18" stop-color="#54BCF0"></svg:stop><svg:stop offset=".38" stop-color="#99E5C5"></svg:stop><svg:stop offset=".5" stop-color="#FFFCD8"></svg:stop><svg:stop offset=".65" stop-color="#91E1C8"></svg:stop><svg:stop offset=".82" stop-color="#51BCF4"></svg:stop><svg:stop offset="1" stop-color="#A745F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedQsrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
