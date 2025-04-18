import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceArrowLeftIcon],svg[mdi-invoice-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2l-3 2V3h18zM18 18v-2l-3 3l3 3v-2h4v-2z"></svg:path>`,
})
export class MdiInvoiceArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
