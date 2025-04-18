import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundNetworkCellIcon],svg[ic-round-network-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.41 22H21c.55 0 1-.45 1-1V4.41c0-.89-1.08-1.34-1.71-.71L3.71 20.29c-.63.63-.19 1.71.7 1.71M20 20h-3V9.83l3-3z"></svg:path>`,
})
export class IcRoundNetworkCellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
