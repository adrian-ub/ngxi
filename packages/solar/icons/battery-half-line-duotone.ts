import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBatteryHalfLineDuotoneIcon],svg[solar-battery-half-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M7 9s.5.9.5 3s-.5 3-.5 3"></svg:path><svg:path stroke-linecap="round" d="M10.5 9s.5.9.5 3s-.5 3-.5 3" opacity=".5"></svg:path><svg:path d="M20 10c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14z" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBatteryHalfLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
