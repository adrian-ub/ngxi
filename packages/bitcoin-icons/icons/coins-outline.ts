import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCoinsOutlineIcon],svg[bitcoin-icons-coins-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path d="M16.495 10.255a6.5 6.5 0 0 1-6.24 6.24a4.5 4.5 0 1 0 6.24-6.24Z"></svg:path><svg:circle cx="10" cy="10" r="4.5"></svg:circle></svg:g>`,
})
export class BitcoinIconsCoinsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
