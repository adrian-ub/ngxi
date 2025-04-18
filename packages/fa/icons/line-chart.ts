import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faLineChartIcon],svg[fa-line-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1408v128H0V0h128v1408zM1920 160v435q0 21-19.5 29.5T1865 617l-121-121l-633 633q-10 10-23 10t-23-10L832 896l-416 416l-192-192l585-585q10-10 23-10t23 10l233 233l464-464l-121-121q-16-16-7.5-35.5T1453 128h435q14 0 23 9t9 23"></svg:path>`,
})
export class FaLineChartIcon {
  readonly viewBox = input("0 0 2048 1536")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
