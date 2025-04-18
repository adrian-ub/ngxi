import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarAltArrowDownBrokenIcon],svg[solar-alt-arrow-down-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m19 9l-7 6l-1.75-1.5M5 9l2.333 2"></svg:path>`,
})
export class SolarAltArrowDownBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
