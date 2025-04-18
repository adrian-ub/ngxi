import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorWprIcon],svg[cryptocurrency-color-wpr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#ffe600"></svg:circle><svg:path fill="#fff" d="M3.993 5.425a16 16 0 0 1 2.65-2.405l4.452 15.918l1.973-8.438h3.74l1.972 8.438l2.337-8.438h3.749l.035.15l4.074 14.714a16 16 0 0 1-2.55 2.775l-3.437-12.41l-1.96 7.078l-.035.15h-4.186l-1.869-6.932l-1.87 6.932H8.882l-.035-.15z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorWprIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
