import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorGrtIcon],svg[cryptocurrency-color-grt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:filter id="cryptocurrencyColorGrt0" color-interpolation-filters="auto"><svg:fecolormatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"></svg:fecolormatrix></svg:filter></svg:defs><svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#5942CC" fill-rule="nonzero"></svg:circle><svg:g filter="url(#cryptocurrencyColorGrt0)"><svg:path fill="#000" fill-rule="nonzero" d="M20.707 19.543a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0M15 7.25a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m7-2a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path></svg:g></svg:g>`,
})
export class CryptocurrencyColorGrtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
