import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundAltArrowDownBoldDuotoneIcon],svg[solar-round-alt-arrow-down-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M15.53 11.03a.75.75 0 1 0-1.06-1.06L12 12.44L9.53 9.97a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0z"></svg:path>`,
})
export class SolarRoundAltArrowDownBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
