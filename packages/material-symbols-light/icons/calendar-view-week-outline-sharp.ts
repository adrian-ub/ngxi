import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarViewWeekOutlineSharpIcon],svg[material-symbols-light-calendar-view-week-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 18h3.25V6H12.5zm-4.25 0h3.25V6H8.25zM4 18h3.25V6H4zm12.75 0H20V6h-3.25zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarViewWeekOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
