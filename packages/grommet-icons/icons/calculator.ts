import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsCalculatorIcon],svg[grommet-icons-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M22 23H2V1h20zm-6-6h2v2h-2zm-5 0h2v2h-2zm5-5h2v2h-2zm-5 0h2v2h-2zm-5 5h2v2H6zm0-5h2v2H6zm12-3H6V5h12z"></svg:path>`,
})
export class GrommetIconsCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
