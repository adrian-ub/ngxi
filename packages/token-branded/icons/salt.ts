import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSaltIcon],svg[token-branded-salt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSalt0)" d="m12 8.525l4.966 9.992H7.037zM12 3L3.31 21h17.38z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSalt0" x1="8.422" x2="20.69" y1="12" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#17BABC"></svg:stop><svg:stop offset="1" stop-color="#687883"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSaltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
