import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEverIcon],svg[token-branded-ever-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEver0)" d="M9.852 3L3 9.828h11.173V21L21 14.172V3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEver0" x1="18.429" x2="3" y1="4.607" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F96829"></svg:stop><svg:stop offset=".93" stop-color="#6347F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
