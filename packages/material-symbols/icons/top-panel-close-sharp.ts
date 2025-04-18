import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTopPanelCloseSharpIcon],svg[material-symbols-top-panel-close-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.5h8l-4-4zM5 19h14v-9H5zm-2 2V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsTopPanelCloseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
