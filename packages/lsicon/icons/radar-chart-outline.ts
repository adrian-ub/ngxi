import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconRadarChartOutlineIcon],svg[lsicon-radar-chart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="m8 1.5l-6.5 5m6.5-5l6.5 5M8 1.5V5M1.5 6.5l2.5 8m-2.5-8l3 1m-.5 7h8m-8 0l2-3m6 3l2.5-8m-2.5 8L9.5 10m5-3.5l-3.5 1m0 0L9.5 10M11 7.5L8 5m1.5 5L6 11.5m0 0l-1.5-4m0 0L8 5"></svg:path>`,
})
export class LsiconRadarChartOutlineIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
