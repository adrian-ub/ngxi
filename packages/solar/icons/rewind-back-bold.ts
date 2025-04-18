import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRewindBackBoldIcon],svg[solar-rewind-back-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17.574V6.426c0-1.847-1.6-3.015-2.903-2.118L13 8.768V7.123c0-1.616-1.467-2.638-2.661-1.853L2.92 10.147c-1.228.807-1.228 2.899 0 3.706l7.418 4.877c1.194.785 2.661-.237 2.661-1.853v-1.645l6.097 4.46c1.302.897 2.903-.27 2.903-2.118"></svg:path>`,
})
export class SolarRewindBackBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
