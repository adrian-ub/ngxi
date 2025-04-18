import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsChartPieIcon],svg[zondicons-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 11A10 10 0 1 1 9 .05V11zm-.08-2.6H11.6V.13a10 10 0 0 1 8.27 8.27"></svg:path>`,
})
export class ZondiconsChartPieIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
