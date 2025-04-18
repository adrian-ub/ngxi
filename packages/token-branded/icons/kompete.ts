import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedKompeteIcon],svg[token-branded-kompete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedKompete0)" d="M3.643 21V3H7.5v7.45L14.65 3h5.708l-7.695 7.81L20.357 21h-5.142l-5.362-7.335L7.5 16.05V21z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedKompete0" x1="5.332" x2="18.791" y1="18.567" y2="7.92" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#090909"></svg:stop><svg:stop offset="1" stop-color="#6C0C0D"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedKompeteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
