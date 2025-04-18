import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsCartOutlineIcon],svg[bitcoin-icons-cart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="10" cy="19" r="1.5"></svg:circle><svg:circle cx="17" cy="19" r="1.5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M3.5 4h2l3.504 11H17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8.224 12.5L6.3 6.5h12.507a.5.5 0 0 1 .475.658l-1.667 5a.5.5 0 0 1-.474.342z"></svg:path></svg:g>`,
})
export class BitcoinIconsCartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
