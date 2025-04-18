import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRightPanelCloseOutlineSharpIcon],svg[material-symbols-light-right-panel-close-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.404 15.173L11.596 12L8.404 8.827zM16 19h3V5h-3zM5 19h10V5H5zm11 0h3zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightRightPanelCloseOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
