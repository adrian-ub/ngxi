import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCalendarIcon],svg[icon-park-solid-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCalendar0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M5 19h38v21a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"></svg:path><svg:path stroke="#fff" d="M5 9a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v10H5z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 4v8m16-8v8"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M28 34h6m-20 0h6m8-8h6m-20 0h6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCalendar0)"></svg:path>`,
})
export class IconParkSolidCalendarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
