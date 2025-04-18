import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableChartOutlineSharpIcon],svg[material-symbols-table-chart-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h18v18zM5 8h14V5H5zm0 11h2.5v-9H5zm11.5 0H19v-9h-2.5zm-7 0h5v-9h-5z"></svg:path>`,
})
export class MaterialSymbolsTableChartOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
