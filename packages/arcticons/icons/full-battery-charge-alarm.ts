import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFullBatteryChargeAlarmIcon],svg[arcticons-full-battery-charge-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.154 8.404h-3.218V4.5h-7.872v3.904h-3.218a2.57 2.57 0 0 0-2.57 2.57V40.93a2.57 2.57 0 0 0 2.57 2.57h14.308a2.57 2.57 0 0 0 2.57-2.57V10.973a2.57 2.57 0 0 0-2.57-2.569m2.566 7.826H26m-1.13 0H14.28"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.894 24.966H26V14.112l-7.883 14.824h3.894V39.79z"></svg:path>`,
})
export class ArcticonsFullBatteryChargeAlarmIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
