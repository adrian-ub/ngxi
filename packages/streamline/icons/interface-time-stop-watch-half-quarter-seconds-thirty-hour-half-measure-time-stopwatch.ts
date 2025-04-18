import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeStopWatchHalfQuarterSecondsThirtyHourHalfMeasureTimeStopwatchIcon],svg[streamline-interface-time-stop-watch-half-quarter-seconds-thirty-hour-half-measure-time-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.5a5.5 5.5 0 0 1 0 11Zm-1.5-2h3m-1.5 0v2m5-.5l1 1M2.86 4.11l1.06 1.06M1.25 8h1.5m.11 3.89l1.06-1.06"></svg:path>`,
})
export class StreamlineInterfaceTimeStopWatchHalfQuarterSecondsThirtyHourHalfMeasureTimeStopwatchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
