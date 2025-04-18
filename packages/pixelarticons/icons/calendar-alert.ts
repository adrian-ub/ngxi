import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarAlertIcon],svg[pixelarticons-calendar-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V4H5v2H3v14h14V6h-2V4h-2v2H7zm-2 5V8h10v2zm0 2h10v6H5zm16-3V8h-2v6h2zm0 6h-2v2h2z"></svg:path>`,
})
export class PixelarticonsCalendarAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
