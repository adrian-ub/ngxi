import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsVariableInsertOutlineIcon],svg[material-symbols-variable-insert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 17V7h18v4h-2V9H5v6h9v2zm2-2V9zm16.6 5L18 16.425V19.5h-2V13h6.5v2h-3.1l3.6 3.6z"></svg:path>`,
})
export class MaterialSymbolsVariableInsertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
