import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCalculatorCheckIcon],svg[carbon-calculator-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 26.59L21.41 24L20 25.41l4 4l7-7L29.59 21zM15 23h2v2h-2zm-6 0h2v2H9zm12-5h2v2h-2zm-6 0h2v2h-2zm-6 0h2v2H9zm12-5h2v2h-2zm-6 0h2v2h-2zm-6 0h2v2H9zm0-6h14v3H9z"></svg:path><svg:path fill="currentColor" d="M17 30H6.005A2.007 2.007 0 0 1 4 27.995V3.996A2 2 0 0 1 5.996 2h20.008A2 2 0 0 1 28 3.996V18h-2V4H6v24h11Z"></svg:path>`,
})
export class CarbonCalculatorCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
