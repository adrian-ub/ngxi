import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsViewArrayOutlineSharpIcon],svg[material-symbols-view-array-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5h3v14zm4 0V5h10v14zm11 0V5h3v14zm-9-2h6V7H9zm3-5"></svg:path>`,
})
export class MaterialSymbolsViewArrayOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
