import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceAlertAlarmBellOffDisableSilentNotificationOffSilenceAlarmBellAlertIcon],svg[streamline-interface-alert-alarm-bell-off-disable-silent-notification-off-silence-alarm-bell-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m.5 13.5l13-13M6 13.5h2M8.73.84A4.51 4.51 0 0 0 2.5 5v2.5M3 11h10.5a2 2 0 0 1-2-2V5a4.42 4.42 0 0 0-.5-2"></svg:path>`,
})
export class StreamlineInterfaceAlertAlarmBellOffDisableSilentNotificationOffSilenceAlarmBellAlertIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
