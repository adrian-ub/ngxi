import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceOutlineIcon],svg[mdi-invoice-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 22l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18zm-2-3.74V5H5v13.26l1-.66l3 2l3-2l3 2l3-2z"></svg:path>`,
})
export class MdiInvoiceOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
