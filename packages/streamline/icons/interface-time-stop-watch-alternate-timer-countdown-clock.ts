import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeStopWatchAlternateTimerCountdownClockIcon],svg[streamline-interface-time-stop-watch-alternate-timer-countdown-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 13.5A6.5 6.5 0 1 1 13.5 7a7.23 7.23 0 0 1-2 5"></svg:path><svg:path d="m13.5 11.5l-2 .5l-.5-2M9 9L7 6.5H4"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTimeStopWatchAlternateTimerCountdownClockIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
