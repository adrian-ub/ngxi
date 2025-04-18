import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidCalendarDotIcon],svg[icon-park-solid-calendar-dot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSCalendarDot0"><svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="40" x="4" y="4" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#000" d="M4 14h40"></svg:path><svg:path stroke="#fff" d="M44 11v12"></svg:path><svg:path stroke="#000" d="M12 22h4m6 0h4m6 0h4m-24 7h4m6 0h4m6 0h4m-24 7h4m6 0h4m6 0h4"></svg:path><svg:path stroke="#fff" d="M4 11v12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSCalendarDot0)"></svg:path>`,
})
export class IconParkSolidCalendarDotIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
