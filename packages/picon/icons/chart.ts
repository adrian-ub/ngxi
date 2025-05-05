import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChartIcon],svg[picon-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6H6V3h1M5 6H4V1h1M3 6H2V4h1M0 8V0h1v7h7v1"></svg:path>`,
})
export class PiconChartIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
