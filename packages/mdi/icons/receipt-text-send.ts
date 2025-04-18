import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptTextSendIcon],svg[mdi-receipt-text-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 20.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5L18 2l1.5 1.5L21 2v12.26l-3-1.5V11H6v2h6v2H6v2h6v5l-1.5-1.5L9 22l-1.5-1.5L6 22zM6 7v2h12V7zm8 6l10 5l-10 5v-4l4-1l-4-1z"></svg:path>`,
})
export class MdiReceiptTextSendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
