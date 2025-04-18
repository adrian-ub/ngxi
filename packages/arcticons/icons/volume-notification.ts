import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsVolumeNotificationIcon],svg[arcticons-volume-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.243 31.431a5.742 5.742 0 1 0-11.484 0a5.742 5.742 0 0 0 11.484 0V10.828H42.5m-37 16.5h15.706M5.5 19.078h23.8M5.5 10.827h23.8"></svg:path>`,
})
export class ArcticonsVolumeNotificationIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
