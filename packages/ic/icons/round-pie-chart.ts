import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundPieChartIcon],svg[ic-round-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3.18v17.64c0 .64-.59 1.12-1.21.98C5.32 20.8 2 16.79 2 12s3.32-8.8 7.79-9.8a.998.998 0 0 1 1.21.98m2.03 0v6.81c0 .55.45 1 1 1h6.79c.64 0 1.12-.59.98-1.22c-.85-3.76-3.8-6.72-7.55-7.57c-.63-.14-1.22.34-1.22.98m0 10.83v6.81c0 .64.59 1.12 1.22.98c3.76-.85 6.71-3.82 7.56-7.58c.14-.62-.35-1.22-.98-1.22h-6.79c-.56.01-1.01.46-1.01 1.01"></svg:path>`,
})
export class IcRoundPieChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
