import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonCalculatorIcon],svg[carbon-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4v24H6V4zm0-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M9 23h2v2H9zm12 0h2v2h-2zM9 18h2v2H9zm12 0h2v2h-2zM9 13h2v2H9zm6 10h2v2h-2zm0-5h2v2h-2zm0-5h2v2h-2zm6 0h2v2h-2zM9 7h14v3H9z"></svg:path>`,
})
export class CarbonCalculatorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
