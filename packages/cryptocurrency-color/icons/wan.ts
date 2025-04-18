import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cryptocurrencyColorWanIcon],svg[cryptocurrency-color-wan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd"><svg:circle cx="16" cy="16" r="16" fill="#136AAD"></svg:circle><svg:path fill="#FFF" d="m7 11.09l2.667 1.13v6.353L16 14.786l6.394 3.787V12.22L25 11.09v11.974l-9-5.315l-9 5.315zm.303-.489L16 5.5l8.758 5.101l-2.364.978L16 7.883l-6.333 3.696zm1.879 11.821l1.97-1.13l4.878 2.825l4.818-2.825l2.03 1.13L16.03 26.5z"></svg:path></svg:g>`,
})
export class CryptocurrencyColorWanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
