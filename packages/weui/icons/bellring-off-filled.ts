import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiBellringOffFilledIcon],svg[weui-bellring-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m18.453 16.332l3.639 3.639l-1.06 1.06L4.06 4.061L5.12 3l2.697 2.697a6 6 0 0 1 2.21-1.365a2 2 0 1 1 3.945 0A6 6 0 0 1 18 10v4q0 1.166.453 2.332M17.88 20H5.187a1 1 0 0 1-.806-1.592Q6 16.203 6 14v-4c0-.572.08-1.125.23-1.65L17.878 20zM11 20h2v.2a1 1 0 1 1-2 0z"></svg:path>`,
})
export class WeuiBellringOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
