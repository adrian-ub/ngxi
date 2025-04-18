import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsRightPanelCloseOutlineSharpIcon],svg[material-symbols-right-panel-close-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 16l4-4l-4-4zm8.5 3h3V5h-3zM5 19h9V5H5zm11 0h3zM3 21V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsRightPanelCloseOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
