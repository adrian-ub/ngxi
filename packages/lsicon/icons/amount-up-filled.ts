import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountUpFilledIcon],svg[lsicon-amount-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.5 1.91l2.838 2.604l-.676.737L5 3.726V14.09H4V3.726L2.338 5.251l-.676-.737zM13 4H8V3h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountUpFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
