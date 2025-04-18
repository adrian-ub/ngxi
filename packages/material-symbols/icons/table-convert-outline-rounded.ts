import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableConvertOutlineRoundedIcon],svg[material-symbols-table-convert-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21V9H3V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm2-2h6v-4h-6zm0-6h6V9h-6zM5 7h14V5H5zm2.625 4q.425 0 .713.288t.287.712t-.288.713t-.712.287q-1.125 0-1.937.8t-.813 1.95q0 .975.6 1.725t1.525.95V17q0-.425.288-.712T8 16t.713.288T9 17v4q0 .425-.288.713T8 22H4q-.425 0-.712-.288T3 21t.288-.712T4 20h1.55q-1.2-.575-1.937-1.7t-.738-2.55q0-1.975 1.388-3.363T7.625 11"></svg:path>`,
})
export class MaterialSymbolsTableConvertOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
