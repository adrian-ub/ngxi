import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSendClock24RegularIcon],svg[fluent-send-clock-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.3 3.272L5.693 12l-3.395 8.728l-.03.096a.75.75 0 0 0 1.065.847l7.674-3.838a6.6 6.6 0 0 1 .147-1.75L4.402 19.46l2.61-6.71h6.051a6.5 6.5 0 0 1 1.3-.944a.75.75 0 0 0-.724-.556H7.01L4.402 4.54l12.924 6.462L17.5 11c1.553 0 2.98.545 4.098 1.454a.752.752 0 0 0-.264-1.125l-18-9l-.093-.04c-.586-.206-1.178.375-.942.983M23 17.5a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0M17.5 14a.5.5 0 0 1 .5.5V17h2a.5.5 0 0 1 0 1h-2.5a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class FluentSendClock24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
