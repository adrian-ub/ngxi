import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorSaiIcon],svg[cryptocurrency-color-sai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="16" cy="16" r="16" fill="#B68900"></svg:circle><svg:path fill="#FFF" d="M26.633 15.817L15.817 5L5 15.817l10.817 3.996zM8.364 14.9l7.333-7.498s7.169 7.333 7.471 7.48c.303.146-4.931 0-4.931 0l-2.42-2.475l-2.448 2.493zm7.453 5.674l10.816-4.024l-10.816 10.083L5 16.605z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorSaiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
