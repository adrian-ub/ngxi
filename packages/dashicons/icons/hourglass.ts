import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsHourglassIcon],svg[dashicons-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 16H15c-.1-2.5-.6-4.4-3.3-6c2.6-1.6 3.2-3.5 3.3-6h.5c.6 0 1-.4 1-1s-.4-1-1-1h-11c-.6 0-1 .4-1 1s.4 1 1 1H5c.1 2.5.6 4.4 3.3 6c-2.6 1.6-3.2 3.5-3.3 6h-.5c-.6 0-1 .4-1 1s.4 1 1 1h11c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class DashiconsHourglassIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
