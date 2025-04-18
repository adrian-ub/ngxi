import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter9PlusOutlineRoundedIcon],svg[material-symbols-filter-9-plus-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14q.825 0 1.413-.587T14 12V8q0-.825-.587-1.412T12 6h-1q-.825 0-1.412.588T9 8v1q0 .825.588 1.413T11 11h1v1h-1q-.425 0-.712.288T10 13t.288.713T11 14zm0-5h-1V8h1zm4.5 2v1q0 .425.288.713T17.5 13t.713-.288T18.5 12v-1H20V9h-1.5V8q0-.425-.288-.712T17.5 7t-.712.288T16.5 8v1h-1q-.425 0-.712.288T14.5 10t.288.713t.712.287zM8 18q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V7q0-.425.288-.712T3 6t.713.288T4 7v13h13q.425 0 .713.288T18 21t-.288.713T17 22zM8 4v12z"></svg:path>`,
})
export class MaterialSymbolsFilter9PlusOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
