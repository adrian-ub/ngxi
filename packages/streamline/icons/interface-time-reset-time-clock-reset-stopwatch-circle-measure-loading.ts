import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeResetTimeClockResetStopwatchCircleMeasureLoadingIcon],svg[streamline-interface-time-reset-time-clock-reset-stopwatch-circle-measure-loading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 .5A6.5 6.5 0 1 1 .5 7a7.23 7.23 0 0 1 2-5"></svg:path><svg:path d="m.5 2.5l2-.5l.5 2m4-.5v4l2.6 1.3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTimeResetTimeClockResetStopwatchCircleMeasureLoadingIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
