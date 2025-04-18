import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKwentaIcon],svg[token-branded-kwenta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKwenta0)" d="m3 14.118l9-5.633V3L3 8.633z"></svg:path><svg:path fill="url(#tokenBrandedKwenta1)" d="m21 14.118l-9-5.633V3l9 5.633z"></svg:path><svg:path fill="url(#tokenBrandedKwenta2)" d="m3 9.882l9 5.633V21l-9-5.633z"></svg:path><svg:path fill="url(#tokenBrandedKwenta3)" d="m21 9.882l-9 5.633V21l9-5.633z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKwenta0" x1="3" x2="20.996" y1="9.429" y2="8.984" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C39A6F"></svg:stop><svg:stop offset="1" stop-color="#9A6A3A"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKwenta1" x1="3" x2="20.996" y1="13.457" y2="13.889" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C29665"></svg:stop><svg:stop offset="1" stop-color="#AE8351"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKwenta2" x1="3" x2="22.028" y1="9.428" y2="10.734" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#323232"></svg:stop><svg:stop offset="1" stop-color="#353535"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedKwenta3" x1="21" x2="11.471" y1="13.852" y2="14.382" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#373737"></svg:stop><svg:stop offset="1" stop-color="#2A2A2C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKwentaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
