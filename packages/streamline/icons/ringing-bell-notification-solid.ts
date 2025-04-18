import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRingingBellNotificationSolidIcon],svg[streamline-ringing-bell-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.763.313a.75.75 0 0 1-.172 1.046A5.02 5.02 0 0 0 1.5 5.433a.75.75 0 1 1-1.5 0A6.52 6.52 0 0 1 2.716.14a.75.75 0 0 1 1.047.172Zm.055 2.255A4.5 4.5 0 0 1 11.5 5.75v3.5a1 1 0 0 0 1 1a.5.5 0 0 1 0 1h-11a.5.5 0 0 1 0-1a1 1 0 0 0 1-1v-3.5a4.5 4.5 0 0 1 1.318-3.182M5.25 13.25A.75.75 0 0 1 6 12.5h2A.75.75 0 0 1 8 14H6a.75.75 0 0 1-.75-.75M11.284.14a.75.75 0 1 0-.875 1.22A5.02 5.02 0 0 1 12.5 5.432a.75.75 0 1 0 1.5 0A6.52 6.52 0 0 0 11.284.14" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineRingingBellNotificationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
