import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceMinusIcon],svg[mdi-invoice-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v10.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2zm12-4v2h8v-2z"></svg:path>`,
})
export class MdiInvoiceMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
