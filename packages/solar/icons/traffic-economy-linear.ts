import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTrafficEconomyLinearIcon],svg[solar-traffic-economy-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 12A10 10 0 1 1 12 2m3 10h-3m0 0H9m3 0V9m0 3v3m2.5-12.685c3.514.904 6.28 3.67 7.185 7.185"></svg:path>`,
})
export class SolarTrafficEconomyLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
