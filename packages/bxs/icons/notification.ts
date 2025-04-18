import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsNotificationIcon],svg[bxs-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="6" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 6c0-.712.153-1.387.422-2H6c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7.422A5 5 0 0 1 18 11a5 5 0 0 1-5-5"></svg:path>`,
})
export class BxsNotificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
