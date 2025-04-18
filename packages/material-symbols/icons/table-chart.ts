import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTableChartIcon],svg[material-symbols-table-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v3zm2 13q-.825 0-1.412-.587T3 19v-9h4.5v11zm11.5 0V10H21v9q0 .825-.587 1.413T19 21zm-7 0V10h5v11z"></svg:path>`,
})
export class MaterialSymbolsTableChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
