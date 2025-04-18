import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerChartFunnelIcon],svg[tabler-chart-funnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.387 3h15.226a1 1 0 0 1 .948 1.316l-5.105 15.316A2 2 0 0 1 13.558 21h-3.116a2 2 0 0 1-1.898-1.368L3.44 4.316A1 1 0 0 1 4.387 3M5 9h14M7 15h10"></svg:path>`,
})
export class TablerChartFunnelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
