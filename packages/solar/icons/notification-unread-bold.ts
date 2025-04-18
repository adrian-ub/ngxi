import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarNotificationUnreadBoldIcon],svg[solar-notification-unread-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c1.399 0 2.59 0 3.612.038a4.5 4.5 0 0 0 6.35 6.35C22 9.41 22 10.601 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22"></svg:path><svg:path fill="currentColor" d="M22 5a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path>`,
})
export class SolarNotificationUnreadBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
