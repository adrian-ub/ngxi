import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAmountDownFilledIcon],svg[lsicon-amount-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12.363V2h1v10.363l1.662-1.524l.676.737L4.5 14.178l-2.838-2.602l.676-.737zM14 4H9V3h5zm0 3H9V6h5zm0 3.5H9v-1h5zm0 3.5H9v-1h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAmountDownFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
