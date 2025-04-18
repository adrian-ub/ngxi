import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsCombineColumnsOutlineSharpIcon],svg[material-symbols-combine-columns-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h8v4H9V5H5v14h4v-2h2v4zm10 0v-4h2v2h4V5h-4v2h-2V3h8v18zm-2-6v-2H9v-2h2V9h2v2h2v2h-2v2z"></svg:path>`,
})
export class MaterialSymbolsCombineColumnsOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
