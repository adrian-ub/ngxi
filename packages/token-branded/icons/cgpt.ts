import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCgptIcon],svg[token-branded-cgpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCgpt0)" d="M3 18.336L4.8 17.1V6.9l2.1-2.1h10.44l1.86 2.1l1.128-.678a.34.34 0 0 0 .06-.522L17.88 3.096A.32.32 0 0 0 17.652 3H6.024a.32.32 0 0 0-.228.096l-2.7 2.808A.33.33 0 0 0 3 6.138z"></svg:path><svg:path fill="#E1E7CD" d="M6.9 4.8L4.8 6.9v10.242L6.9 19.2h10.2l2.1-2.1V6.858L17.4 4.8z"></svg:path><svg:path fill="url(#tokenBrandedCgpt1)" d="M20.676 11.664H19.2v5.34L17.1 19.2H6.9l-2.1-2.1L3 18.336l2.478 2.568c.06.06.144.096.228.096h11.946a.33.33 0 0 0 .228-.096l3.024-3.138c.06-.06.096-.15.096-.24V12a.333.333 0 0 0-.324-.336"></svg:path><svg:path fill="#1A1A24" d="M9.6 14.4a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4m4.8 0a1.2 1.2 0 1 0 0-2.4a1.2 1.2 0 0 0 0 2.4"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCgpt0" x1="20.209" x2="2.124" y1="4.958" y2="16.505" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#684BFD"></svg:stop><svg:stop offset=".28" stop-color="#4663E9"></svg:stop><svg:stop offset=".52" stop-color="#4380E8"></svg:stop><svg:stop offset=".84" stop-color="#17DAC6"></svg:stop><svg:stop offset="1" stop-color="#18D6C9"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedCgpt1" x1="20.358" x2="2.478" y1="3.648" y2="8.214" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F17165"></svg:stop><svg:stop offset=".25" stop-color="#F19C5C"></svg:stop><svg:stop offset=".47" stop-color="#E9BE4D"></svg:stop><svg:stop offset="1" stop-color="#E7C653"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCgptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
