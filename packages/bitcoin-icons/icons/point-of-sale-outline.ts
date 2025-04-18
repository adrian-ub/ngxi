import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsPointOfSaleOutlineIcon],svg[bitcoin-icons-point-of-sale-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="11" height="15" x="6.5" y="4.5" rx="1.5"></svg:rect><svg:path stroke-linejoin="round" d="M8.5 6.5h7v5h-7z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.5 17.5h1m5 0h1m-4 0h1m-4-2h1m5 0h1m-4 0h1m-4-2h1m5 0h1m-4 0h1"></svg:path></svg:g>`,
})
export class BitcoinIconsPointOfSaleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
