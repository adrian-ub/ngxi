import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendDownSolidIcon],svg[stash-chart-trend-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.116 8.116a1.25 1.25 0 0 1 1.768 0L15 10.232l2.116-2.116a1.25 1.25 0 0 1 1.768 1.768l-3 3a1.25 1.25 0 0 1-1.768 0L12 10.768L9.018 13.75H9.5a1.25 1.25 0 1 1 0 2.5H6c-.69 0-1.25-.56-1.25-1.25v-3.5a1.25 1.25 0 1 1 2.5 0v.482z"></svg:path>`,
})
export class StashChartTrendDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
