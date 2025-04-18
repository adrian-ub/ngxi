import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableRowsNarrowSharpIcon],svg[material-symbols-light-table-rows-narrow-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15.635h16V12.5H4zM4 11.5h16V8.366H4zm0-4.134h16V4.23H4zM20 20V4zm-16-.23h16v-3.136H4z"></svg:path>`,
})
export class MaterialSymbolsLightTableRowsNarrowSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
