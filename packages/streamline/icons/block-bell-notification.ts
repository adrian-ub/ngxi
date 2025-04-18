import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBlockBellNotificationIcon],svg[streamline-block-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5 13.5h2M4.48 2.3A4 4 0 0 0 2 6v3.5A1.5 1.5 0 0 1 .5 11h11A1.5 1.5 0 0 1 10 9.5"></svg:path><svg:path d="M10.25 7a3.25 3.25 0 1 1 0-6.5a3.25 3.25 0 0 1 0 6.5m2.3-.95l-4.6-4.6"></svg:path></svg:g>`,
})
export class StreamlineBlockBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
