import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowToTopLeftLinearIcon],svg[solar-arrow-to-top-left-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m12 4.5l5 5m-5-5l-5 5m5-5v10c0 1.667-1 5-5 5"></svg:path>`,
})
export class SolarArrowToTopLeftLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
