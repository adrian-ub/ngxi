import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableRowsNarrowIcon],svg[material-symbols-light-table-rows-narrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.635V12.5h16v3.135zM4 11.5V8.366h16V11.5zm0-4.134V4.23h16v3.135zm0 12.403v-3.134h16v3.134z"></svg:path>`,
})
export class MaterialSymbolsLightTableRowsNarrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
