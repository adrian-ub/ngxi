import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDafiIcon],svg[token-branded-dafi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#33363C" fill-rule="evenodd" d="M16.91 3a1.09 1.09 0 0 0-1.091 1.091v3.84a7.092 7.092 0 1 0 3.273 5.98V4.09A1.09 1.09 0 0 0 18 3zm-1.091 10.91a3.819 3.819 0 1 0-7.638 0a3.819 3.819 0 0 0 7.638 0" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedDafi0)" d="M12 6.818a7.07 7.07 0 0 1 3.819 1.113v5.434h-.039a3.819 3.819 0 0 0-7.56 0H4.93A7.09 7.09 0 0 1 12 6.818"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDafi0" x1="16.364" x2="7.908" y1="9" y2="9" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#222529"></svg:stop><svg:stop offset="1" stop-color="#131519" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDafiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
