import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChartYAngleIcon],svg[fluent-mdl2-chart-y-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1024h-293l18 19q137 143 206 315t69 370v64H37L1683 147l90 90L347 1664h1571q-6-75-25-151t-51-148t-76-135t-102-115v293h-128V896h512z"></svg:path>`,
})
export class FluentMdl2ChartYAngleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
