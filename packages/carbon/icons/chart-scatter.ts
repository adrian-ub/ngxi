import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartScatterIcon],svg[carbon-chart-scatter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:circle cx="10" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="15" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="15" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="8" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonChartScatterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
