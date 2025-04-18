import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationMessageAlertIcon],svg[streamline-notification-message-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.5 2.5V4m0 2.25a.25.25 0 0 1 0-.5m0 .5a.25.25 0 0 0 0-.5"></svg:path><svg:path d="M9.5.5a4 4 0 0 0-4 4a4.2 4.2 0 0 0 .32 1.58L5 8l2.14-.27A4 4 0 1 0 9.5.5"></svg:path><svg:path d="M5 .5H1.5a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2m-5 .5h1"></svg:path></svg:g>`,
})
export class StreamlineNotificationMessageAlertIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
