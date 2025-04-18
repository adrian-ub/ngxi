import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonDownOutlineIcon],svg[carbon-pentagon-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 27.76L4.173 19.075L8.699 5H23.3l4.526 14.076zM16 30a1 1 0 0 0 .592-.194l13-9.544a1 1 0 0 0 .36-1.112l-4.97-15.456A1 1 0 0 0 24.03 3H7.97a1 1 0 0 0-.952.694L2.048 19.15a1 1 0 0 0 .36 1.112l13 9.544c.176.13.384.194.592.194"></svg:path>`,
})
export class CarbonPentagonDownOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
