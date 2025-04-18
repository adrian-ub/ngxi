import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartArrowsIcon],svg[tabler-chart-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 18h14M9 9l3 3l-3 3m5 0l3 3l-3 3M3 3v18m0-9h9m6-9l3 3l-3 3M3 6h18"></svg:path>`,
})
export class TablerChartArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
