import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextArrowRightIcon],svg[mdi-invoice-text-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v10.34A6.005 6.005 0 0 0 13 19c0 .65.1 1.28.3 1.86L12 20l-3 2l-3-2zM17 9V7H7v2zm-2 4v-2H7v2zm4 9v-2h-4v-2h4v-2l3 3z"></svg:path>`,
})
export class MdiInvoiceTextArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
