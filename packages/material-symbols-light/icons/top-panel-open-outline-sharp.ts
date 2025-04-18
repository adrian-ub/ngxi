import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTopPanelOpenOutlineSharpIcon],svg[material-symbols-light-top-panel-open-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.596l3.173-3.192H8.827zM5 8h14V5H5zm0 11h14V9H5zM5 8V5zM4 20V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightTopPanelOpenOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
