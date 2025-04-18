import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFourIcon],svg[token-branded-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedFour0)" d="m9.6 12l2.4-.6v-3l-.6.3l-1.8 2.7z"></svg:path><svg:path fill="url(#tokenBrandedFour1)" fill-rule="evenodd" d="M3 5.646L21 3v16.41L3 21zm10.8 5.455V6.6h-2.4L7.2 12v1.8l4.8-.6v4.2l1.8-.6v-3.9l2.4-.6v-1.8z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedFour0" x1="20.382" x2="6.66" y1="3.528" y2="22.89" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#92988A"></svg:stop><svg:stop offset="1" stop-color="#3C554F"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedFour1" x1="20.382" x2="6.66" y1="3.528" y2="22.89" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#92988A"></svg:stop><svg:stop offset="1" stop-color="#3C554F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedFourIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
