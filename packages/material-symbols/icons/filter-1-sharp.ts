import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter1SharpIcon],svg[material-symbols-filter-1-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 15h2V5h-4v2h2zm-8 3V2h16v16zm-4 4V6h2v14h14v2z"></svg:path>`,
})
export class MaterialSymbolsFilter1SharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
