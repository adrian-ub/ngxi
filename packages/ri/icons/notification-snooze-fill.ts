import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNotificationSnoozeFillIcon],svg[ri-notification-snooze-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17h-2v-7a8 8 0 1 0-16 0v7H2v2h20zm-7 6v-2H9v2zM9 9V7h6v2.414L11.414 13H15v2H9v-2.414L12.586 9z"></svg:path>`,
})
export class RiNotificationSnoozeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
