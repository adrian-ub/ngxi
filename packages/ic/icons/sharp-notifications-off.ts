import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpNotificationsOffIcon],svg[ic-sharp-notifications-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-11c0-3.07-1.64-5.64-4.5-6.32V2.5h-3v2.18c-.24.06-.47.15-.69.23L18 13.1zM5.41 3.35L4 4.76l2.81 2.81C6.29 8.57 6 9.73 6 11v5l-2 2v1h14.24l1.74 1.74l1.41-1.41z"></svg:path>`,
})
export class IcSharpNotificationsOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
