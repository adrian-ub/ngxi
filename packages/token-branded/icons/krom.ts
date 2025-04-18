import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKromIcon],svg[token-branded-krom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKrom0)" d="m19.375 19.457l-7.339-6.246L4.5 19.583c-.582.492-1.5.096-1.5-.654V5.069c0-.75.918-1.14 1.5-.654l7.536 6.402l7.405-6.318a.96.96 0 0 1 1.32.072a.88.88 0 0 1-.078 1.278l-7.225 6.132l7.17 6.12a.88.88 0 0 1 .09 1.272a.973.973 0 0 1-1.343.084M4.8 6.983v9.978l5.814-4.956z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKrom0" x1="3" x2="21" y1="11.999" y2="11.999" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#9EEBFD"></svg:stop><svg:stop offset=".23" stop-color="#AAC5F9"></svg:stop><svg:stop offset=".52" stop-color="#A5BCF8"></svg:stop><svg:stop offset=".74" stop-color="#B6B5F7"></svg:stop><svg:stop offset=".9" stop-color="#EBB0F2"></svg:stop><svg:stop offset="1" stop-color="#AEA0F4"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKromIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
