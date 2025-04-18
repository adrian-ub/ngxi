import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedBerryIcon],svg[token-branded-berry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedBerry0)" d="M18.677 20.997c-2.538-.128-4.538-2.107-4.538-4.483c0-.156.1-.312.234-.405c.868-.499 1.436-1.37 1.436-2.4c0-1.557-1.336-2.834-3.007-2.834H9.895c-.702 0-1.27.53-1.27 1.215V21H5.449A2.45 2.45 0 0 1 3 18.554V9.82a2.44 2.44 0 0 1 1.081-2.032l6.552-4.383a2.51 2.51 0 0 1 2.735 0l6.551 4.383A2.44 2.44 0 0 1 21 9.82v8.702c0 1.325-1.016 2.41-2.323 2.475"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedBerry0" x1="8.586" x2="14.888" y1="3.632" y2="21" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#28D0FA"></svg:stop><svg:stop offset="1" stop-color="#635BD7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedBerryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
