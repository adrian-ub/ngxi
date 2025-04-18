import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableRowsNarrowIcon],svg[material-symbols-table-rows-narrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15.5V13h18v2.5zM3 11V8.5h18V11zm0-4.5V4h18v2.5zM3 20v-2.5h18V20z"></svg:path>`,
})
export class MaterialSymbolsTableRowsNarrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
