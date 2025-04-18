import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxPrinterIcon],svg[bx-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7h-1V2H6v5H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h2v3h12v-3h2c1.103 0 2-.897 2-2v-7c0-1.654-1.346-3-3-3M8 4h8v3H8zm8 16H8v-4h8zm4-3h-2v-3H6v3H4v-7c0-.551.449-1 1-1h14c.552 0 1 .449 1 1z"></svg:path><svg:path fill="currentColor" d="M14 10h4v2h-4z"></svg:path>`,
})
export class BxPrinterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
