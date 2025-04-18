import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCalendarViewDayIcon],svg[ic-sharp-calendar-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z"></svg:path>`,
})
export class IcSharpCalendarViewDayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
