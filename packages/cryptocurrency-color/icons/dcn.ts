import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorDcnIcon],svg[cryptocurrency-color-dcn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#136485"></svg:circle><svg:path fill="#FFF" d="M10.436 31.006a16 16 0 0 1-5.604-3.548l.147-.257c2.388-3.773 4.533-7.678 6.148-11.85c1.713-4.425 3.084-8.967 4.39-13.527c.117-.407.256-.807.384-1.21c.138.158.188.305.23.454c.82 2.926 1.613 5.86 2.464 8.776c1.55 5.313 3.73 10.353 6.617 15.077q.505.826 1.72 2.762a16 16 0 0 1-6.035 3.554a4320 4320 0 0 0-5.002-15.17l-.154-.002q-1.749 4.915-5.305 14.941M16.075.049h-.124L16 0z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorDcnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
