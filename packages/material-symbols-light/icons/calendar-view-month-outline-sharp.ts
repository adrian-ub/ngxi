import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarViewMonthOutlineSharpIcon],svg[material-symbols-light-calendar-view-month-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 11.5h4.673V6H4zm5.673 0h4.654V6H9.673zm5.654 0H20V6h-4.673zM4 18h4.673v-5.5H4zm5.673 0h4.654v-5.5H9.673zm5.654 0H20v-5.5h-4.673zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarViewMonthOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
