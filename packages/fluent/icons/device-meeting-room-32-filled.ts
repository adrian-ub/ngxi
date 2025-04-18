import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceMeetingRoom32FilledIcon],svg[fluent-device-meeting-room-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.374 7.113A4.25 4.25 0 0 1 9.47 4h13.06a4.25 4.25 0 0 1 4.096 3.113l3.22 11.588c.738 2.664-1.265 5.299-4.03 5.299H6.183c-2.765 0-4.768-2.635-4.028-5.299zM8 26a1 1 0 1 0 0 2h16.002a1 1 0 1 0 0-2z"></svg:path>`,
})
export class FluentDeviceMeetingRoom32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
