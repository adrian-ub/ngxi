import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTgtIcon],svg[token-branded-tgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTgt0)" d="M12.827 11.674L8.41 7.646L20.72 3zm4.421 4.033L3.281 21l9.546-9.326z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTgt0" x1="3.281" x2="20.719" y1="21" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0CF"></svg:stop><svg:stop offset="1" stop-color="#3F9"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTgtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
