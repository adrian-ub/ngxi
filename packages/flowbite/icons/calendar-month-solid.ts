import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flowbiteCalendarMonthSolidIcon],svg[flowbite-calendar-month-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5 5a1 1 0 0 0 1-1a1 1 0 1 1 2 0a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1a1 1 0 1 1 2 0a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1a1 1 0 1 1 2 0a1 1 0 0 0 1 1a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2M3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m6.01-6a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-10 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0m6 0a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 0a1 1 0 1 1 2 0a1 1 0 0 1-2 0" clip-rule="evenodd"></svg:path>`,
})
export class FlowbiteCalendarMonthSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
