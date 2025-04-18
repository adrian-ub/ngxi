import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIdexIcon],svg[token-branded-idex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedIdex0)" fill-rule="evenodd" d="M4.954 3h14.014L21 5.59l-4.976 6.462L21 18.467L18.994 21H4.954L3 18.467l4.944-6.415L3 5.59zm.052.894L17.863 20.35H5.109l-.978-1.273h9.586c.128 0 .205-.154.128-.257L3.624 5.623l1.388-1.736zm4.963 10.748l1.986 2.5H8.921a.465.465 0 0 1-.465-.513a.46.46 0 0 1 .098-.238zm5.689-3.08l-1.684-2.114l1.44-1.8c.25-.302.032-.79-.367-.79h-3.066l-.264-.387c-.129-.205.013-.257.257-.257h8.049l-4.371 5.349z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedIdex0" x1="6.034" x2="18.731" y1="21" y2="5.128" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9722AD"></svg:stop><svg:stop offset=".78" stop-color="#592E9C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedIdexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
