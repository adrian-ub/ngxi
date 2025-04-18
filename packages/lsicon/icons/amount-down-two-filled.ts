import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountDownTwoFilledIcon],svg[lsicon-amount-down-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10.954 12.274V1.91h1v10.363l1.662-1.525l.676.737l-2.838 2.603l-2.838-2.603l.676-.737zM7.708 4.16h-6v-1h6zm0 3h-5v-1h5zm0 3h-4v-1h4zm0 3h-3v-1h3z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountDownTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
