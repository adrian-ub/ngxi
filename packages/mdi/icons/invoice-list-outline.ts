import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceListOutlineIcon],svg[mdi-invoice-list-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v2h-2V7zm-4 0v2H7V7zm0 4H7v2h6zm2 0v2h2v-2zm6 11l-3-2l-3 2l-3-2l-3 2l-3-2l-3 2V3h18zm-2-3.74V5H5v13.26l1-.66l3 2l3-2l3 2l3-2z"></svg:path>`,
})
export class MdiInvoiceListOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
