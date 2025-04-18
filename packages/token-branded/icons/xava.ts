import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedXavaIcon],svg[token-branded-xava-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedXava0)" d="M14.07 4.302a2.297 2.297 0 0 0-4.14 0L3.277 17.387c-.828 1.637.3 3.611 2.07 3.611c.42 0 .822-.132 1.158-.378l4.091-3.006a2.39 2.39 0 0 1 2.898.036l3.701 2.85c.42.324.93.498 1.458.498c1.77 0 2.898-1.974 2.07-3.611z"></svg:path><svg:path fill="url(#tokenBrandedXava1)" d="M6.073 11.897c.6.3 1.536.894 2.717 1.896c2.178 1.842 5.268.924 6.162-.09c.864-.984 1.38-1.53 2.904-1.95L14.07 4.302a2.297 2.297 0 0 0-4.14 0z"></svg:path><svg:path fill="url(#tokenBrandedXava2)" d="M7.207 9.66c.39.257.87.623 1.367 1.103a4.64 4.64 0 0 0 3.168 1.32c.624 0 2.094-.3 3.468-1.578a9.2 9.2 0 0 1 1.428-1.152L14.07 4.302a2.297 2.297 0 0 0-4.14 0z"></svg:path><svg:path fill="#FF4746" d="m8.25 7.602l1.68-3.3a2.299 2.299 0 0 1 4.14 0l1.482 2.922a4.66 4.66 0 0 1-3.798 1.907c-1.404 0-2.664-.594-3.504-1.53"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedXava0" x1="12.186" x2="11.982" y1="14.033" y2="20.998" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FF7153"></svg:stop><svg:stop offset="1" stop-color="#FF2F45"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedXava1" x1="12" x2="12" y1="2.999" y2="20.996" gradientUnits="userSpaceOnUse"><svg:stop offset=".69" stop-color="#FF6C58"></svg:stop><svg:stop offset="1" stop-color="#FF4746"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedXava2" x1="12" x2="12" y1="2.998" y2="21.01" gradientUnits="userSpaceOnUse"><svg:stop offset=".55" stop-color="#FF8368"></svg:stop><svg:stop offset=".94" stop-color="#FF4746"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedXavaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
