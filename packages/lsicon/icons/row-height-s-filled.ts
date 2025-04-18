import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRowHeightSFilledIcon],svg[lsicon-row-height-s-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m4.5 1.822l2.838 2.602l-.676.737L5 3.637v8.726l1.662-1.524l.676.737L4.5 14.178l-2.838-2.602l.676-.737L4 12.363V3.637L2.338 5.161l-.676-.737zM14 4.5H9v-1h5zm0 4H9v-1h5zm0 4H9v-1h5z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconRowHeightSFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
