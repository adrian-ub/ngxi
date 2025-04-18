import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCalendarViewWeekSharpIcon],svg[material-symbols-calendar-view-week-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 19V5h3.375v14zm-4.875 0V5h3.375v14zM3 19V5h3.375v14zm14.625 0V5H21v14z"></svg:path>`,
})
export class MaterialSymbolsCalendarViewWeekSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
