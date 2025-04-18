import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNotificationAlarm2Icon],svg[streamline-notification-alarm-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.75 5.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M9.933 8v1.534c0 .39.155.766.432 1.042c.276.277.744.432 1.135.432H.5c.391 0 .859-.155 1.135-.432a1.47 1.47 0 0 0 .432-1.042V5.933A3.933 3.933 0 0 1 6 2M5 13.5h2"></svg:path>`,
})
export class StreamlineNotificationAlarm2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
