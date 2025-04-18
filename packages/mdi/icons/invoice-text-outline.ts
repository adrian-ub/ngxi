import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextOutlineIcon],svg[mdi-invoice-text-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7v2H7V7zm-2 4v2H7v-2zm3 9l3 2V3H3v19l3-2l3 2l3-2l3 2zm1-15v13.26l-1-.66l-3 2l-3-2l-3 2l-3-2l-1 .66V5z"></svg:path>`,
})
export class MdiInvoiceTextOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
