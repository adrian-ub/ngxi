import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorMtlIcon],svg[cryptocurrency-color-mtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#1E1F25"></svg:circle><svg:path fill="#FFF" d="M8 9h1v14H8zm5 3h1v9h-1zm5 2h1v5h-1zm5-5h1v14h-1z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorMtlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
