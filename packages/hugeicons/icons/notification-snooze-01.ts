import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationSnooze01Icon],svg[hugeicons-notification-snooze-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M12 5a6.85 6.85 0 0 0-6.842 6.491c-.073 1.396.011 2.882-1.236 3.817A2.3 2.3 0 0 0 3 17.153C3 18.15 3.782 19 4.8 19h14.4c1.018 0 1.8-.85 1.8-1.847c0-.726-.342-1.41-.922-1.845a2.66 2.66 0 0 1-.94-1.308"></svg:path><svg:path d="M16.016 5h3.672c.773 0 1.16 0 1.262.24s-.16.528-.685 1.104l-3.418 3.312c-.526.576-.934.864-.831 1.104s.634.24 1.407.24H21M10.5 3.125C10.5 3.953 11.172 5 12 5s1.5-1.047 1.5-1.875S12.828 2 12 2s-1.5.297-1.5 1.125M15 19a3 3 0 1 1-6 0"></svg:path></svg:g>`,
})
export class HugeiconsNotificationSnooze01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
