import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSendClock24FilledIcon],svg[fluent-send-clock-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.283 13.452l7.532-1.255a.2.2 0 0 0 0-.395l-7.532-1.255a.5.5 0 0 1-.386-.318L2.3 3.272c-.248-.64.421-1.25 1.035-.943l18 9a.752.752 0 0 1 .263 1.125a6.5 6.5 0 0 0-10.589 5.38L3.334 21.67c-.614.306-1.283-.304-1.035-.943l2.598-6.958a.5.5 0 0 1 .386-.318M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentSendClock24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
