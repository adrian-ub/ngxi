import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCalendarViewMonthOutlineSharpIcon],svg[material-symbols-calendar-view-month-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11h4V6H4zm6 0h4V6h-4zm6 0h4V6h-4zM4 18h4v-5H4zm6 0h4v-5h-4zm6 0h4v-5h-4zM2 20V4h20v16z"></svg:path>`,
})
export class MaterialSymbolsCalendarViewMonthOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
