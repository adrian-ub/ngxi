import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons3dCalculatorIcon],svg[arcticons-3d-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m17.52 41.268l4.377-34.536L43.5 36.722Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.52 41.268L4.5 35.058L21.897 6.732"></svg:path>`,
})
export class Arcticons3dCalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
