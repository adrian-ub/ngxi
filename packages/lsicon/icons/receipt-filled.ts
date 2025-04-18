import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconReceiptFilledIcon],svg[lsicon-receipt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H2v12.434l2.036-1.357L6 14.059l2-1l2 1l1.964-.982L14 14.434zM5 6.5h6v-1H5zM5 9h6V8H5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconReceiptFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
