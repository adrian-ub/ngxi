import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCalculatorIcon],svg[oi-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.09 0C.03 0 0 .04 0 .09V7.9c0 .05.04.09.09.09H6.9c.05 0 .09-.04.09-.09V.09C6.99.03 6.95 0 6.9 0zM1 1h5v2H1zm0 3h1v1H1zm2 0h1v1H3zm2 0h1v3H5zM1 6h1v1H1zm2 0h1v1H3z"></svg:path>`,
})
export class OiCalculatorIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
