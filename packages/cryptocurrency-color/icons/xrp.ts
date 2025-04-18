import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorXrpIcon],svg[cryptocurrency-color-xrp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#23292F"></svg:circle><svg:path fill="#FFF" d="M23.07 8h2.89l-6.015 5.957a5.62 5.62 0 0 1-7.89 0L6.035 8H8.93l4.57 4.523a3.556 3.556 0 0 0 4.996 0zM8.895 24.563H6l6.055-5.993a5.62 5.62 0 0 1 7.89 0L26 24.562h-2.895L18.5 20a3.556 3.556 0 0 0-4.996 0l-4.61 4.563z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorXrpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
