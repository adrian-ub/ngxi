import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTopPanelCloseOutlineSharpIcon],svg[material-symbols-top-panel-close-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16.5h8l-4-4zM5 8h14V5H5zm0 11h14v-9H5zM5 8V5zM3 21V3h18v18z"></svg:path>`,
})
export class MaterialSymbolsTopPanelCloseOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
