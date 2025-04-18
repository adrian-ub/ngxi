import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsTransactionsFilledIcon],svg[bitcoin-icons-transactions-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M8 6.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path><svg:circle cx="5.5" cy="12" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M8 11a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8A.5.5 0 0 1 8 11m0 2a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 8 13" clip-rule="evenodd"></svg:path><svg:circle cx="5.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" fill-rule="evenodd" d="M8 15.5a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 0 1H8.5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" clip-rule="evenodd"></svg:path>`,
})
export class BitcoinIconsTransactionsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
