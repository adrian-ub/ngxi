import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCalendarThirtyTwoIcon],svg[icon-park-solid-calendar-thirty-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCalendarThirtyTwo0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#fff" stroke="#fff" d="M4 8h40v36H4z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M28 20v14h8V20z" clip-rule="evenodd"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 4v8m14-8v8"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M12 20h8v14h-8m8-7h-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCalendarThirtyTwo0)"></svg:path>`,
})
export class IconParkSolidCalendarThirtyTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
