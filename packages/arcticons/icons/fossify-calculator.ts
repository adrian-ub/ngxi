import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFossifyCalculatorIcon],svg[arcticons-fossify-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.357 11.022h12.646M5.5 34.875h14.36m-7.18-7.181v14.361M31.1 5.945L41.254 16.1m0-10.155L31.1 16.1m-1.246 14.381H42.5m-12.646 8.787H42.5"></svg:path>`,
})
export class ArcticonsFossifyCalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
