import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeviceMeetingRoom48FilledIcon],svg[fluent-device-meeting-room-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.97 10.403A5.94 5.94 0 0 1 14.708 6h18.586a5.94 5.94 0 0 1 5.736 4.403l4.756 17.769c1.057 3.95-1.92 7.828-6.009 7.828H10.224c-4.09 0-7.066-3.878-6.01-7.828zM13.25 38a1.25 1.25 0 1 0 0 2.5h21.5a1.25 1.25 0 1 0 0-2.5z"></svg:path>`,
})
export class FluentDeviceMeetingRoom48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
