import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCalendarFIcon],svg[jam-calendar-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3v2a2 2 0 1 0 4 0V3h6v2a2 2 0 1 0 4 0V3a3 3 0 0 1 3 3v2H0V6a3 3 0 0 1 3-3m17 7v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-6zM15 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1M5 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1"></svg:path>`,
})
export class JamCalendarFIcon {
  readonly viewBox = input("-2 -2.5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
