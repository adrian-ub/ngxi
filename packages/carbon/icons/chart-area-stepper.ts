import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonChartAreaStepperIcon],svg[carbon-chart-area-stepper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10V6H10v6H4V2H2v26a2.003 2.003 0 0 0 2 2h26V10Zm-10 4V8h8v4h8v10h-6v-6H12v6H4v-8ZM4 28v-4h10v-6h6v6h8v4Z"></svg:path>`,
})
export class CarbonChartAreaStepperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
