import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableViewSharpIcon],svg[material-symbols-table-view-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22h7v-4H6zm9 0h7v-4h-7zM2 18V2h16v2H4v14zm4-2h7v-4H6zm9 0h7v-4h-7zm-9-6h16V6H6z"></svg:path>`,
})
export class MaterialSymbolsTableViewSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
