import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiInvoiceTextSendIcon],svg[mdi-invoice-text-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v19l3-2l3 2l3-2v-7H7v-2h7.47L21 14.26V3zm14 6H7V7h10zm-3 14v-4l4-1l-4-1v-4l10 5z"></svg:path>`,
})
export class MdiInvoiceTextSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
