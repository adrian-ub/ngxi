import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCalculatorIcon],svg[mage-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M16 2.75H8a4 4 0 0 0-4 4v10.5a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6.75a4 4 0 0 0-4-4"></svg:path><svg:path d="M16.083 6H7.917C7.411 6 7 6.448 7 7v2c0 .552.41 1 .917 1h8.166c.506 0 .917-.448.917-1V7c0-.552-.41-1-.917-1M7.5 13h1m3 0h1m3 0h1m-9 2.5h1m3 0h1m3 0h1m-9 2.5h1m3 0h1m3 0h1"></svg:path></svg:g>`,
})
export class MageCalculatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
