import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneSignalCellularNoSimIcon],svg[ic-twotone-signal-cellular-no-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.83 5L9.36 6.47L17 14.11V5zM7 9.79V19h9.23z" opacity=".3"></svg:path><svg:path fill="currentColor" d="M10.83 5H17v9.11l2 2V5c0-1.1-.9-2-2-2h-7L7.94 5.06l1.42 1.42zm10.43 16.21L3.79 3.74L2.38 5.15L5 7.77V19a2 2 0 0 0 2 2h11.23l1.62 1.62zM7 19V9.79L16.23 19z"></svg:path>`,
})
export class IcTwotoneSignalCellularNoSimIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
