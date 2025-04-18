import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationSnooze03Icon],svg[hugeicons-notification-snooze-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M20 11.845q.094.177.214.349c.48.676 1.125 1.368 1.256 2.2c.213 1.353-.738 2.292-1.902 2.76c-4.463 1.795-10.673 1.795-15.136 0c-1.164-.468-2.115-1.407-1.902-2.76c.13-.832.777-1.524 1.256-2.2c.627-.897.689-1.874.69-2.915C4.475 5.26 7.843 2 12 2q.772.001 1.5.145"></svg:path><svg:path d="M16.016 3h3.672c.773 0 1.16 0 1.262.24s-.16.528-.685 1.104l-3.418 3.312c-.526.576-.934.864-.831 1.104s.634.24 1.407.24H21M9 21c.796.622 1.848 1 3 1s2.204-.378 3-1"></svg:path></svg:g>`,
})
export class HugeiconsNotificationSnooze03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
