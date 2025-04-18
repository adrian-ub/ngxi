import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeRewindBackReturnClockTimerCountdownIcon],svg[streamline-interface-time-rewind-back-return-clock-timer-countdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M.5 7A6.5 6.5 0 1 0 7 .5a7.23 7.23 0 0 0-5 2"></svg:path><svg:path d="m2.5.5l-.5 2L4 3m3 .5v4L4.4 8.8"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTimeRewindBackReturnClockTimerCountdownIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
