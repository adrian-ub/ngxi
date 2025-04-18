import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLyxeIcon],svg[token-branded-lyxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLyxe0)" d="m12 3l8 4.438v9.125L12 21l-8-4.438V7.438z"></svg:path><svg:path fill="#fff" d="M14.25 8H9.775L7.5 12h4.576z"></svg:path><svg:path fill="#DADBDA" d="m9.807 16l-2.283-4h4.526l2.244 4z"></svg:path><svg:path fill="#EFEEEE" d="m14.292 15.998l-2.244-3.992L14.25 8l2.248 4z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLyxe0" x1="8.498" x2="16.127" y1="5.003" y2="18.841" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#E59F9A"></svg:stop><svg:stop offset="1" stop-color="#6A3FBA"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLyxeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
