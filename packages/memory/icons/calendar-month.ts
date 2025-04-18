import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[memoryCalendarMonthIcon],svg[memory-calendar-month-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H3v-1H2V3h1V2h2V0h2v2h8V0h2v2h2v1h1v16h-1zM4 4v2h14V4zm0 4v10h14V8zm10 6h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2H6zm0-4h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z"></svg:path>`,
})
export class MemoryCalendarMonthIcon {
  readonly viewBox = input("0 0 22 22")
  readonly width = input("1em")
  readonly height = input("1em")
}
