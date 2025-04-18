import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextSendOutlineIcon],svg[mdi-invoice-text-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 18l-10 5v-4l4-1l-4-1v-4zm-3-3.74l-2-1V5H5v13.26l1-.66l3 2l3-2V20l-3 2l-3-2l-3 2V3h18zM17 7v2H7V7zm-5 6v-2H7v2z"></svg:path>`,
})
export class MdiInvoiceTextSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
