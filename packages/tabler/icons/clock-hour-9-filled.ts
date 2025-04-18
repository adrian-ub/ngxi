import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockHour9FilledIcon],svg[tabler-clock-hour-9-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-4.883 9.653A1 1 0 0 0 13 12V7a1 1 0 0 0-2 0v4H8.5a1 1 0 0 0-.993.883L7.5 12a1 1 0 0 0 1 1H12z"></svg:path>`,
})
export class TablerClockHour9FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
