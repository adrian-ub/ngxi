import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartScatterFillIcon],svg[ph-chart-scatter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-28 32a12 12 0 1 1-12 12a12 12 0 0 1 12-12m0 56a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-40-16a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-24-40a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-24 56a12 12 0 1 1-12 12a12 12 0 0 1 12-12m100 64H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v104h136a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChartScatterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
