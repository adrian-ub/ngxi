import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWeekendIcon],svg[material-symbols-weekend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20q-1.25 0-2.125-.875T1 17v-5q0-.825.588-1.412T3 10t1.413.588T5 12v4h14v-4q0-.825.588-1.412T21 10t1.413.588T23 12v5q0 1.25-.875 2.125T20 20zm3-6v-2q0-1.325-.862-2.325T4 8.3V7q0-1.25.875-2.125T7 4h10q1.25 0 2.125.875T20 7v1.3q-1.325.275-2.162 1.313T17 12v2z"></svg:path>`,
})
export class MaterialSymbolsWeekendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
