import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableLampSharpIcon],svg[material-symbols-table-lamp-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v-2h8v2zm3-3V7h-5v4H2.475l3.5-8H11v2h7v13z"></svg:path>`,
})
export class MaterialSymbolsTableLampSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
