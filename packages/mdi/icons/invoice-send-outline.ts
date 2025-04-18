import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceSendOutlineIcon],svg[mdi-invoice-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 18l-10-5v4l4 1l-4 1v4zm-5-4.74l2 1V3H3v19l3-2l3 2l3-2v-2.4l-3 2l-3-2l-1 .66V5h14z"></svg:path>`,
})
export class MdiInvoiceSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
