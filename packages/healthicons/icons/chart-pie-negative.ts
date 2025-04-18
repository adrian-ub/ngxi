import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsChartPieNegativeIcon],svg[healthicons-chart-pie-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsChartPieNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 6v16.845l15.066-8.698C35.851 9.24 30.304 6 24 6M8.934 33.853l31.134-17.975A17.9 17.9 0 0 1 42 24c0 9.941-8.059 18-18 18c-6.304 0-11.851-3.24-15.066-8.147M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20s20-8.954 20-20S35.046 4 24 4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsChartPieNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsChartPieNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
