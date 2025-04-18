import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPivotTableChartSharpIcon],svg[material-symbols-pivot-table-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8V3h11v5zM3 21V10h5v11zM3 8V3h5v5zm10 14l-4-4l4-4l1.4 1.4l-1.55 1.6H17v-4.2l-1.6 1.6L14 13l4-4l4 4l-1.4 1.4l-1.6-1.6V19h-6.15l1.55 1.6z"></svg:path>`,
})
export class MaterialSymbolsPivotTableChartSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
