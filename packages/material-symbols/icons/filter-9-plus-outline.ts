import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter9PlusOutlineIcon],svg[material-symbols-filter-9-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 14h2q.825 0 1.413-.587T14 12V8q0-.825-.587-1.412T12 6h-1q-.825 0-1.412.588T9 8v1q0 .825.588 1.413T11 11h1v1h-2zm2-5h-1V8h1zm-4 9q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm0-2h12V4H8zm-4 6q-.825 0-1.412-.587T2 20V6h2v14h14v2zM8 4v12zm8.5 9h2v-2H20V9h-1.5V7h-2v2h-2v2h2z"></svg:path>`,
})
export class MaterialSymbolsFilter9PlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
