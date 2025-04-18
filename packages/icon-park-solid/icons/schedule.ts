import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidScheduleIcon],svg[icon-park-solid-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSSchedule0"><svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="40" height="30" x="4" y="10" fill="#fff" stroke="#fff" stroke-linejoin="round" rx="2"></svg:rect><svg:path stroke="#fff" d="M14 6v8"></svg:path><svg:path stroke="#000" d="M25 23H14m20 8H14"></svg:path><svg:path stroke="#fff" d="M34 6v8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSSchedule0)"></svg:path>`,
})
export class IconParkSolidScheduleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
