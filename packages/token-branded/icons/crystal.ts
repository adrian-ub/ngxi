import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCrystalIcon],svg[token-branded-crystal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D2E2DA" d="M12 6.273V3L3.273 21L6 18.818z"></svg:path><svg:path fill="#7E8B92" d="M12 6.273V3l8.727 18L18 18.818z"></svg:path><svg:path fill="#5A687A" d="M18 18.818H6L3.273 21h17.454z"></svg:path><svg:path fill="#6A7C8B" d="m6 18.818l6-12.545l6 12.545z"></svg:path><svg:path fill="#8AC4DE" d="M12 10.636V6.818l-2.728 5.454l.819.818l-1.637.819l-1.909 4.636l2.182-1.91z"></svg:path><svg:path fill="#58779F" d="M12 10.636V6.818l2.727 5.454l-.818.818l1.636.819l1.91 4.636l-2.183-1.91z"></svg:path><svg:path fill="#475985" d="M15.272 16.637H8.727l-2.182 1.909h4.091l.818-.818h1.091l.818.818h4.09z"></svg:path><svg:path fill="url(#tokenBrandedCrystal0)" d="m8.728 16.636l3.272-6l3.273 6z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCrystal0" x1="10.364" x2="15.273" y1="13.636" y2="16.636" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D2EDFB"></svg:stop><svg:stop offset="1" stop-color="#91CCE5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCrystalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
