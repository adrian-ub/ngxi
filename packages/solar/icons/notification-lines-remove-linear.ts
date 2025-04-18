import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveLinearIcon],svg[solar-notification-lines-remove-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5M7 14h9m-9 3.5h6M22 2l-5 5m0-5l5 5"></svg:path>`,
})
export class SolarNotificationLinesRemoveLinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
