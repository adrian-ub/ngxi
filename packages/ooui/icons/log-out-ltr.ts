import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLogOutLtrIcon],svg[ooui-log-out-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8V1H3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v-2H3z"></svg:path><svg:path fill="currentColor" d="M13 5v4H5v2h8v4l6-5z"></svg:path>`,
})
export class OouiLogOutLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
