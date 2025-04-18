import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorLendIcon],svg[cryptocurrency-color-lend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#0fa9c9"></svg:circle><svg:path fill="#fff" d="M17.147 20.446L11.697 26l-1.554-1.705l3.777-3.85L10 16.452l1.673-1.706zm3.18-3.191L22 15.549l-3.92-3.995l3.777-3.849L20.303 6l-5.474 5.554zm-7.96-3.167l5.498 5.7l1.673-1.705l-5.498-5.603z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorLendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
