import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggCalendarTodayIcon],svg[gg-calendar-today-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M15 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zM5 18V7h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class GgCalendarTodayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
