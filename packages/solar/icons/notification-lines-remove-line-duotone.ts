import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarNotificationLinesRemoveLineDuotoneIcon],svg[solar-notification-lines-remove-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M22 10.5V12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2h1.5" opacity=".5"></svg:path><svg:path d="M7 14h9m-9 3.5h6M22 2l-5 5m0-5l5 5"></svg:path></svg:g>`,
})
export class SolarNotificationLinesRemoveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
