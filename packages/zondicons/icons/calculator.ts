import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zondiconsCalculatorIcon],svg[zondicons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3 1v2h10V3zm0 4v2h2V7zm4 0v2h2V7zm4 0v2h2V7zm-8 4v2h2v-2zm4 0v2h2v-2zm4 0v6h2v-6zm-8 4v2h2v-2zm4 0v2h2v-2z"></svg:path>`,
})
export class ZondiconsCalculatorIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
