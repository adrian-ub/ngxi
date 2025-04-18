import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftDownLinearIcon],svg[solar-arrow-left-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 6L6 18m0 0V9m0 9h9"></svg:path>`,
})
export class SolarArrowLeftDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
