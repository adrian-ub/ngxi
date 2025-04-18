import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarArrowLeftUpBrokenIcon],svg[solar-arrow-left-up-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 6h9M6 6v9m0-9l6.5 6.5M18 18l-2.5-2.5"></svg:path>`,
})
export class SolarArrowLeftUpBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
