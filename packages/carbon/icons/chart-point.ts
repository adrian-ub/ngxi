import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartPointIcon],svg[carbon-chart-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30H4a2 2 0 0 1-2-2V2h2v26h26Z"></svg:path><svg:circle cx="9" cy="6" r="3" fill="currentColor"></svg:circle><svg:circle cx="9" cy="22" r="3" fill="currentColor"></svg:circle><svg:circle cx="18" cy="14" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9 17a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:circle cx="27" cy="6" r="3" fill="currentColor"></svg:circle><svg:circle cx="27" cy="22" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M27 17a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-9 13a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0-14a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path>`,
})
export class CarbonChartPointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
