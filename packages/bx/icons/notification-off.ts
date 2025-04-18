import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxNotificationOffIcon],svg[bx-notification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.71 20.296l-1.786-1.786c.045-.163.076-.332.076-.51v-7h-2v5.586L7.414 6H13V4H6c-.178 0-.347.031-.51.076l-1.78-1.78L2.296 3.71l18 18zM4 8.121V18c0 1.103.897 2 2 2h9.879l-2-2H6v-7.879z"></svg:path><svg:circle cx="18" cy="6" r="3" fill="currentColor"></svg:circle>`,
})
export class BxNotificationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
