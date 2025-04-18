import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRobotIcon],svg[icon-park-robot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="30" height="26" x="9" y="17" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 9L28 17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 9L20 17"></svg:path><svg:circle cx="34" cy="7" r="2"></svg:circle><svg:circle cx="14" cy="7" r="2"></svg:circle><svg:rect width="16" height="8" x="16" y="24" fill="#2F88FF" rx="4"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 24H4V34H9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M39 24H44V34H39"></svg:path></svg:g>`,
})
export class IconParkRobotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
