import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCalendar3Day20RegularIcon],svg[fluent-calendar-3-day-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 3A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5v-9A2.5 2.5 0 0 1 5.5 3zm0 1h-9A1.5 1.5 0 0 0 4 5.5v9A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 4m-8 2a.5.5 0 0 1 .492.41L7 6.5v7a.5.5 0 0 1-.992.09L6 13.5v-7a.5.5 0 0 1 .5-.5M10 6a.5.5 0 0 1 .492.41l.008.09v7a.5.5 0 0 1-.992.09L9.5 13.5v-7A.5.5 0 0 1 10 6m3.5 0a.5.5 0 0 1 .492.41L14 6.5v7a.5.5 0 0 1-.992.09L13 13.5v-7a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentCalendar3Day20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
