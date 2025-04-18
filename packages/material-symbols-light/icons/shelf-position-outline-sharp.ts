import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightShelfPositionOutlineSharpIcon],svg[material-symbols-light-shelf-position-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zm1-1h14v-3.5H5zm11.116-4.5H19V5h-2.884zM5 14.5h2.885V5H5zm3.885 0h6.23V5h-6.23z"></svg:path>`,
})
export class MaterialSymbolsLightShelfPositionOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
