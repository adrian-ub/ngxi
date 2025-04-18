import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarViewDayOutlineSharpIcon],svg[material-symbols-light-calendar-view-day-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19.385v-1h16v1zM4 16V8h16v8zm1-1h14V9H5zM4 5.615v-1h16v1zM5 15V9z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarViewDayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
