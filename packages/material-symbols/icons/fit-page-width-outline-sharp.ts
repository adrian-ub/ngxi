import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageWidthOutlineSharpIcon],svg[material-symbols-fit-page-width-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15V9l-3 3zm9-3l-3-3v6zM2 20V4h20v16zM20 6H4v12h16zM4 6v12z"></svg:path>`,
})
export class MaterialSymbolsFitPageWidthOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
