import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeStopWatchThirdQuarterQuartersTimeMeasureStopwatchThreeSecondsMinutesIcon],svg[streamline-interface-time-stop-watch-third-quarter-quarters-time-measure-stopwatch-three-seconds-minutes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.75 2.5A5.5 5.5 0 1 1 1.25 8h5.5Zm-1.5-2h3m-1.5 2v-2m5 1.5l1 1M2.86 4.11l1.06 1.06"></svg:path>`,
})
export class StreamlineInterfaceTimeStopWatchThirdQuarterQuartersTimeMeasureStopwatchThreeSecondsMinutesIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
