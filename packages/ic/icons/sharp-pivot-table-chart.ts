import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPivotTableChartIcon],svg[ic-sharp-pivot-table-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h11v5H10zm-7 7h5v11H3zm0-7h5v5H3zm15 6l-4 4h3v4h-4v-3l-4 4l4 4v-3h6v-6h3z"></svg:path>`,
})
export class IcSharpPivotTableChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
