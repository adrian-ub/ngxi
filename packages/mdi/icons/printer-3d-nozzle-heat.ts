import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleHeatIcon],svg[mdi-printer-3d-nozzle-heat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h10v5h2v6h-2.5L10 17H8l-3.5-4H2V7h2zm19 12.5l-1.4 2.2l1.4 2.2l-2 3.1l-1.8-.9l1.5-2.2l-1.5-2.2l2-3.1zm-4.3 0l-1.5 2.2l1.5 2.2l-2 3.1l-1.8-.9l1.4-2.2l-1.4-2.2l2-3.1z"></svg:path>`,
})
export class MdiPrinter3dNozzleHeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
