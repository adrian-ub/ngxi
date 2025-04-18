import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCreditCardOutlineIcon],svg[bitcoin-icons-credit-card-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:rect width="15" height="11" x="4.5" y="6.5" rx="1.5"></svg:rect><svg:path d="M19.5 9.5h-15"></svg:path><svg:path stroke-linecap="round" d="M11.5 12.5h-4m3 2h-3"></svg:path></svg:g>`,
})
export class BitcoinIconsCreditCardOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
