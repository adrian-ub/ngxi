import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDockToBottomOutlineSharpIcon],svg[material-symbols-dock-to-bottom-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 19h14v-3H5zm0-5h14V5H5zm0 2v3zm-2 5V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsDockToBottomOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
