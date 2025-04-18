import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsNotificationOffIcon],svg[bx-bxs-notification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="6" r="3" fill="currentColor"></svg:circle><svg:path d="M20 18v-7.422A4.962 4.962 0 0 1 18 11a5 5 0 0 1-5-5c0-.712.153-1.387.422-2H6c-.178 0-.347.031-.51.076L3.707 2.293L2.293 3.707l18 18l1.414-1.414l-1.783-1.783c.045-.163.076-.332.076-.51zM4 18c0 1.103.897 2 2 2h9.879L4 8.121V18z" fill="currentColor"></svg:path>`,
})
export class BxBxsNotificationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
