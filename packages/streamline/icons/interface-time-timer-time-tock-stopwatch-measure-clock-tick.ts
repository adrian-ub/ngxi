import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeTimerTimeTockStopwatchMeasureClockTickIcon],svg[streamline-interface-time-timer-time-tock-stopwatch-measure-clock-tick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="8" r="5.5"></svg:circle><svg:path d="M.5 2.5A8.69 8.69 0 0 1 3 .5m10.5 2a8.69 8.69 0 0 0-2.5-2M7 5v3h2.5"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTimeTimerTimeTockStopwatchMeasureClockTickIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
