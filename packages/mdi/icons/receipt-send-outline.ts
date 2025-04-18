import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiReceiptSendOutlineIcon],svg[mdi-receipt-send-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 2l1.5 1.5L21 2v12.26l-2-1V5H5v14h7v3l-1.5-1.5L9 22l-1.5-1.5L6 22l-1.5-1.5L3 22V2l1.5 1.5L6 2l1.5 1.5L9 2l1.5 1.5L12 2l1.5 1.5L15 2l1.5 1.5zm-4 17l4-1l-4-1v-4l10 5l-10 5z"></svg:path>`,
})
export class MdiReceiptSendOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
