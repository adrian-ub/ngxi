import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAndroid2LinuxNotificationsIcon],svg[arcticons-android-2-linux-notifications-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.061 22.151v9.421h4.71m2.91.001v-9.421l6.242 9.421v-9.421m-26.814-.71a5.023 5.023 0 0 1 6.014-4.922c2.104.405 3.784 2.225 3.994 4.357c.156 1.587-.346 3.152-1.442 4.114c-2.03 1.781-8.566 6.582-8.566 6.582h10.036m-13.976-3.151H7.087M6.07 31.545l3.062-9.393l3.062 9.421"></svg:path>`,
})
export class ArcticonsAndroid2LinuxNotificationsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
