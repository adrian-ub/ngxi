import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendDownDuotoneIcon],svg[stash-chart-trend-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.293 8.293a1 1 0 0 1 1.414 0L15 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0L12 10.414L8.414 14H9.5a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1v-3.5a1 1 0 1 1 2 0v1.086z"></svg:path>`,
})
export class StashChartTrendDownDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
