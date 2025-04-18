import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCalendarViewMonthSharpIcon],svg[material-symbols-calendar-view-month-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11.5V5h5.325v6.5zm6.325 0V5h5.35v6.5zm6.35 0V5H21v6.5zM3 19v-6.5h5.325V19zm6.325 0v-6.5h5.35V19zm6.35 0v-6.5H21V19z"></svg:path>`,
})
export class MaterialSymbolsCalendarViewMonthSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
