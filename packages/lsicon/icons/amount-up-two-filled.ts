import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountUpTwoFilledIcon],svg[lsicon-amount-up-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.454 1.91l2.838 2.604l-.676.737l-1.662-1.525V14.09h-1V3.726L9.292 5.251l-.676-.737zM7.708 4.16h-3v-1h3zm0 3h-4v-1h4zm0 3h-5v-1h5zm0 3h-6v-1h6z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountUpTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
