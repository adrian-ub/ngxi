import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedAlphaIcon],svg[token-branded-alpha-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedAlpha0)" d="M12 2v7.481l1.375 3.375L12 11.713v3.593l.043.044A26.8 26.8 0 0 0 20.126 22z"></svg:path><svg:path fill="url(#tokenBrandedAlpha1)" d="M12 2v7.481l-1.375 3.375L12 11.713v3.593l-.044.044A26.8 26.8 0 0 1 3.875 22z"></svg:path><svg:path fill="#F5CC02" d="M12 20.125a1.875 1.875 0 1 0 0-3.75a1.875 1.875 0 0 0 0 3.75"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedAlpha0" x1="12" x2="12" y1="2" y2="22" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F5F6F8"></svg:stop><svg:stop offset=".73" stop-color="#B6B8CB"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedAlpha1" x1="5.8" x2="9.852" y1="20.625" y2="3.477" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F8F8FA"></svg:stop><svg:stop offset="1" stop-color="#A6A8BF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedAlphaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
