import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarEditFilledIcon],svg[tdesign-calendar-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4H8V1H6v3H2v5h20V4h-4V1h-2zm6 9v-2H2v11h10v-1a8 8 0 0 1 8-8z"></svg:path><svg:path fill="currentColor" d="m23.414 18.213l-4.127-4.127L14 19.372l.001 4.128h4.127zM17.201 19l1.299 1.3l-1.2 1.2H16v-1.3z"></svg:path>`,
})
export class TdesignCalendarEditFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
