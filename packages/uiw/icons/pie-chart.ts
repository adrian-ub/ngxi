import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwPieChartIcon],svg[uiw-pie-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="uiwPieChart0" d="M1.37 18.615h17.945c.379 0 .685.31.685.693a.69.69 0 0 1-.685.692H.685A.69.69 0 0 1 0 19.308V.692C0 .31.306 0 .685 0c.378 0 .684.31.684.692zM2.836 17.4l2.753-5.57l2.754 1.392l3.442-4.179l2.754 2.09l4.131-6.268V17.4z"></svg:path></svg:defs><svg:use fill="currentColor" href="#uiwPieChart0"></svg:use>`,
})
export class UiwPieChartIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
