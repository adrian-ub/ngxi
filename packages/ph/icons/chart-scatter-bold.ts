import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartScatterBoldIcon],svg[ph-chart-scatter-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H32a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v148h180a12 12 0 0 1 12 12m-120-60a16 16 0 1 0 16-16a16 16 0 0 0-16 16m-8-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-32 72a16 16 0 1 0-16-16a16 16 0 0 0 16 16m96-48a16 16 0 1 0-16-16a16 16 0 0 0 16 16m24-40a16 16 0 1 0-16-16a16 16 0 0 0 16 16m-24 72a16 16 0 1 0 16-16a16 16 0 0 0-16 16"></svg:path>`,
})
export class PhChartScatterBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
