import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCalendarCheckFillIcon],svg[mage-calendar-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.75 3.935v-1.31a.75.75 0 1 0-1.5 0v1.25h-8.5v-1.25a.75.75 0 0 0-1.5 0v1.31a4.76 4.76 0 0 0-4 4.69v8.75A4.75 4.75 0 0 0 7 22.125h10a4.75 4.75 0 0 0 4.75-4.75v-8.75a4.76 4.76 0 0 0-4-4.69m-2.22 9.6l-3.4 3.4a1.4 1.4 0 0 1-.45.3a1.24 1.24 0 0 1-.54.11a1.2 1.2 0 0 1-.53-.11a1.3 1.3 0 0 1-.46-.3l-1.68-1.69a.75.75 0 1 1 1.06-1.06l1.62 1.62l3.32-3.33a.75.75 0 0 1 1.06 1.06m4.72-4.66H3.75v-.25a3.24 3.24 0 0 1 2.5-3.15v1.15a.75.75 0 1 0 1.5 0v-1.25h8.5v1.25a.75.75 0 1 0 1.5 0v-1.15a3.24 3.24 0 0 1 2.5 3.15z"></svg:path>`,
})
export class MageCalendarCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
