import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsCalculatorIcon],svg[bxs-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2m3-3H7v-2h2zm0-4H7v-2h2zm0-4H7V9h2zm4 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2V9h2zm4 8h-2v-6h2zm0-8h-2V9h2zM6 4h12v3H6z"></svg:path>`,
})
export class BxsCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
