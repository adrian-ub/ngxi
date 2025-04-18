import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter3SharpIcon],svg[material-symbols-filter-3-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15h6V5h-6v2h4v2h-2v2h2v2h-4zm-5 3V2h16v16zm-4 4V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsFilter3SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
