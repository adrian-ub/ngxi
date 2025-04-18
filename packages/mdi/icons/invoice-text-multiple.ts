import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextMultipleIcon],svg[mdi-invoice-text-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H2v15h2V4h13zm4 20l-2.5-1.68L16 22l-2.5-1.68L11 22l-2.5-1.68L6 22V6h15zM10 10v2h7v-2zm5 4h-5v2h5z"></svg:path>`,
})
export class MdiInvoiceTextMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
