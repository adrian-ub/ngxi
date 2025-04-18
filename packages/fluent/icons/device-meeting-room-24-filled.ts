import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceMeetingRoom24FilledIcon],svg[fluent-device-meeting-room-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.093 5.346A3.06 3.06 0 0 1 7.07 3h9.858c1.416 0 2.647.97 2.979 2.346l1.992 8.273A3.55 3.55 0 0 1 18.448 18H5.553A3.55 3.55 0 0 1 2.1 13.62zM6.749 19a.75.75 0 1 0 0 1.5H17.25a.75.75 0 1 0 0-1.5z"></svg:path>`,
})
export class FluentDeviceMeetingRoom24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
