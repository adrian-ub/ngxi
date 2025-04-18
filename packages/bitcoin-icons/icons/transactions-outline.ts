import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTransactionsOutlineIcon],svg[bitcoin-icons-transactions-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="5.5" cy="7.5" r="1"></svg:circle><svg:path stroke-linecap="round" d="M8.5 6.5h11m-11 2h6"></svg:path><svg:circle cx="5.5" cy="12" r="1"></svg:circle><svg:path stroke-linecap="round" d="M8.5 11h8m-8 2h7"></svg:path><svg:circle cx="5.5" cy="16.5" r="1"></svg:circle><svg:path stroke-linecap="round" d="M8.5 15.5H18m-9.5 2h4"></svg:path></svg:g>`,
})
export class BitcoinIconsTransactionsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
