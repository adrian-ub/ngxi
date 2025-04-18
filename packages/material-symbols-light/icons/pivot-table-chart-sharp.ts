import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPivotTableChartSharpIcon],svg[material-symbols-light-pivot-table-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.385 7.616V4H20v3.616zM4 20v-9.615h3.616V20zM4 7.615V4h3.616v3.616zM12.5 21l-3.308-3.308l3.308-3.307l.708.707l-2.089 2.1h6.073v-6.084l-2.1 2.1l-.707-.708l3.307-3.308L21 12.5l-.708.708l-2.1-2.1v7.084H11.12l2.089 2.1z"></svg:path>`,
})
export class MaterialSymbolsLightPivotTableChartSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
