import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableRowsNarrowOutlineSharpIcon],svg[material-symbols-table-rows-narrow-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15h14v-2H5zm0-4h14V9H5zm0-4h14V5H5zM3 21V3h18v18zm2-2h14v-2H5z"></svg:path>`,
})
export class MaterialSymbolsTableRowsNarrowOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
