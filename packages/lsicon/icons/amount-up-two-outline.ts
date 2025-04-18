import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountUpTwoOutlineIcon],svg[lsicon-amount-up-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.708 12.66h6m-3-9h3m3.746 10.43v-11m-2.5 1.792l2.5-2.293l2.5 2.293M3.708 6.661h4m-5 3h5"></svg:path>`,
})
export class LsiconAmountUpTwoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
