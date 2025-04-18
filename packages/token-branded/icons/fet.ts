import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedFetIcon],svg[token-branded-fet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedFet0)" d="M3 3h2.25v2.25H3zm5.625 0h2.25v2.25h-2.25zm0 5.625h2.25v2.25h-2.25zM14.25 3h2.25v2.25h-2.25zm5.625.563H21v1.124h-1.125zm0 5.624H21v1.126h-1.125zm-5.062 0h1.124v1.126h-1.124zm0 5.625h1.124v1.126h-1.124zm-5.626 0h1.126v1.126H9.187zm-5.624 5.063h1.124V21H3.562zm5.624 0h1.126V21H9.187zm5.626 0h1.124V21h-1.124zm5.062 0H21V21h-1.125zm0-5.063H21v1.126h-1.125zM3 8.625h2.25v2.25H3zm0 5.625h2.25v2.25H3z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedFet0" x1="6.349" x2="24.905" y1="6.121" y2="27.435" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#1A1E21"></svg:stop><svg:stop offset="1" stop-color="#06060A"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedFetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
