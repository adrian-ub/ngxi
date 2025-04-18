import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilterSharpIcon],svg[material-symbols-filter-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14h10l-3.45-4.5l-2.3 3l-1.55-2zm-3 4V2h16v16zm-4 4V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsFilterSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
