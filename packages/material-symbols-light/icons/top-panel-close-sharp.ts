import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTopPanelCloseSharpIcon],svg[material-symbols-light-top-panel-close-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.827 15.596h6.346L12 12.404zM5 19h14V9H5zm-1 1V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightTopPanelCloseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
