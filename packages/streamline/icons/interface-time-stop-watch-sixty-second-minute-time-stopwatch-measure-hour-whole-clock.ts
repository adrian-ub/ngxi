import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeStopWatchSixtySecondMinuteTimeStopwatchMeasureHourWholeClockIcon],svg[streamline-interface-time-stop-watch-sixty-second-minute-time-stopwatch-measure-hour-whole-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5.5h3M7 .5V4m-3.89.11l1.06 1.06M1.5 8H3m.11 3.89l1.06-1.06M7 13.5V12m3.89-.11l-1.06-1.06M12.5 8H11m-.11-3.89L9.83 5.17"></svg:path>`,
})
export class StreamlineInterfaceTimeStopWatchSixtySecondMinuteTimeStopwatchMeasureHourWholeClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
