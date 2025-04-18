import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAddBellNotificationIcon],svg[streamline-add-bell-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5 13.5h2M5.09 2.1A4 4 0 0 0 2 6v3.5A1.5 1.5 0 0 1 .5 11h11A1.5 1.5 0 0 1 10 9.5V9m.5-8.5v6m-3-3h6"></svg:path>`,
})
export class StreamlineAddBellNotificationIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
