import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNftartIcon],svg[token-branded-nftart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedNftart0)" d="M5.813 4.125v6.188H3v3.374h1.547c.731 0 1.102-.933 1.266-1.783v7.971h3.374v-9.433l6.47 9.433h2.53v-6.187H21v-3.376h-1.547c-.731 0-1.102.934-1.266 1.784V4.125h-3.375v9.54l-6.525-9.54z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedNftart0" x1="3" x2="19.446" y1="6.62" y2="19.179" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#D6022A"></svg:stop><svg:stop offset="1" stop-color="#3C08C3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedNftartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
