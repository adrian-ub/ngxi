import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarGridIcon],svg[pixelarticons-calendar-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v18H3zm2 2v2h14V5zm14 4h-6v2h6zm0 4h-6v2h6zm0 4h-6v2h6zm-8 2v-2H5v2zm-6-4h6v-2H5zm0-4h6V9H5z"></svg:path>`,
})
export class PixelarticonsCalendarGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
