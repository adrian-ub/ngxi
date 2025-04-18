import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCalendarSearchIcon],svg[pixelarticons-calendar-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 2h2v2h4v8h-2v-2H5v10h6v2H3V4h4V2h2v2h6zM9 6H5v2h14V6zm8 6v2h-4v-2zm-4 6h-2v-4h2zm4 0h-4v2h6v2h2v-2h-2v-6h-2z"></svg:path>`,
})
export class PixelarticonsCalendarSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
