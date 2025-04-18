import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riReceiptFillIcon],svg[ri-receipt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4L6 2L3 4v15a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-2H7v2a1 1 0 1 1-2 0v-4h16V4l-3-2l-3 2l-3-2z"></svg:path>`,
})
export class RiReceiptFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
