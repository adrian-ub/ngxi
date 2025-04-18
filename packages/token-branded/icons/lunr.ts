import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLunrIcon],svg[token-branded-lunr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLunr0)" d="M20.11 16.763a.155.155 0 0 1-.149-.122a.2.2 0 0 1 .001-.068a7.7 7.7 0 0 0 .244-1.928c0-4.383-3.674-7.94-8.206-7.94s-8.206 3.557-8.206 7.94c0 .667.085 1.313.244 1.928a.154.154 0 0 1-.149.19a.15.15 0 0 1-.132-.09a9 9 0 1 1 16.486 0a.15.15 0 0 1-.132.09M12 19.94a4.764 4.764 0 1 0 0-9.53a4.764 4.764 0 0 0 0 9.53"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLunr0" x1="9.374" x2="9.374" y1="4.057" y2="9.071" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#07EDFD"></svg:stop><svg:stop offset="1" stop-color="#21FA90"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLunrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
