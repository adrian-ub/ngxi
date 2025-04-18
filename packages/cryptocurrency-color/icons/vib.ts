import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorVibIcon],svg[cryptocurrency-color-vib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#ff1f43"></svg:circle><svg:path fill="#fff" d="M7 7h4.2l7.2 12.775V7H22v18h-4.8z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorVibIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
