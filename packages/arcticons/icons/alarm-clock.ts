import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlarmClockIcon],svg[arcticons-alarm-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="9.25" height="4.62" x="4.41" y="7.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".92" transform="rotate(-44.72 9.028 9.839)"></svg:rect><svg:rect width="4.62" height="9.25" x="36.66" y="5.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx=".92" transform="rotate(-45.28 38.976 9.838)"></svg:rect><svg:circle cx="24.1" cy="24.84" r="17.11" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.88 37.76l-1.18 4.92m23.62-4.92l1.18 4.92"></svg:path><svg:circle cx="24.1" cy="24.84" r="1.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.1 12.28v10.93m1.64 1.63h7.84"></svg:path>`,
})
export class ArcticonsAlarmClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
