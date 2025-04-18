import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGamepadIcon],svg[tdesign-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.06 3h19.88l1.124 18H16.28l-1-3H8.721l-1 3H.936zm1.88 2l-.876 14H6.28l1-3h9.442l1 3h3.215L20.06 5zM9 7.5v2h2v2H9v2H7v-2H5v-2h2v-2zm7 0h2.004v2.004H16zm0 3.996h2.004V13.5H16z"></svg:path>`,
})
export class TdesignGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
