import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendDownLightIcon],svg[stash-chart-trend-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.646 8.646a.5.5 0 0 1 .708 0L15 11.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0L12 9.707L7.207 14.5H9.5a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5v-3.5a.5.5 0 0 1 1 0v2.293z"></svg:path>`,
})
export class StashChartTrendDownLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
