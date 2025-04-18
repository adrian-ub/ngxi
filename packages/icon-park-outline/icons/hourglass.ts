import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHourglassIcon],svg[icon-park-outline-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 4h32M8 44h32M12 4v12l9 10m15 18V29.5L27 21M12 44V30l6.5-6.5"></svg:path><svg:path d="M36 4v12l-6.5 7.5M18 33h1m10.147-.353l.707.707M24 38h1"></svg:path></svg:g>`,
})
export class IconParkOutlineHourglassIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
