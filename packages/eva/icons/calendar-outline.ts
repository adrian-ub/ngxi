import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[evaCalendarOutlineIcon],svg[eva-calendar-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4h-1V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M6 6h1v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h1a1 1 0 0 1 1 1v4H5V7a1 1 0 0 1 1-1m12 14H6a1 1 0 0 1-1-1v-6h14v6a1 1 0 0 1-1 1"></svg:path><svg:circle cx="8" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 15h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class EvaCalendarOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
