import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSharedWalletOutlineIcon],svg[bitcoin-icons-shared-wallet-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="square" stroke-linejoin="round" d="M15.5 8.504V4.5a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4"></svg:path><svg:rect width="6" height="10" x="12.5" y="10.5" rx="1"></svg:rect><svg:path stroke-linecap="square" d="M13.5 18h4m-11-3h4"></svg:path></svg:g>`,
})
export class BitcoinIconsSharedWalletOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
