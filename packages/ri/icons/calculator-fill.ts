import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCalculatorFillIcon],svg[ri-calculator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10v2h2v-2zm0 4v2h2v-2zm4-4v2h2v-2zm0 4v2h2v-2zm4-4v6h2v-6zM7 6v4h10V6z"></svg:path>`,
})
export class RiCalculatorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
