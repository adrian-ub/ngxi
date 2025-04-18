import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedDadIcon],svg[token-branded-dad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedDad0)" d="M12.712 3H3.6v3.6h7.835c1.514.04 4.765 1.803 4.765 5.172c0 4.038-3.103 5.628-4.765 5.628H7.2V21h5.512c2.581 0 7.805-2.574 7.686-9.228C20.28 5.119 15.145 3 12.712 3M9 10.2h1.8a1.8 1.8 0 1 1 0 3.6H9zM3.6 12a1.8 1.8 0 0 1 1.8-1.8v3.6A1.8 1.8 0 0 1 3.6 12"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedDad0" x1="7.251" x2="18.113" y1="5.262" y2="17.71" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00EDEF"></svg:stop><svg:stop offset="1" stop-color="#0094FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedDadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
