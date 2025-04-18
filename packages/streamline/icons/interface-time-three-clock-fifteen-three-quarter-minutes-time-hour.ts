import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeThreeClockFifteenThreeQuarterMinutesTimeHourIcon],svg[streamline-interface-time-three-clock-fifteen-three-quarter-minutes-time-hour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 7A6.5 6.5 0 0 0 7 .5V7ZM2 7H.5m2.96-3.54L2.4 2.4m1.06 8.14L2.4 11.6M7 12v1.5m3.54-2.96l1.06 1.06"></svg:path>`,
})
export class StreamlineInterfaceTimeThreeClockFifteenThreeQuarterMinutesTimeHourIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
