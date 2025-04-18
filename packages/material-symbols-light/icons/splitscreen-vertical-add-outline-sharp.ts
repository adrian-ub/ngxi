import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitscreenVerticalAddOutlineSharpIcon],svg[material-symbols-light-splitscreen-vertical-add-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-4.621h.029h-.023zm-5.616-1H20v10.385h-1V5h-4.615v15h-1zM4 20V4h6.635v16zM9.635 5H5v14h4.635zm0 0H5zM19 22.23V20h-2.23v-1H19v-2.23h1V19h2.23v1H20v2.23z"></svg:path>`,
})
export class MaterialSymbolsLightSplitscreenVerticalAddOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
