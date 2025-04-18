import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarViewDaySharpIcon],svg[material-symbols-light-calendar-view-day-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19.385v-1h16v1zM4 16V8h16v8zM4 5.615v-1h16v1z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarViewDaySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
