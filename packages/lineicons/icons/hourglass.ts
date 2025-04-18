import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsHourglassIcon],svg[lineicons-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.25a.75.75 0 0 0 0 1.5h1.25V6a6.75 6.75 0 0 0 3.655 6a6.75 6.75 0 0 0-3.655 6v1.25H4a.75.75 0 0 0 0 1.5h16a.75.75 0 0 0 0-1.5h-1.25V18a6.75 6.75 0 0 0-3.655-6a6.75 6.75 0 0 0 3.655-6V4.75H20a.75.75 0 0 0 0-1.5zm7.99 9.5h.02A5.25 5.25 0 0 1 17.25 18v1.25H6.75V18a5.25 5.25 0 0 1 5.24-5.25m.02-1.5h-.02A5.25 5.25 0 0 1 6.75 6V4.75h10.5V6a5.25 5.25 0 0 1-5.24 5.25"></svg:path>`,
})
export class LineiconsHourglassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
