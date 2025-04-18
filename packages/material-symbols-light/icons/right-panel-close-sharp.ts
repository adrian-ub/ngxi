import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightRightPanelCloseSharpIcon],svg[material-symbols-light-right-panel-close-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.404 15.173L11.596 12L8.404 8.827zM5 19h10V5H5zm-1 1V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightRightPanelCloseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
