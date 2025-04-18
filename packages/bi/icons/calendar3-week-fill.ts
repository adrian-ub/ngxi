import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biCalendar3WeekFillIcon],svg[bi-calendar3-week-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2h16a2 2 0 0 0-2-2zM0 14V3h16v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2m12-8a1 1 0 1 0 2 0a1 1 0 0 0-2 0M5 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0m5-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2M2 9a1 1 0 1 0 2 0a1 1 0 0 0-2 0"></svg:path>`,
})
export class BiCalendar3WeekFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
