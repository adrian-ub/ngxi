import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewArrayOutlineSharpIcon],svg[material-symbols-light-view-array-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18V6h2.346v12zm3.73 0V6h8.54v12zm9.924 0V6H20v12zM8.73 17h6.538V7H8.731zM12 12"></svg:path>`,
})
export class MaterialSymbolsLightViewArrayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
