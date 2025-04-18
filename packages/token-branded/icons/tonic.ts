import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTonicIcon],svg[token-branded-tonic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTonic0)" d="M3.6 3h10.8v4.8H3.6zm12 0h4.8v4.8h-4.8zm-1.2 6H9.6v12h4.8z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTonic0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#000D34"></svg:stop><svg:stop offset="1" stop-color="#42243D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTonicIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
