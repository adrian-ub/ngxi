import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightBottomPanelCloseOutlineSharpIcon],svg[material-symbols-light-bottom-panel-close-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11.596l3.173-3.192H8.827zM5 19h14v-3H5zm0-4h14V5H5zm0 1v3zm-1 4V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightBottomPanelCloseOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
