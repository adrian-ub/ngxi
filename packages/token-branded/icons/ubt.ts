import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUbtIcon],svg[token-branded-ubt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedUbt0)" d="M21 5.25L18.75 3h-9v14.625H6.375V5.25H3v13.5L5.25 21h5.625l2.25-2.25h5.625L21 16.5V12l-1.125-1.125L21 9.75zm-7.875 1.125h4.5V9.75h-4.5zm4.5 9h-4.5V12h4.5z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedUbt0" x1="18.489" x2="5.771" y1="5.536" y2="18.335" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F5E710"></svg:stop><svg:stop offset=".22" stop-color="#4DB15A"></svg:stop><svg:stop offset=".45" stop-color="#00A09A"></svg:stop><svg:stop offset=".71" stop-color="#1E548A"></svg:stop><svg:stop offset="1" stop-color="#DA1E74"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedUbtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
