import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNotificationOffLineIcon],svg[ri-notification-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.586 20H4a.5.5 0 0 1-.4-.8l.4-.533V10c0-1.33.325-2.584.899-3.687L1.394 2.808l1.414-1.415l19.799 19.8l-1.415 1.414zM6.408 7.822A6 6 0 0 0 6 10v8h10.586zM20 15.786l-2-2V10a6 6 0 0 0-8.99-5.203L7.56 3.345A8 8 0 0 1 20 10zM9.5 21h5a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class RiNotificationOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
