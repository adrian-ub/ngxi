import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNotificationSnoozeLineIcon],svg[ri-notification-snooze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17h-2v-7a8 8 0 1 0-16 0v7H2v2h20zm-4-7v7H6v-7a6 6 0 1 1 12 0m-3 13v-2H9v2zM9 9h3.586L9 12.586V15h6v-2h-3.586L15 9.414V7H9z"></svg:path>`,
})
export class RiNotificationSnoozeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
