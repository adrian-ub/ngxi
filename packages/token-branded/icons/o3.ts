import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedO3Icon],svg[token-branded-o3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedO30)" fill-rule="evenodd" d="M8.5 18H18a3 3 0 0 0 2.304-4.922a2.75 2.75 0 1 0-4.128-3.635l-.008.015c-.23.33-.4 1.005.051 1.407c.445.396 1.1.237 1.448-.087a.751.751 0 0 1 1.33.526a.75.75 0 0 1-.764.696l.002.004c-.57 0-1.238.392-1.238 1.246c0 .855.681 1.204 1.238 1.241v.002h.011a.754.754 0 0 1 0 1.507l-.252-.004V16H9.125l.001-.002a4 4 0 1 1 3.341-2c-.335.6-.314 1.014.104 1.35c.73.365 1.417-.029 1.571-.256A6 6 0 1 0 8.5 17.98z" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedO30" x1="12" x2="10.665" y1="6" y2="17.514" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#42B06B"></svg:stop><svg:stop offset="1" stop-color="#06AF8F"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedO3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
