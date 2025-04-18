import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowRightDownLinearIcon],svg[solar-arrow-right-down-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m6 6l12 12m0 0V9m0 9H9"></svg:path>`,
})
export class SolarArrowRightDownLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
