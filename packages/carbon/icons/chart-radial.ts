import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartRadialIcon],svg[carbon-chart-radial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30A14.016 14.016 0 0 1 2 16h2A12 12 0 1 0 16 4V2a14 14 0 0 1 0 28"></svg:path><svg:path fill="currentColor" d="M16 26A10.01 10.01 0 0 1 6 16h2a8 8 0 1 0 8-8V6a10 10 0 0 1 0 20"></svg:path><svg:path fill="currentColor" d="M16 22a6.007 6.007 0 0 1-6-6h2a4 4 0 1 0 4-4v-2a6 6 0 0 1 0 12"></svg:path>`,
})
export class CarbonChartRadialIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
