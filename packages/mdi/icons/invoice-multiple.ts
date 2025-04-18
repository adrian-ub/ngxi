import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceMultipleIcon],svg[mdi-invoice-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H2v15h2V4h13zm4 20l-2.5-1.68L16 22l-2.5-1.68L11 22l-2.5-1.68L6 22V6h15z"></svg:path>`,
})
export class MdiInvoiceMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
