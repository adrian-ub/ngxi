import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCalculatorIcon],svg[icon-park-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M40 4H8.0002C6.89565 4 6.00022 4.89541 6.0002 5.99996L5.99955 42C5.99953 43.1045 6.89497 44 7.99955 44H40C41.1046 44 42 43.1046 42 42V6C42 4.89543 41.1046 4 40 4Z"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M35 10H13V19H35V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 28L19 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M19 28L12 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 35H36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M28 29H36"></svg:path></svg:g>`,
})
export class IconParkCalculatorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
