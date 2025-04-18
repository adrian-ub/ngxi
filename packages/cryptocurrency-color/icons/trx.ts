import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorTrxIcon],svg[cryptocurrency-color-trx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#EF0027"></svg:circle><svg:path fill="#FFF" d="M21.932 9.913L7.5 7.257l7.595 19.112l10.583-12.894zm-.232 1.17l2.208 2.099l-6.038 1.093zm-5.142 2.973l-6.364-5.278l10.402 1.914zm-.453.934l-1.038 8.58L9.472 9.487zm.96.455l6.687-1.21l-7.67 9.343z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorTrxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
