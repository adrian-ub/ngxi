import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableSharpIcon],svg[material-symbols-light-table-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 14.885H4V20h7.5zm1 0V20H20v-5.115zm-1-1V8.769H4v5.116zm1 0H20V8.769h-7.5zM4 7.769h16V4H4z"></svg:path>`,
})
export class MaterialSymbolsLightTableSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
