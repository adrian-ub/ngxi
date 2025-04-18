import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarMultipleCheckIcon],svg[pixelarticons-calendar-multiple-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2h2v2h4v10h-2v-4H7v6h6v2H5V4h4V2h2v2h6zm-6 4H7v2h14V6zm2 14v2H1V8h2v12zm2-2h2v2h-2zm4 2v2h-2v-2zm2-2h-2v2h2zm0 0v-2h2v2z"></svg:path>`,
})
export class PixelarticonsCalendarMultipleCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
