import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableRowsNarrowOutlineSharpIcon],svg[material-symbols-light-table-rows-narrow-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15.25h14V12.5H5zm0-3.75h14V8.75H5zm0-3.75h14V5H5zM4 20V4h16v16zm1-1h14v-2.75H5z"></svg:path>`,
})
export class MaterialSymbolsLightTableRowsNarrowOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
