import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter4Icon],svg[material-symbols-filter-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 15h2V5h-2v4h-2V5h-2v6h4zm-7 3q-.825 0-1.412-.587T6 16V4q0-.825.588-1.412T8 2h12q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-4 4q-.825 0-1.412-.587T2 20V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsFilter4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
