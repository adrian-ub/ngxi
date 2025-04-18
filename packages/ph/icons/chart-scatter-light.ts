import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phChartScatterLightIcon],svg[ph-chart-scatter-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 208a6 6 0 0 1-6 6H32a6 6 0 0 1-6-6V48a6 6 0 0 1 12 0v154h186a6 6 0 0 1 6 6m-98-50a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-24-56a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-32 72a10 10 0 1 0-10-10a10 10 0 0 0 10 10m96-48a10 10 0 1 0-10-10a10 10 0 0 0 10 10m24-40a10 10 0 1 0-10-10a10 10 0 0 0 10 10m-8 68a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhChartScatterLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
