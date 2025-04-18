import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorBatIcon],svg[cryptocurrency-color-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#FF5000"></svg:circle><svg:path fill="#FFF" d="m6 23.5l10.051-17L26 23.477zm10.027-10.12l-4.108 6.786h8.235z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorBatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
