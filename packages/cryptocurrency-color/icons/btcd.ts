import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBtcdIcon],svg[cryptocurrency-color-btcd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#F60"></svg:circle><svg:path fill="#FFF" d="M17.078 19.356c5.08-1.567 3.267-6.834 0-7.034c.83 0 1.508-2.377 1.508-5.322c7.976.567 11.723 13.711-.24 17.823c.077-1.067-.36-4.045-1.267-5.467zM6 17.8v-5.467h.01c2.885-.011 5.212-2.4 5.202-5.322h5.56C16.773 12.977 11.955 17.8 6 17.8m7.287-.99c3.3 2.712 3.486 7.279 3.486 8.19h-5.561c0-3.022-1.967-5.467-4.403-5.467c4.13-.666 4.971-1.366 6.478-2.722z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorBtcdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
