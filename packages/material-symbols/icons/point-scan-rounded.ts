import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPointScanRoundedIcon],svg[material-symbols-point-scan-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14q-.825 0-1.412-.587T10 12t.588-1.412T12 10t1.413.588T14 12t-.587 1.413T12 14m-1-7V4q0-.425.288-.712T12 3t.713.288T13 4v3q0 .425-.288.713T12 8t-.712-.288T11 7m0 13v-3q0-.425.288-.712T12 16t.713.288T13 17v3q0 .425-.288.713T12 21t-.712-.288T11 20m6-9h3q.425 0 .713.288T21 12t-.288.713T20 13h-3q-.425 0-.712-.288T16 12t.288-.712T17 11M4 11h3q.425 0 .713.288T8 12t-.288.713T7 13H4q-.425 0-.712-.288T3 12t.288-.712T4 11"></svg:path>`,
})
export class MaterialSymbolsPointScanRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
