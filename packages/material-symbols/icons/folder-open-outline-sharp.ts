import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFolderOpenOutlineSharpIcon],svg[material-symbols-folder-open-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V4h8l2 2h10v2H11.175l-2-2H4v12l2.4-8h17.1l-3 10zm4.1-2H19l1.8-6H7.9zm0 0l1.8-6zM4 8V6z"></svg:path>`,
})
export class MaterialSymbolsFolderOpenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
