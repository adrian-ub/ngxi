import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationSnooze02Icon],svg[hugeicons-notification-snooze-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M13.5 2.149A7.6 7.6 0 0 0 12 2C7.844 2 4.475 5.358 4.475 9.5c0 1.072-.062 2.08-.69 3.003c-.478.697-1.124 1.41-1.255 2.267c-.213 1.394.738 2.361 1.902 2.843c4.463 1.85 10.673 1.85 15.136 0c1.164-.482 2.115-1.45 1.902-2.843c-.1-.655-.5-1.226-.898-1.77"></svg:path><svg:path d="M16.016 4h3.672c.773 0 1.16 0 1.262.24s-.16.528-.685 1.104l-3.418 3.312c-.526.576-.934.864-.831 1.104s.634.24 1.407.24H21M8 19c.458 1.725 2.076 3 4 3c1.925 0 3.541-1.275 4-3"></svg:path></svg:g>`,
})
export class HugeiconsNotificationSnooze02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
