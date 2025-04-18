import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCalculatorYouIcon],svg[arcticons-calculator-you-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="14" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="14" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14" cy="34" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34" cy="34" r="8.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.5 35.5h5m-5-3h5M11.35 10L14 14l2.65-4M14 18v-4m-2.65 16v5.35a2.65 2.65 0 1 0 5.3 0V30M34 10a2.65 2.65 0 0 1 2.65 2.65v2.7A2.65 2.65 0 0 1 34 18h0a2.65 2.65 0 0 1-2.65-2.65v-2.7A2.65 2.65 0 0 1 34 10"></svg:path>`,
})
export class ArcticonsCalculatorYouIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
