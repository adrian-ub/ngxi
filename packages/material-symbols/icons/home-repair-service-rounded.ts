import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHomeRepairServiceRoundedIcon],svg[material-symbols-home-repair-service-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 8h6V6H9zM3 20q-.425 0-.712-.288T2 19v-4h4q0 .425.288.713T7 16t.713-.288T8 15h8q0 .425.288.713T17 16t.713-.288T18 15h4v4q0 .425-.288.713T21 20zm-1-6v-4q0-.825.588-1.412T4 8h3V6q0-.825.588-1.412T9 4h6q.825 0 1.413.588T17 6v2h3q.825 0 1.413.588T22 10v4h-4v-1q0-.425-.288-.712T17 12t-.712.288T16 13v1H8v-1q0-.425-.288-.712T7 12t-.712.288T6 13v1z"></svg:path>`,
})
export class MaterialSymbolsHomeRepairServiceRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
