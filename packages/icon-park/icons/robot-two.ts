import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRobotTwoIcon],svg[icon-park-robot-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round" d="M5 35C5 33.8954 5.89543 33 7 33H41C42.1046 33 43 33.8954 43 35V42H5V35Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 18L34 18L28 12L34 6L42 6"></svg:path><svg:circle cx="8" cy="12" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M12 12L28 12"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 16L18 33"></svg:path></svg:g>`,
})
export class IconParkRobotTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
