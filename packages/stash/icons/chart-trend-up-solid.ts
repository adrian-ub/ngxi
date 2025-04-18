import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendUpSolidIcon],svg[stash-chart-trend-up-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.25 9c0-.69.56-1.25 1.25-1.25H18c.69 0 1.25.56 1.25 1.25v3.5a1.25 1.25 0 1 1-2.5 0v-.482l-3.866 3.866a1.25 1.25 0 0 1-1.768 0L9 13.768l-2.116 2.116a1.25 1.25 0 0 1-1.768-1.768l3-3a1.25 1.25 0 0 1 1.768 0L12 13.232l2.982-2.982H14.5c-.69 0-1.25-.56-1.25-1.25"></svg:path>`,
})
export class StashChartTrendUpSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
