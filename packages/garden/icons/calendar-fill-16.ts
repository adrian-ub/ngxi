import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCalendarFill16Icon],svg[garden-calendar-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 1a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0zm8 0a1 1 0 1 1 2 0v3a1 1 0 1 1-2 0zM6 2h4v2a2 2 0 1 0 4 0V2h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1v2a2 2 0 1 0 4 0zm3 7a1 1 0 1 0-2 0a1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-3 3a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m9-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class GardenCalendarFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
