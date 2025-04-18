import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCalendarEventFilledIcon],svg[tdesign-calendar-event-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4h8V1h2v3h4v5H2V4h4V1h2zm14 7v11H2V11zm-3.5 3.5h-4v4h4z"></svg:path>`,
})
export class TdesignCalendarEventFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
