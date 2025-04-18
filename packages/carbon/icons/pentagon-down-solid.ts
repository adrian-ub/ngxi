import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonDownSolidIcon],svg[carbon-pentagon-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30a1 1 0 0 0 .592-.194l13-9.544a1 1 0 0 0 .36-1.112l-4.97-15.456A1 1 0 0 0 24.03 3H7.97a1 1 0 0 0-.952.694L2.048 19.15a1 1 0 0 0 .36 1.112l13 9.544c.176.13.384.194.592.194"></svg:path>`,
})
export class CarbonPentagonDownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
