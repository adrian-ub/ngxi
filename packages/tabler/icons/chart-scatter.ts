import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartScatterIcon],svg[tabler-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3v18h18M8 15.015v.015m8 .985v.015m-8-9v.015m4 3.985v.015m7-.015v.015"></svg:path>`,
})
export class TablerChartScatterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
