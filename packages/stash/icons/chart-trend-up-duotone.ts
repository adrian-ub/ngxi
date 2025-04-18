import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendUpDuotoneIcon],svg[stash-chart-trend-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 9a1 1 0 0 1 1-1H18a1 1 0 0 1 1 1v3.5a1 1 0 1 1-2 0v-1.086l-4.293 4.293a1 1 0 0 1-1.414 0L9 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0L12 13.586L15.586 10H14.5a1 1 0 0 1-1-1"></svg:path>`,
})
export class StashChartTrendUpDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
