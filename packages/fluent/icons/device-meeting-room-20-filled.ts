import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceMeetingRoom20FilledIcon],svg[fluent-device-meeting-room-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.658 4.946A2.5 2.5 0 0 1 6.096 3h7.807a2.5 2.5 0 0 1 2.438 1.946l1.59 7A2.5 2.5 0 0 1 15.495 15H4.505a2.5 2.5 0 0 1-2.438-3.054zM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentDeviceMeetingRoom20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
