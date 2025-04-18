import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconReceiptOutlineIcon],svg[lsicon-receipt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5 6h6M5 8.5h6m-8.5 5v-11h11v11l-1.5-1l-2 1l-2-1l-2 1l-2-1z"></svg:path>`,
})
export class LsiconReceiptOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
