import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarWeekendIcon],svg[pixelarticons-calendar-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h-2v2H9V2H7v2H3v18h18V4h-4zM7 6h12v2H5V6zM5 20V10h14v10zm12-8h-2v6h2z"></svg:path>`,
})
export class PixelarticonsCalendarWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
