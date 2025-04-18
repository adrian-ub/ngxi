import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationAlarm2SolidIcon],svg[streamline-notification-alarm-2-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.25 2.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M7.46.697a4.603 4.603 0 0 0-5.937 4.407v3.373a.695.695 0 0 1-.695.695a.75.75 0 0 0 0 1.5h10.599a.75.75 0 1 0 0-1.5a.695.695 0 0 1-.695-.695V6.25A3.75 3.75 0 0 1 7.46.697M4.378 12.75a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineNotificationAlarm2SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
