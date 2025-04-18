import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ChartXAngleIcon],svg[fluent-mdl2-chart-x-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 347v1571q75-6 151-25t148-51t135-76t115-102H640v-128h512v512h-128v-293l-19 18q-143 137-315 206t-370 69h-64V37l1645 1646l-90 90z"></svg:path>`,
})
export class FluentMdl2ChartXAngleIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
