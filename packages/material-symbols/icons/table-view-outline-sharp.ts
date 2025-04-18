import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableViewOutlineSharpIcon],svg[material-symbols-table-view-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22V6h16v16zm2-2h5v-3H8zm7 0h5v-3h-5zM2 18V2h16v2H4v14zm6-3h5v-3H8zm7 0h5v-3h-5zm-7-5h12V8H8z"></svg:path>`,
})
export class MaterialSymbolsTableViewOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
