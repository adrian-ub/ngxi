import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartStepperIcon],svg[carbon-chart-stepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 22v-8h8V6h8V4H20v8h-8v8H4V2H2v26a2.003 2.003 0 0 0 2 2h26v-2H4v-6Z"></svg:path>`,
})
export class CarbonChartStepperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
