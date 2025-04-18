import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleAlertOutlineIcon],svg[mdi-printer-3d-nozzle-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h10v5h2v6h-2.5L13 17h-2l-3.5-4H5V7h2zm3 20H2v-2h8c.6 0 1-.5 1-1v-1h2v1c0 1.7-1.3 3-3 3M7 9v2h1.5l3.5 4l3.5-4H17V9h-2V4H9v5zm14 4V7h2v6zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiPrinter3dNozzleAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
