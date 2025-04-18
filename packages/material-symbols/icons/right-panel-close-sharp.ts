import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRightPanelCloseSharpIcon],svg[material-symbols-right-panel-close-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 16l4-4l-4-4zM5 19h9V5H5zm-2 2V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsRightPanelCloseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
