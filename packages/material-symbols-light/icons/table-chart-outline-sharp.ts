import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableChartOutlineSharpIcon],svg[material-symbols-light-table-chart-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20V4h16v16zM5 8.5h14V5H5zM5 19h2.885V9.5H5zm11.116 0H19V9.5h-2.884zm-7.231 0h6.23V9.5h-6.23z"></svg:path>`,
})
export class MaterialSymbolsLightTableChartOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
