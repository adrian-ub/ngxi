import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCardSendBrokenIcon],svg[solar-card-send-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path stroke-linejoin="round" d="M19 20v-6m0 0l2 2m-2-2l-2 2"></svg:path><svg:path d="M22 12c0-3.771 0-5.657-1.172-6.828S17.771 4 14 4m0 16h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12s0-5.657 1.172-6.828S6.229 4 10 4m0 12H6m7 0h-.5M2 10h5m15 0H11"></svg:path></svg:g>`,
})
export class SolarCardSendBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
