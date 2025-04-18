import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCalendarViewWeekIcon],svg[material-symbols-calendar-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.75 19q-.425 0-.712-.288T12.75 18V6q0-.425.288-.712T13.75 5h1.375q.425 0 .713.288t.287.712v12q0 .425-.288.713t-.712.287zm-4.875 0q-.425 0-.712-.288T7.874 18V6q0-.425.288-.712T8.875 5h1.375q.425 0 .713.288T11.25 6v12q0 .425-.288.713T10.25 19zM4 19q-.425 0-.712-.288T3 18V6q0-.425.288-.712T4 5h1.375q.425 0 .713.288T6.375 6v12q0 .425-.288.713T5.376 19zm14.625 0q-.425 0-.712-.288T17.625 18V6q0-.425.288-.712T18.625 5H20q.425 0 .713.288T21 6v12q0 .425-.288.713T20 19z"></svg:path>`,
})
export class MaterialSymbolsCalendarViewWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
