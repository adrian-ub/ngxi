import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCalendarThirtyIcon],svg[icon-park-solid-calendar-thirty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCalendarThirty0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" d="M4 14h40"></svg:path><svg:path stroke="#fff" d="M4 11v12m40-12v12"></svg:path><svg:path stroke="#000" d="M28 22v14h8V22z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" d="M12 22h8v14h-8m8-7h-6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCalendarThirty0)"></svg:path>`,
})
export class IconParkSolidCalendarThirtyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
