import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineComputerDesktopWarningAlertDesktopDisplayDeviceWarningNotificationComputerIcon],svg[streamline-computer-desktop-warning-alert-desktop-display-device-warning-notification-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M3.5 2H1a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-8A.5.5 0 0 0 13 2h-2.5M6 11l-1 2.5M8 11l1 2.5m-5 0h6m-3-12V5"></svg:path><svg:circle cx="7" cy="8" r=".5"></svg:circle></svg:g>`,
})
export class StreamlineComputerDesktopWarningAlertDesktopDisplayDeviceWarningNotificationComputerIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
