import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarPlanet3BrokenIcon],svg[solar-planet-3-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M3 8.008S5.937 11 10.437 11M21 8.008s-1.917-.138-4.5.748c-.797.273-1.303.695-2.5 1.244M3 14.008s.768-.05 2 .107m2.903.64C9.401 15.228 11.172 17 14.51 17c3.012 0 5.381-1.129 6.761-2"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarPlanet3BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
