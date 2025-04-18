import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTrvlIcon],svg[token-branded-trvl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedTrvl0)" d="M21 12c0 .563-.281 2.824-3.38 2.824c-2.2 0-3.916-1.35-4.866-2.12a.045.045 0 0 0-.057 0a.045.045 0 0 0-.01.061c.776.956 2.126 2.65 2.126 4.86C14.813 19.228 12.675 21 12 21v-9z"></svg:path><svg:path fill="url(#tokenBrandedTrvl1)" d="M6.375 9.187c2.2 0 3.91 1.345 4.866 2.121a.05.05 0 0 0 .033.015a.05.05 0 0 0 .034-.015a.045.045 0 0 0 0-.062c-.776-.956-2.126-2.666-2.126-4.871C9.182 3 11.719 3 12 3v9H3c0-.281 0-2.813 3.375-2.813"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedTrvl0" x1="19.2" x2="3.011" y1="3.473" y2="19.211" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#8FA3A4"></svg:stop><svg:stop offset="1" stop-color="#C1D0D1"></svg:stop></svg:lineargradient><svg:lineargradient id="tokenBrandedTrvl1" x1="12.006" x2="5.481" y1="3" y2="12.45" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#C7D5D6"></svg:stop><svg:stop offset="1" stop-color="#5A6966"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedTrvlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
