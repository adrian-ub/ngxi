import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLeftPanelCloseSharpIcon],svg[material-symbols-light-left-panel-close-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.596 15.173V8.827L12.404 12zM9 19h10V5H9zm-5 1V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightLeftPanelCloseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
