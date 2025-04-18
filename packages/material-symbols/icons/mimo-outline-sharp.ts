import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsMimoOutlineSharpIcon],svg[material-symbols-mimo-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21v-2l1-1H2V3h20v15h-5l1 1v2zm-2-5h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsMimoOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
