import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsHostMaintenanceIcon],svg[grommet-icons-host-maintenance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="m14 23l6-6m1-3a2 2 0 1 0 2 2M17 4h1v1h-1zm-7 19H3V1h18v10M3 13h14M3 18h10M3 8h18"></svg:path>`,
})
export class GrommetIconsHostMaintenanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
