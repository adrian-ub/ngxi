import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartLineDownFillIcon],svg[ph-chart-line-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 152H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v20.69l32 32l34.34-34.35a8 8 0 0 1 11.32 0L176 124.69V104a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8h-40a8 8 0 0 1 0-16h20.69L136 107.31l-34.34 34.35a8 8 0 0 1-11.32 0L64 115.31V176h136a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhChartLineDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
