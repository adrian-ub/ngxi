import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBatteryFullMinimalisticLinearIcon],svg[solar-battery-full-minimalistic-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></svg:path><svg:path stroke-linecap="round" d="M22 14v-4M7 9s.5.9.5 3s-.5 3-.5 3m3.5-6s.5.9.5 3s-.5 3-.5 3M14 9s.5.9.5 3s-.5 3-.5 3"></svg:path></svg:g>`,
})
export class SolarBatteryFullMinimalisticLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
