import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiBellringOnFilledIcon],svg[weui-bellring-on-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 20H5.187a1 1 0 0 1-.806-1.592Q6 16.203 6 14v-4a6 6 0 0 1 4.027-5.668a2 2 0 1 1 3.945 0A6 6 0 0 1 18 10v4q0 2.205 1.62 4.408A1 1 0 0 1 18.812 20H13v.2a1 1 0 1 1-2 0z"></svg:path>`,
})
export class WeuiBellringOnFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
