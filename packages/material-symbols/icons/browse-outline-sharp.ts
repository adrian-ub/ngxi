import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBrowseOutlineSharpIcon],svg[material-symbols-browse-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-6h8v6zm10 0V11h8v10zM3 13V3h8v10zm10-4V3h8v6zM5 19h4v-2H5zm10 0h4v-6h-4zM5 11h4V5H5zm10-4h4V5h-4z"></svg:path>`,
})
export class MaterialSymbolsBrowseOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
