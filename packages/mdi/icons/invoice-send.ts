import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceSendIcon],svg[mdi-invoice-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 22V3h18v11.26l-9-4.5V20l-3 2l-3-2zm21-4l-10 5v-4l4-1l-4-1v-4z"></svg:path>`,
})
export class MdiInvoiceSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
