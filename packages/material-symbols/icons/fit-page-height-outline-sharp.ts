import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsFitPageHeightOutlineSharpIcon],svg[material-symbols-fit-page-height-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9h6l-3-3zm3 9l3-3H9zm8 4H4V2h16zm-2-2V4H6v16zm0-16H6z"></svg:path>`,
})
export class MaterialSymbolsFitPageHeightOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
