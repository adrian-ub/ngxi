import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCalendarStroke12Icon],svg[garden-calendar-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1a1 1 0 0 1 2 0v1h4V1a1 1 0 1 1 2 0v1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1zm6 2H4a1 1 0 0 1-2 0H1v8h10V3h-1a1 1 0 1 1-2 0M7 6a1 1 0 1 1-2 0a1 1 0 0 1 2 0m3 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0M7 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0M4 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0m6 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0"></svg:path>`,
})
export class GardenCalendarStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
