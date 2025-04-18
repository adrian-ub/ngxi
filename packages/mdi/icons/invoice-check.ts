import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceCheckIcon],svg[mdi-invoice-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.7 0 1.37.12 2 .34V3H3v19l3-2l3 2l3-2l1.3.86c-.2-.58-.3-1.21-.3-1.86c0-3.31 2.69-6 6-6m-3.5 6l2.75 3L23 17.23l-1.16-1.41l-3.59 3.59l-1.59-1.59z"></svg:path>`,
})
export class MdiInvoiceCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
