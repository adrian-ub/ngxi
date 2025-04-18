import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEunoIcon],svg[token-branded-euno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedEuno0)" d="M5.065 7.64h11.78a1.16 1.16 0 0 0 .847-.365l1.888-1.958l.198-.203c.755-.778.22-2.114-.842-2.114H5.066c-.32 0-.622.128-.849.36c-.22.232-.348.552-.348.877V6.41c0 .326.128.64.348.872c.227.232.529.366.848.366z"></svg:path><svg:path fill="url(#tokenBrandedEuno1)" d="M18.936 9.964H5.066a1.22 1.22 0 0 0-.849.349c-.22.218-.346.514-.348.825v8.689a1.16 1.16 0 0 0 .348.83c.227.221.529.343.848.343h7.284c.32 0 .621-.122.848-.349l2.09-2.056c.756-.737.227-1.66-.841-1.66h-5.93v-2.916h8.323c.319 0 .621-.128.848-.35l1.893-1.503l.198-.192c.755-.744.22-2.01-.842-2.01"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedEuno0" x1="20.132" x2="4.015" y1="19.762" y2="21.492" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7599F2"></svg:stop><svg:stop offset="1" stop-color="#562CDD"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedEuno1" x1="20.132" x2="6.233" y1="7.327" y2="13.107" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#7599F2"></svg:stop><svg:stop offset="1" stop-color="#562CDD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedEunoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
