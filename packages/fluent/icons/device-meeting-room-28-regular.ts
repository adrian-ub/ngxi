import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceMeetingRoom28RegularIcon],svg[fluent-device-meeting-room-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.35 3a3.5 3.5 0 0 0-3.378 2.58L2.143 15.947C1.45 18.492 3.365 21 6.003 21h15.994c2.638 0 4.554-2.508 3.86-5.052L23.028 5.579A3.5 3.5 0 0 0 19.651 3zM6.42 5.974A2 2 0 0 1 8.35 4.5h11.3a2 2 0 0 1 1.93 1.474l2.83 10.368a2.5 2.5 0 0 1-2.413 3.158H6.003a2.5 2.5 0 0 1-2.412-3.158zM7.747 22.5a.75.75 0 1 0 0 1.5H20.25a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class FluentDeviceMeetingRoom28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
