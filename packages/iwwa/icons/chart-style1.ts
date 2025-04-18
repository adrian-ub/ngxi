import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iwwaChartStyle1Icon],svg[iwwa-chart-style1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.773 31.003H7.29l3.551-8.522l2.625 2.017l4.451-7.158l5.009 3.082l7.847-16.568zM9.038 29.838h20.57V9.036l-6.186 13.061l-5.128-3.158l-4.517 7.267l-2.443-1.879zm-.68 3.509H30.19v1.165H8.358z"></svg:path>`,
})
export class IwwaChartStyle1Icon {
  readonly viewBox = input("0 0 40 40")
  readonly width = input("1em")
  readonly height = input("1em")
}
