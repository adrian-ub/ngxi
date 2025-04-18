import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextIcon],svg[mdi-invoice-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v19l3-2l3 2l3-2l3 2l3-2l3 2V3zm14 4v2H7V7zm-2 4v2H7v-2z"></svg:path>`,
})
export class MdiInvoiceTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
