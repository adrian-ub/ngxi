import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsSearchOutlineIcon],svg[bitcoin-icons-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="11" cy="11" r="5.5"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m15 15l4 4"></svg:path></svg:g>`,
})
export class BitcoinIconsSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
