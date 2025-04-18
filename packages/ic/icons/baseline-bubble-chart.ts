import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineBubbleChartIcon],svg[ic-baseline-bubble-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.2" cy="14.4" r="3.2" fill="currentColor"></svg:circle><svg:circle cx="14.8" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="15.2" cy="8.8" r="4.8" fill="currentColor"></svg:circle>`,
})
export class IcBaselineBubbleChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
