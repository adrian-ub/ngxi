import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamBatteryChargingFIcon],svg[jam-battery-charging-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2zm-8.775 5.11q.365-.245.408-.738V5.72l2.432.898a1 1 0 0 0 1.285-.591c.191-.518-.121-1.066-.639-1.258A381 381 0 0 1 9.946 3.41c-.441-.163-.755-.005-1.03.204q-.273.21-.326.806l.043 1.49l-2.428-.877a1 1 0 1 0-.68 1.881q2.484.909 3.77 1.377c.34.124.566.06.93-.183z"></svg:path>`,
})
export class JamBatteryChargingFIcon {
  readonly viewBox = input("-2 -6 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
