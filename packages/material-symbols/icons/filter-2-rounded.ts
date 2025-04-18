import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter2RoundedIcon],svg[material-symbols-filter-2-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13v-2h2q.825 0 1.413-.587T17 9V7q0-.825-.587-1.412T15 5h-3q-.425 0-.712.288T11 6t.288.713T12 7h3v2h-2q-.825 0-1.412.588T11 11v3q0 .425.288.713T12 15h4q.425 0 .713-.288T17 14t-.288-.712T16 13zm-5 5q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22z"></svg:path>`,
})
export class MaterialSymbolsFilter2RoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
