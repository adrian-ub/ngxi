import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewColumnOutlineSharpIcon],svg[material-symbols-light-view-column-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.006 18V6H20v12zM5 17h3.998V7H5zm4.998 0h3.998V7H9.998zm4.998 0h3.998V7h-3.998z"></svg:path>`,
})
export class MaterialSymbolsLightViewColumnOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
