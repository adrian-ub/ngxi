import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockHour7FilledIcon],svg[tabler-clock-hour-7-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.007 8.777L13 12V7a1 1 0 0 0-2 0v4.696l-1.832 2.75a1 1 0 0 0 .184 1.316l.093.07a1 1 0 0 0 1.387-.277l2.024-3.038l.06-.116l.032-.081l.03-.109z"></svg:path>`,
})
export class TablerClockHour7FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
