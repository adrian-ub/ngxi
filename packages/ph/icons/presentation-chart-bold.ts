import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPresentationChartBoldIcon],svg[ph-presentation-chart-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 36h-76V24a12 12 0 0 0-24 0v12H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h31l-16.4 20.5a12 12 0 0 0 18.74 15l28.4-35.5h52.46l28.4 35.5a12 12 0 0 0 18.74-15L185 196h31a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 136H44V60h168Zm-108-52v24a12 12 0 0 1-24 0v-24a12 12 0 0 1 24 0m24-28a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0v-40a12 12 0 0 1 12-12m24 52V88a12 12 0 0 1 24 0v56a12 12 0 0 1-24 0"></svg:path>`,
})
export class PhPresentationChartBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
