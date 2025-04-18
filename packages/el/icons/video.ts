import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[elVideoIcon],svg[el-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 145.898v908.203h1200V145.898zm147.144 147.218h905.713v613.77H147.144zm318.237 106.861v408.839L818.848 603.81z"></svg:path>`,
})
export class ElVideoIcon {
  readonly viewBox = input("0 0 1200 1200")
  readonly width = input("1em")
  readonly height = input("1em")
}
