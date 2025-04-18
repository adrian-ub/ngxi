import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCalendarThreeIcon],svg[icon-park-solid-calendar-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCalendarThree0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="36" x="4" y="8" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" d="M4 20h40M4 32h40"></svg:path><svg:path stroke="#fff" d="M17 4v8m14-8v8"></svg:path><svg:path stroke="#000" d="M17 20v24m14-24v24"></svg:path><svg:path stroke="#fff" d="M44 13v26M4 13v26m10 5h20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCalendarThree0)"></svg:path>`,
})
export class IconParkSolidCalendarThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
