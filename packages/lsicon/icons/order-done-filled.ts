import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconOrderDoneFilledIcon],svg[lsicon-order-done-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 1a.5.5 0 0 0-.477.65l.11.35H3.5a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5h-1.632l.11-.35A.5.5 0 0 0 10.5 1zm.68 1h3.64l-.313 1H6.493zm1.674 8.854l3.5-3.5l-.707-.708L7.5 9.793L5.854 8.146l-.708.708l2 2a.5.5 0 0 0 .708 0" clip-rule="evenodd"></svg:path>`,
})
export class LsiconOrderDoneFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
