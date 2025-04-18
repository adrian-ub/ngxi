import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlanetBrokenIcon],svg[solar-planet-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M8 5.07A8 8 0 1 1 5.07 8"></svg:path><svg:path stroke-linejoin="round" d="M13.83 14.926c-5.428 2.893-10.648 3.927-11.66 2.31c-.532-.852.211-2.27 1.83-3.846m13.849-7.2c2.011-.37 3.49-.21 3.98.573c.798 1.275-1.26 3.817-4.829 6.253"></svg:path></svg:g>`,
})
export class SolarPlanetBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
