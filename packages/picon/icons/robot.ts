import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconRobotIcon],svg[picon-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5V4H2v1m4 0V4H5v1M0 7c0-7 8-7 8 0M4 4L1 0h1l2 3l2-3h1"></svg:path>`,
})
export class PiconRobotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
