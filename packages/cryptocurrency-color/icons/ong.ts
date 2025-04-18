import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorOngIcon],svg[cryptocurrency-color-ong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#000" fill-rule="nonzero"></svg:circle><svg:g fill="#FFF" transform="translate(5 5)"><svg:path d="M10.943 21.311c5.74 0 10.088-3.846 10.99-8.878h-4.897c-.732 2.672-3.004 4.628-6.035 4.628c-3.009 0-5.31-1.97-6.073-4.628H0c.869 5.05 5.18 8.878 10.943 8.878"></svg:path><svg:circle cx="10.971" cy="2.527" r="2.527"></svg:circle><svg:path d="M4.655 12.433v-.05c0-3.593 2.574-6.526 6.285-6.526s6.34 2.983 6.346 6.576z"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorOngIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
