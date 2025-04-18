import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTableChartIcon],svg[material-symbols-light-table-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8.5V5.616q0-.667.475-1.141T5.615 4h12.77q.666 0 1.14.475T20 5.615V8.5zM5.616 20q-.667 0-1.141-.475T4 18.386V9.5h3.885V20zm10.5 0V9.5H20v8.885q0 .666-.475 1.14t-1.14.475zm-7.231 0V9.5h6.23V20z"></svg:path>`,
})
export class MaterialSymbolsLightTableChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
