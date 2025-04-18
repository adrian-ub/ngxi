import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartTSneIcon],svg[carbon-chart-t-sne-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="10" cy="14" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="26" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonChartTSneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
