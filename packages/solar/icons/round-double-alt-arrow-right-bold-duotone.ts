import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarRoundDoubleAltArrowRightBoldDuotoneIcon],svg[solar-round-double-alt-arrow-right-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" opacity=".5"></svg:path><svg:path fill="currentColor" d="M9.03 15.53a.75.75 0 0 1-1.06-1.06L10.44 12L7.97 9.53a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06z"></svg:path><svg:path fill="currentColor" d="M13.03 15.53a.75.75 0 1 1-1.06-1.06L14.44 12l-2.47-2.47a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06z"></svg:path>`,
})
export class SolarRoundDoubleAltArrowRightBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
