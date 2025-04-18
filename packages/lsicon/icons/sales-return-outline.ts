import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconSalesReturnOutlineIcon],svg[lsicon-sales-return-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M14.5 5v8.5h-13V5m13 0L12 2.5H4L1.5 5m13 0h-13M6 10.5h4a1 1 0 1 0 0-2H5.5L7 7"></svg:path>`,
})
export class LsiconSalesReturnOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
