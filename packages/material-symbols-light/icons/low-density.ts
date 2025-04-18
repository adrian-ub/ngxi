import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLowDensityIcon],svg[material-symbols-light-low-density-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-8.615h1V19h14V5h-7.615V4H20v16zM4 8.923v-1.23h1.23v1.23zm0-3.692V4h1.23v1.23zm3.692 7.385v-1.231h1.231v1.23zm0-7.385V4h1.231v1.23zm3.692 7.385v-1.231h1.231v1.23zm0-3.693v-1.23h1.231v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightLowDensityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
