import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineDisableBellNotificationIcon],svg[streamline-disable-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m13.5 13.499l-13-13m10 9.996H13c-.442 0-.757-.175-1.07-.488a1.67 1.67 0 0 1-.487-1.178V4.942a4.443 4.443 0 0 0-8.42-1.979M6 13.501h2M2.557 5.499v3.33c0 .442-.175.866-.488 1.178c-.312.313-.627.488-1.069.488h6.5"></svg:path>`,
})
export class StreamlineDisableBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
