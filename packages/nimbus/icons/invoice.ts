import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nimbusInvoiceIcon],svg[nimbus-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.44 7.47h5.26v1.25H5.44zm0 2.36h5.26v1.25H5.44zm0-4.76h5.26v1.25H5.44z"></svg:path><svg:path fill="currentColor" d="M11.34 1L9.64.28L8.08 1L6.41.28L4.84 1L2.46 0v16l2.38-1l1.57.69L8.08 15l1.56.69l1.7-.69l2.2 1V0zm.94 13.11l-.92-.41l-1.69.69l-1.57-.72l-1.68.69l-1.55-.69l-1.15.47V1.86l1.15.47l1.55-.69l1.68.69l1.57-.69l1.69.69l.92-.41z"></svg:path>`,
})
export class NimbusInvoiceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
