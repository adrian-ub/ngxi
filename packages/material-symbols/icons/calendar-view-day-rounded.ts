import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCalendarViewDayRoundedIcon],svg[material-symbols-calendar-view-day-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 17q-.825 0-1.412-.587T3 15V9q0-.825.588-1.412T5 7h14q.825 0 1.413.588T21 9v6q0 .825-.587 1.413T19 17zM3.975 5q-.425 0-.7-.288T3 4t.288-.712T4 3h16.025q.425 0 .7.288T21 4t-.288.713T20 5zm0 16q-.425 0-.7-.288T3 20t.288-.712T4 19h16.025q.425 0 .7.288T21 20t-.288.713T20 21z"></svg:path>`,
})
export class MaterialSymbolsCalendarViewDayRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
