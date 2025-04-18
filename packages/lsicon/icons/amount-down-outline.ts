import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountDownOutlineIcon],svg[lsicon-amount-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M9 3.5h5m-5 10h5M9 10h5M9 6.5h5M4.5 2v11M7 11.207L4.5 13.5L2 11.207"></svg:path>`,
})
export class LsiconAmountDownOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
