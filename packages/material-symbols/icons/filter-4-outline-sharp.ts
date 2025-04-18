import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFilter4OutlineSharpIcon],svg[material-symbols-filter-4-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 18V2h16v16zm2-2h12V4H8zm-6 6V6h2v14h14v2zm6-6V4zm7-1h2V5h-2v4h-2V5h-2v6h4z"></svg:path>`,
})
export class MaterialSymbolsFilter4OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
