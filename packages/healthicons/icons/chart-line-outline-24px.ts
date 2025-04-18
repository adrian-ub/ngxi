import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartLineOutline24pxIcon],svg[healthicons-chart-line-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M2 20V2h2v11.612l2.18-2.18a2.5 2.5 0 0 0 1.388 1.389L4 16.389V20h18v2H4a2 2 0 0 1-2-2"></svg:path><svg:path fill-rule="evenodd" d="M17.587 12.123a2.5 2.5 0 1 1-4.586 1.427l-2.814-1.205A2.5 2.5 0 0 0 11 10.45l2.813 1.205a2.49 2.49 0 0 1 2.155-.611l1.445-2.167a2.5 2.5 0 0 0 1.619 1.08zM16 13.5a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11 10.45a2.5 2.5 0 1 0-5 .1a2.5 2.5 0 0 0 5-.1m-2 .05a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m10.5-.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0-2a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsChartLineOutline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
