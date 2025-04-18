import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockHour6FilledIcon],svg[tabler-clock-hour-6-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M11 15.5a1 1 0 0 0 2 0V7a1 1 0 0 0-2 0z"></svg:path>`,
})
export class TablerClockHour6FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
