import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableChartSharpIcon],svg[material-symbols-light-table-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8.5V4h16v4.5zM4 20V9.5h3.885V20zm12.116 0V9.5H20V20zm-7.231 0V9.5h6.23V20z"></svg:path>`,
})
export class MaterialSymbolsLightTableChartSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
