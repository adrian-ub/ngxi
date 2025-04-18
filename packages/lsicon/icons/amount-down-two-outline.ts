import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountDownTwoOutlineIcon],svg[lsicon-amount-down-two-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.708 3.66h6m-3 9h3m3.746-10.75v11m2.5-1.792l-2.5 2.293l-2.5-2.293M3.708 9.66h4m-5-3h5"></svg:path>`,
})
export class LsiconAmountDownTwoOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
