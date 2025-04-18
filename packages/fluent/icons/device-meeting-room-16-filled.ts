import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceMeetingRoom16FilledIcon],svg[fluent-device-meeting-room-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.739 3.459A2 2 0 0 1 4.665 2h6.67c.896 0 1.683.596 1.926 1.459l1.66 5.898A2.08 2.08 0 0 1 12.917 12H3.083a2.08 2.08 0 0 1-2.004-2.643zM4.497 13a.5.5 0 1 0 0 1h7.005a.5.5 0 1 0 0-1z"></svg:path>`,
})
export class FluentDeviceMeetingRoom16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
