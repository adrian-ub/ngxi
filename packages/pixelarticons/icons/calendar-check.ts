import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarCheckIcon],svg[pixelarticons-calendar-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v2h4v18H3V4h4V2h2v2h6zm4 6V6H5v2zm0 2H5v10h14zm-3 2v2h-2v-2zm-4 4v-2h2v2zm-2 0h2v2h-2zm0 0H8v-2h2z"></svg:path>`,
})
export class PixelarticonsCalendarCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
