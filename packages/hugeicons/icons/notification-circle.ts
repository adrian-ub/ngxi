import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationCircleIcon],svg[hugeicons-notification-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 5.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0"></svg:path><svg:path d="M21.95 11q.05.493.05 1c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2q.507 0 1 .05M8 10h4m-4 5h8"></svg:path></svg:g>`,
})
export class HugeiconsNotificationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
