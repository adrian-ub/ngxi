import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDaoIcon],svg[token-branded-dao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDao0)" d="M3 19.03L9.349 7.378l5.604-2.432l-6.358 11.641z"></svg:path><svg:path fill="url(#tokenBrandedDao1)" d="m9.328 16.374l4.816-8.85l2.759 2.666l-4.768 8.864z"></svg:path><svg:path fill="url(#tokenBrandedDao2)" d="M17.434 10.45L21 11.739l-1.785 3.225l-4.325.146z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDao0" x1="3" x2="21" y1="11.998" y2="11.998" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4086FF"></svg:stop><svg:stop offset="1" stop-color="#48D4FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDao1" x1="2.999" x2="20.999" y1="12" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4086FF"></svg:stop><svg:stop offset="1" stop-color="#48D4FF"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedDao2" x1="14.89" x2="21" y1="12.784" y2="12.784" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#4086FF"></svg:stop><svg:stop offset="1" stop-color="#48D4FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDaoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
