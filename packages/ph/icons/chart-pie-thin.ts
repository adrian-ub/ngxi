import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartPieThinIcon],svg[ph-chart-pie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m77.58 50.59L132 121.07v-85a92.07 92.07 0 0 1 73.58 42.52M124 36.09v89.6l-77.58 44.79A92 92 0 0 1 124 36.09M128 220a92 92 0 0 1-77.58-42.59l159.16-91.89A92 92 0 0 1 128 220"></svg:path>`,
})
export class PhChartPieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
