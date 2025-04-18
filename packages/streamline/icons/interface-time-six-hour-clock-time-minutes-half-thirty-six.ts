import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeSixHourClockTimeMinutesHalfThirtySixIcon],svg[streamline-interface-time-six-hour-clock-time-minutes-half-thirty-six-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 13.5a6.5 6.5 0 0 0 0-13ZM2 7H.5m2.96-3.54L2.4 2.4m1.06 8.14L2.4 11.6"></svg:path>`,
})
export class StreamlineInterfaceTimeSixHourClockTimeMinutesHalfThirtySixIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
