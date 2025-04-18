import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorApexIcon],svg[cryptocurrency-color-apex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#1F4C9F"></svg:circle><svg:path fill="#FFF" d="M6 19.25L16 6.5l10 12.75v4.25L16 10.75L6 23.5zm10.5 1.25a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path></svg:g>`,
})
export class CryptocurrencyColorApexIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
