import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeNineThreeQuartersFourtyFiveClockMinutesNineTimeHourIcon],svg[streamline-interface-time-nine-three-quarters-fourty-five-clock-minutes-nine-time-hour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M.5 7A6.5 6.5 0 1 0 7 .5V7Zm2.96-3.54L2.4 2.4"></svg:path>`,
})
export class StreamlineInterfaceTimeNineThreeQuartersFourtyFiveClockMinutesNineTimeHourIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
