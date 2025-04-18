import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceTimeAlarmNotificationAlertBellWakeClockAlarmIcon],svg[streamline-interface-time-alarm-notification-alert-bell-wake-clock-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="8" r="5.5"></svg:circle><svg:path d="M5.5.5h3M7 .5v2M5.5 6L7 8h2.5M12 2l1 1M2 2L1 3"></svg:path></svg:g>`,
})
export class StreamlineInterfaceTimeAlarmNotificationAlertBellWakeClockAlarmIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
