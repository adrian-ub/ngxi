import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsWalletOutlineIcon],svg[bitcoin-icons-wallet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M15 17.5h3.005a1.5 1.5 0 0 0 1.5-1.5V8a1.5 1.5 0 0 0-1.5-1.5H15A1.5 1.5 0 0 1 16.5 8v8a1.5 1.5 0 0 1-1.5 1.5Z"></svg:path><svg:rect width="12" height="11" x="4.5" y="6.5" rx="1.5"></svg:rect><svg:circle cx="8.75" cy="11.75" r="1.25"></svg:circle></svg:g>`,
})
export class BitcoinIconsWalletOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
