import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPspIcon],svg[token-branded-psp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPsp0)" fill-rule="evenodd" d="M3 4.688h7.875l-3.926 6.75zm1.294 14.625H21L12.624 4.688zm3.588-2.25h9.36l-4.69-8.438z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPsp0" x1="16.343" x2="10.295" y1="5.523" y2="19.535" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#568EFF"></svg:stop><svg:stop offset="1" stop-color="#185BEF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPspIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
