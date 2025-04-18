import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCircleSucceedFilledIcon],svg[lsicon-circle-succeed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m-.646 9.354l4.5-4.5l-.708-.708L7 9.293L4.854 7.146l-.708.708l2.5 2.5a.5.5 0 0 0 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCircleSucceedFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
