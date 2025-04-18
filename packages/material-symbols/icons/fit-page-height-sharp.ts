import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageHeightSharpIcon],svg[material-symbols-fit-page-height-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h6l-3-3zm3 9l3-3H9zm8 4H4V2h16z"></svg:path>`,
})
export class MaterialSymbolsFitPageHeightSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
