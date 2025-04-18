import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorXmoIcon],svg[cryptocurrency-color-xmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#F60"></svg:circle><svg:g fill="#FFF"><svg:path d="M28 16c0 6.628-5.372 12-12 12S4 22.628 4 16c0-2.681.881-5.156 2.362-7.153l1.96 1.96A9.2 9.2 0 0 0 6.728 16c0 5.11 4.153 9.262 9.263 9.262c5.109 0 9.262-4.153 9.262-9.262a9.27 9.27 0 0 0-1.594-5.194l1.96-1.96A11.86 11.86 0 0 1 28 16"></svg:path><svg:path d="M22.637 16A6.644 6.644 0 0 1 16 22.637A6.644 6.644 0 0 1 9.362 16c0-1.153.3-2.287.872-3.29L16 18.474l5.766-5.766A6.64 6.64 0 0 1 22.638 16"></svg:path><svg:path d="M23.847 6.925L16 14.762l-5.981-5.971l-1.866-1.866A11.9 11.9 0 0 1 16 4c3 0 5.738 1.097 7.847 2.925"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorXmoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
