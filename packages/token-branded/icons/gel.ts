import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedGelIcon],svg[token-branded-gel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedGel0)" d="M16.858 8.235c0 .247-.232.422-.484.396a8.2 8.2 0 0 0-1.708 0c-1.153.118-2.11.504-2.99.834l-.16.056c-.936.35-1.8.644-2.825.67a6 6 0 0 1-1.333-.124a1.09 1.09 0 0 1-.828-.85a5.213 5.213 0 1 1 10.328-.987z"></svg:path><svg:path fill="url(#tokenBrandedGel1)" d="M6.947 10.823a.51.51 0 0 0-.543.243a.5.5 0 0 0-.064.2a.45.45 0 0 0 .051.237l4.9 9.38a.219.219 0 0 0 .385 0l5.908-10.353a.67.67 0 0 0 .077-.34a.596.596 0 0 0-.484-.57a8.4 8.4 0 0 0-2.424-.13c-1.04.109-1.904.428-2.799.762l-.139.052a9.3 9.3 0 0 1-3.103.72c-.566.016-1.106-.046-1.765-.206z"></svg:path><svg:path fill="url(#tokenBrandedGel2)" d="M11.485 10.55a.26.26 0 0 1 .17-.246l.144-.052c.95-.375 1.942-.63 2.954-.761a8.4 8.4 0 0 1 2.424.128a.6.6 0 0 1 .483.618c0 .103-.03.2-.077.293l-5.907 10.354a.21.21 0 0 1-.19.113z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedGel0" x1="14.573" x2="14.573" y1="9.454" y2="20.997" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC4A4"></svg:stop><svg:stop offset="1" stop-color="#FE858C"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGel1" x1="14.573" x2="14.573" y1="9.454" y2="20.997" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC4A4"></svg:stop><svg:stop offset="1" stop-color="#FE858C"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedGel2" x1="14.572" x2="14.572" y1="9.454" y2="20.997" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FFC4A4"></svg:stop><svg:stop offset="1" stop-color="#FE858C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedGelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
