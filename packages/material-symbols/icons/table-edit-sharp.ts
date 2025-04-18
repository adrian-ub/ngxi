import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableEditSharpIcon],svg[material-symbols-table-edit-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 14V9h8v5zm0-7V3h18v4zm0 14v-5h8v5zm10-7V9h7.15l-5.025 5zm0 8v-3.075l6.575-6.55l3.075 3.05L16.075 22zm6.575-5.6l.925-.975l-.925-.925l-.95.95z"></svg:path>`,
})
export class MaterialSymbolsTableEditSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
