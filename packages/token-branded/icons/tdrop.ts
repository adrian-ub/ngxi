import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTdropIcon],svg[token-branded-tdrop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTdrop0)" fill-rule="evenodd" d="M12 21a7.58 7.58 0 0 0 7.579-7.579C19.579 9.234 12.947 3 11.999 3c-.947 0-7.578 6.234-7.578 10.421A7.58 7.58 0 0 0 12 21m-3.79-9v3.316h2.369v2.368h2.842v-2.368h2.368V12z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTdrop0" x1="12" x2="12" y1="3" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#00F2FF"></svg:stop><svg:stop offset="1" stop-color="#00BCF3"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTdropIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
