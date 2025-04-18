import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpChargingStationIcon],svg[ic-sharp-charging-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 11l-3 6v-4h-2l3-6v4zM5 1h14v22H5zm2 5v12h10V6z"></svg:path>`,
})
export class IcSharpChargingStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
