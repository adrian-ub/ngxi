import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laReceiptIcon],svg[la-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.375V13H3v14h26V13h-4V5.375l-3 1.5l-2-1l-2 1l-2-1l-2 1l-2-1l-2 1zm5 2.75l2 1l2-1l2 1l2-1l2 1l1-.5V17H9V8.625l1 .5zM5 15h2v4h18v-4h2v10H5zm4 6v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class LaReceiptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
