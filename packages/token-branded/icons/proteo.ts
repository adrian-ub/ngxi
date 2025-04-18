import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedProteoIcon],svg[token-branded-proteo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#D7A012" d="m10.096 5.861l-3.78 5.665L12 21l5.684-9.474l-3.78-5.665l1.118 5.665h1.331l-3.88 7.106v-7.106h1.218L12.02 3.024L12 3l-.019.024l-1.672 8.502h1.217v7.106l-3.884-7.106h1.336z"></svg:path><svg:path fill="url(#tokenBrandedProteo0)" fill-opacity=".3" d="m10.096 5.861l-3.78 5.665L12 21l5.684-9.474l-3.78-5.665l1.118 5.665h1.331l-3.88 7.106v-7.106h1.218L12.02 3.024L12 3l-.019.024l-1.672 8.502h1.217v7.106l-3.884-7.106h1.336z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedProteo0" x1="12" x2="12" y1="7.026" y2="18.869" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#fff"></svg:stop><svg:stop offset=".68" stop-color="#fff" stop-opacity="0"></svg:stop><svg:stop offset="1" stop-color="#fff" stop-opacity=".5"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedProteoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
