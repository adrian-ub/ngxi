import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsVmMaintenanceIcon],svg[grommet-icons-vm-maintenance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M19 10V2H7v12h7V7H2v12h8m4 4l6-6m1-3a2 2 0 1 0 2 2"></svg:path>`,
})
export class GrommetIconsVmMaintenanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
