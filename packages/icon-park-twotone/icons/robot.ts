import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRobotIcon],svg[icon-park-twotone-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRobot0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="30" height="26" x="9" y="17" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="m33 9l-5 8M15 9l5 8"></svg:path><svg:circle cx="34" cy="7" r="2"></svg:circle><svg:circle cx="14" cy="7" r="2"></svg:circle><svg:rect width="16" height="8" x="16" y="24" fill="#555" rx="4"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 24H4v10h5m30-10h5v10h-5"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRobot0)"></svg:path>`,
})
export class IconParkTwotoneRobotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
