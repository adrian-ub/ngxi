import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBmexIcon],svg[token-branded-bmex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBmex0)" d="M6.937 4.688L3 19.313h3.375l2.25-9h3.64l1.422-5.625z"></svg:path><svg:path fill="url(#tokenBrandedBmex1)" d="M17.44 19.313L21 4.688h-3.375l-2.25 9H12l-1.687 5.624z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBmex0" x1="15.003" x2="15.003" y1="4.688" y2="19.313" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FB2F03"></svg:stop><svg:stop offset="1" stop-color="#B42600"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBmex1" x1="15.656" x2="15.656" y1="4.688" y2="19.313" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2560E2"></svg:stop><svg:stop offset="1" stop-color="#2253D3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBmexIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
