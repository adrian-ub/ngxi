import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLeftPanelOpenSharpIcon],svg[material-symbols-light-left-panel-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.404 8.827v6.346L15.596 12zM9 19h10V5H9zm-5 1V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightLeftPanelOpenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
