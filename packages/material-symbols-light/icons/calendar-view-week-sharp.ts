import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarViewWeekSharpIcon],svg[material-symbols-light-calendar-view-week-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.442 18.23V5.77h3.452v12.46zm-4.336 0V5.77h3.452v12.46zm-4.337 0V5.77h3.452v12.46zm13.01 0V5.77h3.452v12.46z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarViewWeekSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
