import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableLampOutlineSharpIcon],svg[material-symbols-table-lamp-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v-2h8v2zM5.525 9H9V5H7.275zM16 18V7h-5v4H2.475l3.5-8H11v2h7v13zM5.525 9H9z"></svg:path>`,
})
export class MaterialSymbolsTableLampOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
