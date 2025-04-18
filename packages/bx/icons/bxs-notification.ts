import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBxsNotificationIcon],svg[bx-bxs-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="6" r="3" fill="currentColor"></svg:circle><svg:path d="M13 6c0-.712.153-1.387.422-2H6c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7.422A4.962 4.962 0 0 1 18 11a5 5 0 0 1-5-5z" fill="currentColor"></svg:path>`,
})
export class BxBxsNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
