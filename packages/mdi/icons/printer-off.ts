import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiPrinterOffIcon],svg[mdi-printer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3v1.18L8.82 7H18V3zM2.28 3L1 4.27L4.75 8A3.02 3.02 0 0 0 2 11v6h4v4h11.73l2 2L21 21.72zm7.54 5l9 9H22v-6a3 3 0 0 0-3-3zM19 10a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M8 14h2.73l5 5H8z"></svg:path>`,
})
export class MdiPrinterOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
