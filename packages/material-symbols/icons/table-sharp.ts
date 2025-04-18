import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableSharpIcon],svg[material-symbols-table-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16H3v5h8zm2 0v5h8v-5zm-2-2V9H3v5zm2 0h8V9h-8zM3 7h18V3H3z"></svg:path>`,
})
export class MaterialSymbolsTableSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
