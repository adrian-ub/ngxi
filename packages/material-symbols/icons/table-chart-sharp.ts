import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableChartSharpIcon],svg[material-symbols-table-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V3h18v5zm0 13V10h4.5v11zm13.5 0V10H21v11zm-7 0V10h5v11z"></svg:path>`,
})
export class MaterialSymbolsTableChartSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
