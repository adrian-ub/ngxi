import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedVetIcon],svg[token-branded-vet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedVet0)" d="M21 3.844h-1.609c-.394 0-.748.225-.922.58l-4.219 8.74l-.006-.005l-1.125 2.328v.012l-1.125 2.329l-5.619-11.65h1.603c.394 0 .754.225.923.58l3.673 7.554l1.125-2.329l-2.965-6.103a3.61 3.61 0 0 0-3.25-2.036H3l1.125 2.334l6.75 13.978h2.25z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedVet0" x1="3" x2="20.048" y1="20.593" y2="1.144" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#582974"></svg:stop><svg:stop offset=".15" stop-color="#4163AD"></svg:stop><svg:stop offset=".47" stop-color="#22B2F9"></svg:stop><svg:stop offset=".74" stop-color="#54B1B6"></svg:stop><svg:stop offset="1" stop-color="#86E931"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedVetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
