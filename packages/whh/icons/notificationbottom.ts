import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhNotificationbottomIcon],svg[whh-notificationbottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-151l-192 256l-192-256h-151q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m-23-576h-640q-26 0-45 19t-19 45.5t19 45t45 18.5h640q26 0 45-18.5t19-45t-19-45.5t-45-19m0 256h-640q-26 0-45 19t-19 45.5t19 45t45 18.5h640q26 0 45-18.5t19-45t-19-45.5t-45-19"></svg:path>`,
})
export class WhhNotificationbottomIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
