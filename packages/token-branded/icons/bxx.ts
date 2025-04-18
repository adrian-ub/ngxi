import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBxxIcon],svg[token-branded-bxx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBxx0)" fill-rule="evenodd" d="M2 8.667h3.195A1.833 1.833 0 0 1 7.028 10.5a1.267 1.267 0 0 1-1.266 1.267h-.053A1.533 1.533 0 0 1 7.238 13.3a2.033 2.033 0 0 1-2.033 2.033H2zm1.429.952h1.428a.952.952 0 0 1 0 1.905H3.43zm0 2.857h1.428a.952.952 0 1 1 0 1.905H3.43z" clip-rule="evenodd"></svg:path><svg:path fill="url(#tokenBrandedBxx1)" d="M7.714 8.667h1.924l4.743 6.666h-1.924z"></svg:path><svg:path fill="url(#tokenBrandedBxx2)" d="M13.905 8.667h-1.924L7.24 15.333h1.923zm1.429 0h1.923L22 15.333h-1.924z"></svg:path><svg:path fill="url(#tokenBrandedBxx3)" d="M21.524 8.667H19.6l-4.743 6.666h1.924z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBxx0" x1="21.999" x2="2.013" y1="11.821" y2="11.286" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#59B5F6"></svg:stop><svg:stop offset="1" stop-color="#1648C7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBxx1" x1="22" x2="2.013" y1="11.821" y2="11.286" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#59B5F6"></svg:stop><svg:stop offset="1" stop-color="#1648C7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBxx2" x1="22" x2="2.013" y1="11.821" y2="11.286" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#59B5F6"></svg:stop><svg:stop offset="1" stop-color="#1648C7"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedBxx3" x1="22" x2="2.013" y1="11.821" y2="11.286" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#59B5F6"></svg:stop><svg:stop offset="1" stop-color="#1648C7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBxxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
