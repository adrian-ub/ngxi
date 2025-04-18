import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarFridgeBrokenIcon],svg[solar-fridge-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M4 10v3c0 3.771 0 5.657 1.172 6.828S8.229 21 12 21s5.657 0 6.828-1.172S20 16.771 20 13v-3c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2S6.343 2 5.172 3.172C4.518 3.825 4.229 4.7 4.102 6"></svg:path><svg:path stroke-linejoin="round" d="M17 21v1h-1v-1m-8 0v1H7v-1"></svg:path><svg:path stroke-linecap="round" d="M20 11.5h-5m-11 0h7M17 7v2m0 5v2"></svg:path></svg:g>`,
})
export class SolarFridgeBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
