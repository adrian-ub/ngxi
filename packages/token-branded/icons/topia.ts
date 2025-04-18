import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTopiaIcon],svg[token-branded-topia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTopia0)" d="M3.6 3h6.6v6h3.6V3h6.6v18h-6.6v-6h-3.6v6H3.6z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTopia0" x1="6.072" x2="18.021" y1="4.906" y2="18.289" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFA708"></svg:stop><svg:stop offset=".25" stop-color="#D9FE35"></svg:stop><svg:stop offset=".51" stop-color="#9CFDDE"></svg:stop><svg:stop offset=".73" stop-color="#E4B685"></svg:stop><svg:stop offset="1" stop-color="#F66AFF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTopiaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
