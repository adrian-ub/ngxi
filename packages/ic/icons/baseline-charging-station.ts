import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineChargingStationIcon],svg[ic-baseline-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 11l-3 6v-4h-2l3-6v4zM7 1h10c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2m0 5v12h10V6z"></svg:path>`,
})
export class IcBaselineChargingStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
