import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedSwapIcon],svg[token-branded-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedSwap0)" d="M7.5 9.616v1.034l3.15-2.25L7.5 6.375v.92a4.95 4.95 0 0 0 .45 9.88c1.134 0 2.7-.399 3.6-1.35c1.125-1.299 2.466-4.57 2.466-4.57L9.999 13.86a2.59 2.59 0 0 1-4.165-.403A2.59 2.59 0 0 1 7.5 9.616"></svg:path><svg:path fill="url(#tokenBrandedSwap1)" d="M16.5 14.384V13.35l-3.15 2.25l3.15 2.025v-.92a4.95 4.95 0 0 0-.45-9.88c-1.134 0-2.7.399-3.6 1.35c-1.125 1.299-2.466 4.57-2.466 4.57L14 10.14a2.587 2.587 0 1 1 2.499 4.243"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedSwap0" x1="5.206" x2="10.404" y1="8.25" y2="19.899" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0076EF"></svg:stop><svg:stop offset=".13" stop-color="#007FF6"></svg:stop><svg:stop offset=".258" stop-color="#0084F6"></svg:stop><svg:stop offset=".376" stop-color="#008BF9"></svg:stop><svg:stop offset=".492" stop-color="#009DF9"></svg:stop><svg:stop offset=".612" stop-color="#00AEF9"></svg:stop><svg:stop offset=".731" stop-color="#00B9FA"></svg:stop><svg:stop offset=".829" stop-color="#00C5FB"></svg:stop><svg:stop offset="1" stop-color="#00CCFC"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedSwap1" x1="19.866" x2="13.566" y1="15.825" y2="6.825" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0076EF"></svg:stop><svg:stop offset=".13" stop-color="#007FF6"></svg:stop><svg:stop offset=".258" stop-color="#0084F6"></svg:stop><svg:stop offset=".376" stop-color="#008BF9"></svg:stop><svg:stop offset=".492" stop-color="#009DF9"></svg:stop><svg:stop offset=".612" stop-color="#00AEF9"></svg:stop><svg:stop offset=".731" stop-color="#00B9FA"></svg:stop><svg:stop offset=".829" stop-color="#00C5FB"></svg:stop><svg:stop offset="1" stop-color="#00CCFC"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedSwapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
