import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsNode0ConnectionsOutlineIcon],svg[bitcoin-icons-node-0-connections-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" d="m13.5 7l3.5 3.5m-10 3l3.5 3.5m0-10L7 10.5m10 3L13.5 17"></svg:path><svg:circle cx="12" cy="5.5" r="2"></svg:circle><svg:circle cx="12" cy="18.5" r="2"></svg:circle><svg:circle cx="5.5" cy="12" r="2"></svg:circle><svg:circle cx="18.5" cy="12" r="2"></svg:circle></svg:g>`,
})
export class BitcoinIconsNode0ConnectionsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
