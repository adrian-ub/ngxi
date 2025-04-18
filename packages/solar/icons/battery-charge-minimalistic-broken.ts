import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBatteryChargeMinimalisticBrokenIcon],svg[solar-battery-charge-minimalistic-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 14v-4"></svg:path><svg:path stroke-linejoin="round" d="M11.5 9L9 12h3.5L10 15"></svg:path><svg:path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172S19.5 8.229 19.5 12s0 5.657-1.172 6.828S15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"></svg:path></svg:g>`,
})
export class SolarBatteryChargeMinimalisticBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
