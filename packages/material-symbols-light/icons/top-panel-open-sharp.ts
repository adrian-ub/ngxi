import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTopPanelOpenSharpIcon],svg[material-symbols-light-top-panel-open-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.596l3.173-3.192H8.827zM5 19h14V9H5zm-1 1V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightTopPanelOpenSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
