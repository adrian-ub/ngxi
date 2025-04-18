import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashChartTrendUpLightIcon],svg[stash-chart-trend-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9a.5.5 0 0 1 .5-.5H18a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-1 0v-2.293l-5.146 5.147a.5.5 0 0 1-.708 0L9 12.707l-2.646 2.647a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0L12 14.293L16.793 9.5H14.5A.5.5 0 0 1 14 9"></svg:path>`,
})
export class StashChartTrendUpLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
