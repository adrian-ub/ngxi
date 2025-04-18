import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRadioMinimalisticBrokenIcon],svg[solar-radio-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14s0-5.657 1.172-6.828S6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828"></svg:path><svg:circle cx="8" cy="14" r="3"></svg:circle><svg:path stroke-linecap="round" d="M13.5 11H19m-5.5 3h.5m5 0h-2.5m-.5 3h-2.5m5.5 0h-.5M6.5 6L15 2"></svg:path></svg:g>`,
})
export class SolarRadioMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
