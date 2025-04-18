import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRgtIcon],svg[token-branded-rgt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedRgt0)" fill-rule="evenodd" d="M12 17.294a5.294 5.294 0 1 0 0-10.588a5.294 5.294 0 0 0 0 10.588m0-.53a4.765 4.765 0 1 0 0-9.53a4.765 4.765 0 0 0 0 9.53" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedRgt1)" fill-rule="evenodd" d="M8.56 17.962a6.882 6.882 0 1 0 6.883-11.92a6.882 6.882 0 0 0-6.883 11.92m3.44.391a6.353 6.353 0 1 0 0-12.706a6.353 6.353 0 0 0 0 12.706" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedRgt2)" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m0-.53A8.47 8.47 0 0 0 20.47 12A8.47 8.47 0 0 0 12 3.53A8.47 8.47 0 0 0 3.53 12A8.47 8.47 0 0 0 12 20.47" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedRgt0" x1="2.91" x2="21.09" y1="12.235" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F9F9F9"></svg:stop><svg:stop offset="1" stop-color="#F9F9F9" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRgt1" x1="21.251" x2="2.747" y1="11.999" y2="11.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F0F0F0"></svg:stop><svg:stop offset="1" stop-color="#F0F0F0" stop-opacity="0"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedRgt2" x1="3" x2="21" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F0F0F0"></svg:stop><svg:stop offset="1" stop-color="#F0F0F0" stop-opacity="0"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedRgtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
