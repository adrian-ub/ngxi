import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bitcoinIconsRelayOutlineIcon],svg[bitcoin-icons-relay-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round"><svg:path d="M10.689 19.13A7.25 7.25 0 0 0 14.1 5.06m-4.098-.03a7.25 7.25 0 0 0-2.837 12.372"></svg:path><svg:path d="M16.387 13.004a4.5 4.5 0 1 0-2.45 3.058"></svg:path><svg:path d="M10.794 10.732a1.75 1.75 0 1 1 .613 2.914"></svg:path></svg:g>`,
})
export class BitcoinIconsRelayOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
