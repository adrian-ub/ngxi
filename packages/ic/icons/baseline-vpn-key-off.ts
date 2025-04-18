import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineVpnKeyOffIcon],svg[ic-baseline-vpn-key-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.83 18H21v-4h2v-4H12.83zm-1.05 4.61l1.41-1.41L2.81 2.81L1.39 4.22l2.59 2.59A6.01 6.01 0 0 0 1 12c0 3.31 2.69 6 6 6c2.21 0 4.15-1.2 5.18-2.99zM8.99 11.82c.01.06.01.12.01.18c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2c.06 0 .12 0 .18.01z"></svg:path>`,
})
export class IcBaselineVpnKeyOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
