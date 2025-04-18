import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBatteryChargeIcon],svg[icon-park-outline-battery-charge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M13 14H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7m18 0h7a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2h-7m-8.998 0L17 24.001h10.004L22 34"></svg:path><svg:path fill="currentColor" d="M42 20h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2z"></svg:path></svg:g>`,
})
export class IconParkOutlineBatteryChargeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
