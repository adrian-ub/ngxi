import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextMinusOutlineIcon],svg[mdi-invoice-text-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34c-.63-.22-1.3-.34-2-.34V5H5v13.26l1-.66l3 2l3-2l1.04.69c-.04.21-.04.47-.04.71c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM17 9V7H7v2zm-2 4v-2H7v2zm0 5v2h8v-2z"></svg:path>`,
})
export class MdiInvoiceTextMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
