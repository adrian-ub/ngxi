import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenCalendarFill12Icon],svg[garden-calendar-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm6 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zM5 2h2v1a2 2 0 1 0 4 0V2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1v1a2 2 0 1 0 4 0zm2 5a1 1 0 1 0-2 0a1 1 0 0 0 2 0m2 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m-2 2a1 1 0 1 0-2 0a1 1 0 0 0 2 0m-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2m7-1a1 1 0 1 0-2 0a1 1 0 0 0 2 0"></svg:path>`,
})
export class GardenCalendarFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
