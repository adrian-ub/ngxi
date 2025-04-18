import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinter3dNozzleOffOutlineIcon],svg[mdi-printer-3d-nozzle-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.1 21.5L2.4 1.7L1.1 3l4 4H5v6h2.5l3.5 4h2l1-1.1l6.9 6.9zM12 15l-3.5-4H7V9h.1l5.4 5.4zm-1 3h2v1c0 1.7-1.3 3-3 3H2v-2h8c.6 0 1-.4 1-1zM9 5.8l-2-2V2h10v5h2v6h-2.8l-1.3-1.3l.6-.7H17V9h-2V4H9z"></svg:path>`,
})
export class MdiPrinter3dNozzleOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
