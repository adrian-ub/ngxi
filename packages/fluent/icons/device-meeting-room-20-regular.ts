import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceMeetingRoom20RegularIcon],svg[fluent-device-meeting-room-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.096 3a2.5 2.5 0 0 0-2.438 1.946l-1.59 7A2.5 2.5 0 0 0 4.504 15h10.989a2.5 2.5 0 0 0 2.438-3.054l-1.591-7A2.5 2.5 0 0 0 13.903 3zM4.633 5.168A1.5 1.5 0 0 1 6.096 4h7.807a1.5 1.5 0 0 1 1.463 1.168l1.59 7A1.5 1.5 0 0 1 15.495 14H4.505a1.5 1.5 0 0 1-1.463-1.832zM5.5 16a.5.5 0 0 0 0 1h9a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentDeviceMeetingRoom20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
