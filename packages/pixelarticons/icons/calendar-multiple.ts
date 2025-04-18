import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarMultipleIcon],svg[pixelarticons-calendar-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h2v2h4v14H5V4h4V2h2v2h6zm-6 4H7v2h14V6zm-4 4v6h14v-6zM3 20h16v2H1V8h2z"></svg:path>`,
})
export class PixelarticonsCalendarMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
