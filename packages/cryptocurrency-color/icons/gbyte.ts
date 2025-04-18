import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorGbyteIcon],svg[cryptocurrency-color-gbyte-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#302C2C" fill-rule="nonzero"></svg:circle><svg:circle cx="16" cy="16" r="11" fill="#FFF"></svg:circle></svg:g>`,
})
export class CryptocurrencyColorGbyteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
